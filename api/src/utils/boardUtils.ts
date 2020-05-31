import { Board } from 'models/Board'

export function getDefauldBoards (): Board[] {
  return [
    {
      color: '#F9D825',
      cards: [],
      type: 'TODO'
    },
    {
      color: '#29E548',
      cards: [],
      type: 'DOING'
    },
    {
      color: '#7B2CBF',
      cards: [],
      type: 'REVIEW'
    },
    {
      color: '#F72585',
      cards: [],
      type: 'CLOSED'
    }
  ]
}
