export interface User {
  id: number;
  username: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MoveCardOptions {
  fromBoard: number;
  fromCard: number;
  toBoard: number;
  toCard: number;

  toBoardIsEmpty?: boolean;
}

export interface Card {
  title: string;
  description: string;
  issueId: number;
  color: string;
}

export interface Board {
  title: string;
  creatable: boolean;
  cards: Card[];
}
