// Shared Audio Singleton to guarantee single audio stream and synchronized UI across unboxing & main page
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

const attemptPlay = (audio: HTMLAudioElement, retries = 3) => {
  audio
    .play()
    .then(() => {
      notifyListeners(true);
      fadeIn(audio);
    })
    .catch((err) => {
      console.warn("Audio play attempt failed:", err);
      if (retries > 0) {
        // Retry after short delay (helps on slow mobile networks)
        setTimeout(() => attemptPlay(audio, retries - 1), 800);
      }
    });
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

  // CRITICAL for Android Chrome: call play() SYNCHRONOUSLY inside the user
  // gesture — any async gap (like waiting for canplay) breaks autoplay policy.
  attemptPlay(audio);
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
