import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "../../../components";

export function FlashCardsScreen(): React.ReactElement {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            variant="outlined"
            sx={{
              cursor: "pointer",
              background: "#7543E3",
            }}
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
                  💅 React
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  component="p"
                  gutterBottom
                >
                  Technology
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            variant="outlined"
            sx={{
              cursor: "pointer",
              background: "#E11586",
            }}
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
                  💅 React
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  component="p"
                  gutterBottom
                >
                  Technology
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            variant="outlined"
            sx={{
              cursor: "pointer",
              background: "#E25821",
            }}
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
                  💅 React
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  component="p"
                  gutterBottom
                >
                  Technology
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
