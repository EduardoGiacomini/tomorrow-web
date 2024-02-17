declare module "use-sound" {
  type SpriteMap = {
    [key: string]: [number, number];
  };

  interface HookOptions {
    volume?: number;
    playbackRate?: number;
    interrupt?: boolean;
    soundEnabled?: boolean;
    sprite?: SpriteMap;
    onload?: () => void;
  }

  interface PlayOptions {
    id?: string;
    forceSoundEnabled?: boolean;
    playbackRate?: number;
  }

  type PlayFunction = (options?: PlayOptions) => void;

  interface ExposedData {
    sound: unknown | null;
    stop: (id?: string) => void;
    pause: (id?: string) => void;
    duration: number | null;
  }

  type ReturnedValue = [PlayFunction, ExposedData];

  export default function useSound(
    src: string | string[],
    options?: HookOptions
  ): ReturnedValue;
}
