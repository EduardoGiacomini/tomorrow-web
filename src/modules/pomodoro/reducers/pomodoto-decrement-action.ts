import { PomodoroState, PomodoroDecrementAction } from "./pomodoro-state";

export const decrementPomodoro = (): PomodoroDecrementAction => ({
  type: "decrement",
});

/**
 * Decrements one second from pomodoro timer.
 */
export const pomodoroDecrementAction = (
  state: PomodoroState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _action: PomodoroDecrementAction
): PomodoroState => {
  const { seconds, running } = state;

  if (!running || seconds <= 0) {
    return state;
  }

  return { ...state, seconds: seconds - 1 };
};
