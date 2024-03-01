import React from "react";
import { Grid } from "@mui/material";
import { Container } from "../../../components";
import { FlashCardGroupModel } from "../models";
import { FlashCardGroup } from "../components";
import flashCards from "../data/fash-cards.json";

export function FlashCardsScreen(): React.ReactElement {
  return (
    <Container>
      <Grid container spacing={2}>
        {flashCards.map((flashCard: FlashCardGroupModel) => (
          <Grid key={flashCard.id} item xs={12} sm={6} md={4}>
            <FlashCardGroup group={flashCard} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
