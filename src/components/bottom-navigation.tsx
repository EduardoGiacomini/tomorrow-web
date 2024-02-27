import React from "react";
import {
  BottomNavigationAction,
  BottomNavigation as MUIBottomNavigation,
  Paper,
} from "@mui/material";
import { Timer as TimerIcon } from "@mui/icons-material";
import { Bolt as BoltIcon } from "@mui/icons-material";

export function BottomNavigation(): React.ReactElement {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <MUIBottomNavigation>
        <BottomNavigationAction label="Pomodoro" icon={<TimerIcon />} />
        <BottomNavigationAction label="Flash Cards" icon={<BoltIcon />} />
      </MUIBottomNavigation>
    </Paper>
  );
}
