import { act, renderHook } from "@testing-library/react";
import { PomodoroError, usePomodoro } from "../hooks";

describe("usePomodoro()", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  describe("given a new pomodoro", () => {
    test("it should start with 0 seconds", () => {
      const { result } = renderHook(() => usePomodoro());

      expect(result.current.seconds).toBe(0);
      expect(result.current.error).toBeUndefined();
    });
  });

  describe("given a new pomodoro with less than 5 minutes", () => {
    test("it should display tooShort error", () => {
      const { result } = renderHook(() => usePomodoro());

      act(() => {
        const fiveMinutesInSeconds = 5 * 60;
        result.current.start(fiveMinutesInSeconds - 1);
      });

      expect(result.current.seconds).toBe(0);
      expect(result.current.error).toBe(PomodoroError.tooShort);
    });
  });

  describe("given a new pomodoro with more than 1 hour", () => {
    test("it should display tooLong error", () => {
      const { result } = renderHook(() => usePomodoro());

      act(() => {
        const oneHourInSeconds = 60 * 60;
        result.current.start(oneHourInSeconds + 1);
      });

      expect(result.current.seconds).toBe(0);
      expect(result.current.error).toBe(PomodoroError.tooLong);
    });
  });

  describe("given a new pomodoro with seconds between 5 minutes and 1 hour", () => {
    test("it should start the countdown", () => {
      const { result } = renderHook(() => usePomodoro());
      const oneHourInSeconds = 60 * 60;

      act(() => {
        result.current.start(oneHourInSeconds);
        jest.runAllTimers();
      });

      expect(result.current.seconds).toBe(oneHourInSeconds);
      expect(result.current.error).toBeUndefined();

      act(() => jest.runAllTimers());

      expect(result.current.seconds).toBe(oneHourInSeconds - 1);
      expect(result.current.error).toBeUndefined();
    });
  });
});
