import React from "react";
import {
  POMODORO_INITIAL_STATE,
  pomodoroReducer,
  startPomodoro,
  pausePomodoro,
  decrementPomodoro,
  PomodoroError,
} from "../reducers";

interface PomodoroContract {
  seconds: number;
  error?: PomodoroError | undefined;
  start: (seconds: number) => void;
  pause: () => void;
}

/**
 * usePomodoro() is a hook to [start, pause] pomodoro countdown.
 */
export function usePomodoro(): PomodoroContract {
  const [state, dispatch] = React.useReducer(
    pomodoroReducer,
    POMODORO_INITIAL_STATE
  );
  const { error, running, seconds } = state;

  /// When [seconds, running] state changes...
  React.useEffect(() => {
    /// If pomodoro running, decrements pomodoro after 1 second
    if (running && seconds > 0) {
      setTimeout(() => dispatch(decrementPomodoro()), 1000);
      return;
    }

    /// If pomodoro is finished, pause pomodoro
    if (running && seconds === 0) {
      dispatch(pausePomodoro());
      return;
    }
  }, [running, seconds]);

  const start = React.useCallback((timerSeconds: number) => {
    dispatch(startPomodoro(timerSeconds));
  }, []);

  const pause = React.useCallback(() => {
    dispatch(pausePomodoro());
  }, []);

  return { seconds, error, start, pause };
}
