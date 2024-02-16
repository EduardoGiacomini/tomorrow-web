export type PomodoroAction =
  | PomodoroStartAction
  | PomodoroPauseAction
  | PomodoroDecrementAction;

export interface PomodoroStartAction {
  type: "start";
  seconds: number;
}

export interface PomodoroPauseAction {
  type: "pause";
}

export interface PomodoroDecrementAction {
  type: "decrement";
}

export enum PomodoroError {
  tooLong,
  tooShort,
}

export interface PomodoroState {
  error?: PomodoroError | undefined;
  running: boolean;
  seconds: number;
}

export const POMODORO_INITIAL_STATE: PomodoroState = {
  running: false,
  seconds: 0,
};
