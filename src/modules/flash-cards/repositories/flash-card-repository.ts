import { FlashCardGroupModel } from "../models";

export interface FlashCardRepository {
  getOneFlashCardGroup(id: string): FlashCardGroupModel | undefined;
  getAllFlashCardGroups(): Array<FlashCardGroupModel>;
}
