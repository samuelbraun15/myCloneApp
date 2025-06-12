// In declarations.d.ts

declare module 'react-native-sound' {
  type SoundCallback = (success: boolean, error?: object) => void;

  interface Sound {
    new (filename: string, basePath?: string, callback?: (error: any) => void): Sound;
    play(callback?: SoundCallback): void;
    pause(callback?: () => void): void;
    stop(callback?: () => void): void;
    release(): void;
    getDuration(): number;
    getCurrentTime(callback: (seconds: number, isPlaying: boolean) => void): void;
    setCurrentTime(seconds: number): void;
    setVolume(volume: number): void;
    setPan(pan: number): void;
    setNumberOfLoops(loops: number): void;
    isLoaded(): boolean;
    isPlaying(): boolean;
  }

  const Sound: {
    new (filename: string, basePath?: string, callback?: (error: any) => void): Sound;
    setCategory(category: string, mixWithOthers?: boolean): void;
    MAIN_BUNDLE: string;
  };

  export default Sound;
}