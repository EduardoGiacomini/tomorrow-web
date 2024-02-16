import { PomodoroState, PomodoroPauseAction } from "./pomodoro-state";

export const pausePomodoro = (): PomodoroPauseAction => ({
  type: "pause",
});

/**
 * Pause the current pomodoro counter based on docs/pomodoro/pause-pomodoro.feature.
 */
export const pomodoroPauseAction = (
  state: PomodoroState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _action: PomodoroPauseAction
): PomodoroState => {
  return { ...state, running: false };
};
