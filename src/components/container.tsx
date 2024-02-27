import React from "react";
import { Container as MUIContainer } from "@mui/material";

interface Props {
  children: React.ReactElement | Array<React.ReactElement>;
}

export function Container(props: Props): React.ReactElement {
  const { children } = props;

  return (
    <MUIContainer maxWidth="lg" sx={{ padding: 2 }}>
      {children}
    </MUIContainer>
  );
}
