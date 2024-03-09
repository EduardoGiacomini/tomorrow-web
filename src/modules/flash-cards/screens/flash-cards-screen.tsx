import React from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../components";
import { FlashCardGroupModel } from "../models";
import { FlashCardGroup } from "../components";
import { ROUTES } from "../../../routes";
import { InMemoryFlashCardRepository } from "../repositories";

const flashCardRepository = new InMemoryFlashCardRepository();

export function FlashCardsScreen(): React.ReactElement {
  const navigate = useNavigate();

  const flashCards = flashCardRepository.getAllFlashCardGroups();

  const redirectToFlashCardsGroupScreen = (id: string) => {
    navigate(`${ROUTES.FLASH_CARDS}/${id}`);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {flashCards.map((flashCard: FlashCardGroupModel) => (
          <Grid key={flashCard.id} item xs={12} sm={6} md={4}>
            <FlashCardGroup
              group={flashCard}
              onClick={() => redirectToFlashCardsGroupScreen(flashCard.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
