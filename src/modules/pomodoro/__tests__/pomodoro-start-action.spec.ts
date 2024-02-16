import {
  POMODORO_INITIAL_STATE,
  PomodoroError,
  pomodoroReducer,
  startPomodoro,
} from "../reducers";
import { PomodoroState } from "../reducers/pomodoro-state";

describe("startPomodoro()", () => {
  describe("given a new pomodoro", () => {
    describe("when I start the pomodoro with less than 5 minutes", () => {
      test("it should display tooShort error", () => {
        const fiveMinutesInSeconds = 5 * 60;
        const action = startPomodoro(fiveMinutesInSeconds - 1);
        const state = pomodoroReducer(POMODORO_INITIAL_STATE, action);

        expect(state.seconds).toBe(0);
        expect(state.running).toBeFalsy();
        expect(state.error).toBe(PomodoroError.tooShort);
      });
    });

    describe("when I start the pomodoro with more than 1 hour", () => {
      test("it should display tooLong error", () => {
        const oneHourInSeconds = 60 * 60;
        const action = startPomodoro(oneHourInSeconds + 1);
        const state = pomodoroReducer(POMODORO_INITIAL_STATE, action);

        expect(state.seconds).toBe(0);
        expect(state.running).toBeFalsy();
        expect(state.error).toBe(PomodoroError.tooLong);
      });
    });

    describe("when I start the pomodoro with seconds between 5 minutes and 1 hour", () => {
      test("it should start the countdown with the given seconds", () => {
        const oneHourInSeconds = 60 * 60;
        const action = startPomodoro(oneHourInSeconds);
        const state = pomodoroReducer(POMODORO_INITIAL_STATE, action);

        expect(state.error).toBeUndefined();
        expect(state.running).toBeTruthy();
        expect(state.seconds).toBe(oneHourInSeconds);
      });
    });
  });

  describe("given a running pomodoro", () => {
    describe("when I start the pomodoro again with 30 minutes", () => {
      test("it should continue without reset the seconds", () => {
        const runningPomodoroState: PomodoroState = {
          error: undefined,
          running: true,
          seconds: 30 * 60,
        };
        const fiveMinutesInSeconds = 30 * 60;
        const action = startPomodoro(fiveMinutesInSeconds);
        const state = pomodoroReducer(runningPomodoroState, action);

        expect(state.seconds).toBe(30 * 60);
        expect(state.running).toBeTruthy();
        expect(state.error).toBeUndefined();
      });
    });
  });
});
