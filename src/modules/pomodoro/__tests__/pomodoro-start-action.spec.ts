import {
  POMODORO_INITIAL_STATE,
  PomodoroError,
  pomodoroReducer,
  startPomodoro,
} from "../reducers";

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
  });

  describe("given a new pomodoro with seconds between 5 minutes and 1 hour", () => {
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
