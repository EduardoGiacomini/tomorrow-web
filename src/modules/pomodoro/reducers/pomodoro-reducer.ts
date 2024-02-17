import { pomodoroPauseAction } from "./pomodoro-pause-action";
import { pomodoroStartAction } from "./pomodoro-start-action";
import { pomodoroResumeAction } from "./pomodoro-resume-action";
import { pomodoroDecrementAction } from "./pomodoto-decrement-action";
import { PomodoroAction, PomodoroState } from "./pomodoro-state";

export function pomodoroReducer(
  state: PomodoroState,
  action: PomodoroAction
): PomodoroState {
  switch (action.type) {
    case "start":
      return pomodoroStartAction(state, action);
    case "pause":
      return pomodoroPauseAction(state, action);
    case "resume":
      return pomodoroResumeAction(state, action);
    case "decrement":
      return pomodoroDecrementAction(state, action);
    default:
      console.warn("[PomodoroReducer] Unknown action " + action);
      return state;
  }
}
