import React from "react";
import {
  POMODORO_INITIAL_STATE,
  pomodoroReducer,
  startPomodoro,
  pausePomodoro,
  decrementPomodoro,
} from "../reducers";

export enum PomodoroError {
  tooLong,
  tooShort,
}

interface PomodoroContract {
  seconds: number;
  error?: PomodoroError | undefined;
  start: (seconds: number) => void;
  pause: () => void;
}

export function usePomodoro(): PomodoroContract {
  const [state, dispatch] = React.useReducer(
    pomodoroReducer,
    POMODORO_INITIAL_STATE
  );
  const { error, running, seconds } = state;

  React.useEffect(() => {
    if (running && seconds > 0) {
      setTimeout(() => dispatch(decrementPomodoro()), 1000);
      return;
    }

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
