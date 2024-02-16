import React from "react";
import { usePomodoro } from "../hooks";

export function Pomodoro(): React.ReactElement {
  const { seconds, error, start, pause } = usePomodoro();

  return (
    <div>
      {error && <p>{error}</p>}
      <button type="button" onClick={() => start(1 * 5)}>
        Start
      </button>
      <button type="button" onClick={() => pause()}>
        Stop
      </button>
      <p>Remaining seconds: {seconds}</p>
    </div>
  );
}
