import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { usePomodoro } from "../hooks";
import { PauseOutlined, PlayArrowOutlined } from "@mui/icons-material";
import { DateTimeUtils } from "../../../utils";

export function Pomodoro(): React.ReactElement {
  const { seconds, start, pause } = usePomodoro();

  return (
    <Stack
      gap={10}
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack>
        <Typography variant="h2" fontWeight={500}>
          {DateTimeUtils.secondsToHourMinutesSeconds(seconds)}
        </Typography>
      </Stack>
      <Stack
        gap={2}
        display="flex"
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
      >
        <IconButton onClick={() => start(5 * 60)}>
          <PlayArrowOutlined />
        </IconButton>
        <IconButton onClick={() => pause()}>
          <PauseOutlined />
        </IconButton>
      </Stack>
    </Stack>
  );
}
