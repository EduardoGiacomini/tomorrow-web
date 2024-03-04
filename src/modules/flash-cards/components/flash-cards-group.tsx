import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardProps,
} from "@mui/material";
import { FlashCardGroupModel } from "../models";

interface Props {
  group: FlashCardGroupModel;
}

export function FlashCardGroup({
  group,
  ...props
}: Props & CardProps): React.ReactElement {
  return (
    <Card
      variant="outlined"
      sx={{
        cursor: "pointer",
        background: group.color,
      }}
      {...props}
    >
      <CardActionArea
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          minHeight: "150px",
        }}
      >
        <CardContent>
          <Typography variant="h6" component="h6">
            {group.icon} {group.title}
          </Typography>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            component="p"
            gutterBottom
          >
            {group.area}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
