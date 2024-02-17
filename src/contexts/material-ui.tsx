import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface Props {
  children: React.ReactNode;
}

export function MaterialUIContext(props: Props) {
  const { children } = props;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
