import React from "react";
import { InMemoryFlashCardRepository } from "../repositories";

const flashCardRepository = new InMemoryFlashCardRepository();

export function FlashCardsDetailsScreen(): React.ReactElement {
  const flashCardGroup = flashCardRepository.getOneFlashCardGroup("react");

  console.log(flashCardGroup);

  return <div>Hello</div>;
}
