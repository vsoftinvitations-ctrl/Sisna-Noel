// Shared Audio Singleton to guarantee single audio stream and synchronized UI across unboxing & main page
let globalAudio: HTMLAudioElement | null = null;
const stateListeners = new Set<(playing: boolean) => void>();

const notifyListeners = (isPlaying: boolean) => {
  stateListeners.forEach((fn) => fn(isPlaying));
};

export const getIsMusicPlaying = () => {
  return globalAudio ? !globalAudio.paused : false;
};

export const startGlobalMusic = () => {
  if (!globalAudio) {
    globalAudio = new Audio("/images/sisna.mp3");
    globalAudio.loop = true;
    globalAudio.volume = 0; // start silent, fade in
  }

  globalAudio
    .play()
    .then(() => {
      notifyListeners(true);
      // Smooth fade-in: 0 → 0.65 over ~3 seconds
      const TARGET_VOLUME = 0.65;
      const FADE_DURATION = 3000; // ms
      const startTime = performance.now();
      const tick = (now: number) => {
        if (!globalAudio || globalAudio.paused) return;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / FADE_DURATION, 1);
        globalAudio.volume = parseFloat((TARGET_VOLUME * progress).toFixed(3));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    })
    .catch((err) => console.warn("Audio play prevented:", err));
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
