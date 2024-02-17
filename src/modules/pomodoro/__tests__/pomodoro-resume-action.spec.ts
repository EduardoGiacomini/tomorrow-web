import {
  POMODORO_INITIAL_STATE,
  pomodoroReducer,
  resumePomodoro,
} from "../reducers";
import { PomodoroState } from "../reducers/pomodoro-state";

describe("resumePomodoro()", () => {
  describe("given a new pomodoro", () => {
    describe("when I resume the pomodoro", () => {
      test("it should do nothing", () => {
        const action = resumePomodoro();
        const state = pomodoroReducer(POMODORO_INITIAL_STATE, action);

        expect(state.seconds).toBe(0);
        expect(state.running).toBeFalsy();
        expect(state.error).toBeUndefined();
      });
    });
  });

  describe("given a paused pomodoro", () => {
    describe("when I resume the pomodoro", () => {
      test("it should start again", () => {
        const action = resumePomodoro();
        const runningPomodoroState: PomodoroState = {
          error: undefined,
          running: false,
          seconds: 5 * 60,
        };
        const state = pomodoroReducer(runningPomodoroState, action);

        expect(state.seconds).toBe(5 * 60);
        expect(state.running).toBeTruthy();
        expect(state.error).toBeUndefined();
      });
    });
  });
});
