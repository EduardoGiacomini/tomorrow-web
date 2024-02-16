import {
  POMODORO_INITIAL_STATE,
  pomodoroReducer,
  decrementPomodoro,
} from "../reducers";
import { PomodoroState } from "../reducers/pomodoro-state";

describe("decrementPomodoro()", () => {
  describe("given a new pomodoro", () => {
    describe("when I decrement the pomodoro", () => {
      test("it should do nothing", () => {
        const action = decrementPomodoro();
        const state = pomodoroReducer(POMODORO_INITIAL_STATE, action);

        expect(state.seconds).toBe(0);
        expect(state.running).toBeFalsy();
        expect(state.error).toBeUndefined();
      });
    });
  });

  describe("given a running pomodoro with 0 seconds", () => {
    describe("when I decrement the pomodoro", () => {
      test("it should do nothing", () => {
        const action = decrementPomodoro();
        /// Pomodoro has just finished
        const runningPomodoroState: PomodoroState = {
          error: undefined,
          running: true,
          seconds: 0,
        };
        const state = pomodoroReducer(runningPomodoroState, action);

        expect(state.seconds).toBe(0);
        /// decrement action is not expected to stop the countdown, it is pause
        /// action role.
        expect(state.running).toBeTruthy();
        expect(state.error).toBeUndefined();
      });
    });
  });

  describe("given a running pomodoro with 30 seconds", () => {
    describe("when I decrement the pomodoro", () => {
      test("it should decrement one second", () => {
        const action = decrementPomodoro();
        const runningPomodoroState: PomodoroState = {
          error: undefined,
          running: true,
          seconds: 30,
        };
        const state = pomodoroReducer(runningPomodoroState, action);

        expect(state.seconds).toBe(29);
        expect(state.running).toBeTruthy();
        expect(state.error).toBeUndefined();
      });
    });
  });
});
