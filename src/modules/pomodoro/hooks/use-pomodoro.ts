import React from "react";
import useSound from "use-sound";
import pomodoroEndSound from "../../../assets/sounds/pomodoro-end.mp3";
import pomodoroStartSound from "../../../assets/sounds/pomodoro-start.mp3";
import pomodoroPauseSound from "../../../assets/sounds/pomodoro-pause.mp3";
import {
  POMODORO_INITIAL_STATE,
  pomodoroReducer,
  startPomodoro,
  pausePomodoro,
  decrementPomodoro,
  PomodoroError,
  resumePomodoro,
} from "../reducers";

interface PomodoroContract {
  seconds: number;
  running: boolean;
  error?: PomodoroError | undefined;
  start: (seconds: number) => void;
  pause: () => void;
  resume: () => void;
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

  const [playPomodoroEndSound] = useSound(pomodoroEndSound);
  const [playPomodoroPauseSound] = useSound(pomodoroPauseSound);
  const [playPomodoroStartSound] = useSound(pomodoroStartSound);

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
      playPomodoroEndSound();
      return;
    }
  }, [running, seconds, playPomodoroEndSound]);

  const start = React.useCallback(
    (timerSeconds: number) => {
      dispatch(startPomodoro(timerSeconds));
      playPomodoroStartSound();
    },
    [playPomodoroStartSound]
  );

  const pause = React.useCallback(() => {
    dispatch(pausePomodoro());
    playPomodoroPauseSound();
  }, [playPomodoroPauseSound]);

  const resume = React.useCallback(() => {
    dispatch(resumePomodoro());
    playPomodoroStartSound();
  }, [playPomodoroStartSound]);

  return { seconds, running, error, start, pause, resume };
}
