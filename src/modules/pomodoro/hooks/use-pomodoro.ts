import React from "react";

export enum PomodoroError {
  tooLong,
  tooShort,
}

interface PomodoroContract {
  seconds: number;
  error?: PomodoroError | undefined;
  start: (seconds: number) => void;
}

export function usePomodoro(): PomodoroContract {
  const [error, setError] = React.useState<PomodoroError | undefined>();
  const [seconds, setSeconds] = React.useState<number>(0);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } 
  }, [seconds]);

  const start = React.useCallback((timerSeconds: number) => {
    const fiveMinutesInSeconds = 5 * 60;
    if (timerSeconds < fiveMinutesInSeconds) {
      setError(PomodoroError.tooShort);
      return;
    }

    const oneHourInSeconds = 60 * 60;
    if (timerSeconds > oneHourInSeconds) {
      setError(PomodoroError.tooLong);
      return;
    }

    setSeconds(timerSeconds);
  }, []);

  return { seconds, error, start };
}
