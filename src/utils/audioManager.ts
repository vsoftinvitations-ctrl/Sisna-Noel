// Shared Audio Singleton to guarantee single audio stream and synchronized UI
let globalAudio: HTMLAudioElement | null = null;
const stateListeners = new Set<(playing: boolean) => void>();

const notifyListeners = (isPlaying: boolean) => {
  stateListeners.forEach((fn) => fn(isPlaying));
};

export const getIsMusicPlaying = () => {
  return globalAudio ? !globalAudio.paused : false;
};

// Fade in from 0 → target volume over duration ms
const fadeIn = (audio: HTMLAudioElement, target = 0.65, duration = 3000) => {
  audio.volume = 0;
  const startTime = performance.now();
  const tick = (now: number) => {
    if (!audio || audio.paused) return;
    const progress = Math.min((now - startTime) / duration, 1);
    audio.volume = parseFloat((target * progress).toFixed(3));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

export const startGlobalMusic = () => {
  if (!globalAudio) {
    globalAudio = new Audio("/images/sisna.mp3");
    globalAudio.loop = true;
    globalAudio.preload = "auto";
    globalAudio.volume = 0;
  }

  const audio = globalAudio;

  // If already playing, do nothing
  if (!audio.paused) return;

  // IMPORTANT for Android Chrome: play() MUST be called synchronously
  // within the user gesture (tap). Never defer to canplay — that loses
  // the gesture context and Android will block it.
  audio
    .play()
    .then(() => {
      notifyListeners(true);
      fadeIn(audio);
    })
    .catch(() => {
      // On some Android devices the first attempt fails if the audio
      // context was suspended. Retry once after a short delay.
      setTimeout(() => {
        audio
          .play()
          .then(() => {
            notifyListeners(true);
            fadeIn(audio);
          })
          .catch((e) => console.warn("Audio play failed:", e));
      }, 300);
    });
};

export const pauseGlobalMusic = () => {
  if (globalAudio) {
    globalAudio.pause();
    notifyListeners(false);
  }
};

export const toggleGlobalMusic = () => {
  if (!globalAudio) {
    startGlobalMusic();
    return;
  }
  if (globalAudio.paused) {
    startGlobalMusic();
  } else {
    pauseGlobalMusic();
  }
};

export const subscribeMusicState = (callback: (playing: boolean) => void) => {
  stateListeners.add(callback);
  return () => {
    stateListeners.delete(callback);
  };
};
