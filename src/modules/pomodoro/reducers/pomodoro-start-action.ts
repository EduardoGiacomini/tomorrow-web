import {
  PomodoroError,
  PomodoroState,
  PomodoroStartAction,
} from "./pomodoro-state";

export const startPomodoro = (seconds: number): PomodoroStartAction => ({
  type: "start",
  seconds,
});

/**
 * Start new pomodoro counter based on docs/pomodoro/start-pomodoro.feature.
 */
export const pomodoroStartAction = (
  state: PomodoroState,
  action: PomodoroStartAction
): PomodoroState => {
  const { running } = state;
  const { seconds } = action;

  if (running) {
    return state;
  }

  const fiveMinutesInSeconds = 5 * 60;
  if (seconds < fiveMinutesInSeconds) {
    return { ...state, error: PomodoroError.tooShort };
  }

  const oneHourInSeconds = 60 * 60;
  if (seconds > oneHourInSeconds) {
    return { ...state, error: PomodoroError.tooLong };
  }

  return { ...state, seconds, running: true, error: undefined };
};
