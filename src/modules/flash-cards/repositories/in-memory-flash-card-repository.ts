import { FlashCardGroupModel } from "../models";
import { FlashCardRepository } from "./flash-card-repository";
import flashCards from "../data/fash-cards.json";

export class InMemoryFlashCardRepository implements FlashCardRepository {
  getOneFlashCardGroup(id: string): FlashCardGroupModel {
    const groupOrNone: FlashCardGroupModel | null =
      flashCards.find((group) => group.id === id) ?? null;
    return groupOrNone as FlashCardGroupModel;
  }

  getAllFlashCardGroups(): Array<FlashCardGroupModel> {
    return flashCards as Array<FlashCardGroupModel>;
  }
}
