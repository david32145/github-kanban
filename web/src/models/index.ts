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
  issue_id: number;
  issue_url: string;
  title: string;
  description: string;
  number: string;
  order: number;
  board_id: number;
  createdAt: string;
  updateAt: string;
  closedAt: string;
}

export interface Board {
  id: number;
  type: string;
  color: string;
  cards: Card[];
}

export interface Repository {
  repository_id: number;
  repository_url: string;
  name: string;
  owner: string;
  user_id: number;
  description?: string;
  boards: Board[];
  completed_cards: number;
  total_cards: number;
}
