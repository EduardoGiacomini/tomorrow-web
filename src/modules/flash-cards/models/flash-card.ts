export interface FlashCardGroupModel {
  id: string;
  area: string;
  icon: string;
  star: boolean;
  title: string;
  color: string;
  cards: Array<FlashCardModel>;
}

export interface FlashCardModel {
  id: string;
  answer: string;
  question: string;
}
