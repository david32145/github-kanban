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

export interface Repository {
  repository_id: number;
  repository_url: string;
  name: string;
  owner: string;
  user_id: number;
  description?: string;
  completed_cards: number;
  total_cards: number;
}
