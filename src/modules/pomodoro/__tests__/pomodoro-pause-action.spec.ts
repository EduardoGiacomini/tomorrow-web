import {
  POMODORO_INITIAL_STATE,
  pomodoroReducer,
  pausePomodoro,
} from "../reducers";
import { PomodoroState } from "../reducers/pomodoro-state";

describe("pausePomodoro()", () => {
  describe("given a new pomodoro", () => {
    describe("when I pause the pomodoro", () => {
      test("it should do nothing", () => {
        const action = pausePomodoro();
        const state = pomodoroReducer(POMODORO_INITIAL_STATE, action);

        expect(state.seconds).toBe(0);
        expect(state.running).toBeFalsy();
        expect(state.error).toBeUndefined();
      });
    });
  });

  describe("given a running pomodoro", () => {
    describe("when I pause the pomodoro", () => {
      test("it should stop", () => {
        const action = pausePomodoro();
        const runningPomodoroState: PomodoroState = {
          error: undefined,
          running: true,
          seconds: 5 * 60,
        };
        const state = pomodoroReducer(runningPomodoroState, action);

        expect(state.seconds).toBe(5 * 60);
        expect(state.running).toBeFalsy();
        expect(state.error).toBeUndefined();
      });
    });
  });
});
