import { PomodoroState, PomodoroResumeAction } from "./pomodoro-state";

export const resumePomodoro = (): PomodoroResumeAction => ({
  type: "resume",
});

/**
 * Resume the current pomodoro counter based on docs/pomodoro/resume-pomodoro.feature.
 */
export const pomodoroResumeAction = (
  state: PomodoroState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _action: PomodoroResumeAction
): PomodoroState => {
  const { running, seconds } = state;

  if (running || seconds <= 0) {
    return state;
  }

  return { ...state, running: true };
};
