export function getDefauldBoards (repository_id: number) {
  return [
    {
      color: '#F9D825',
      type: 'TODO',
      repository_id
    },
    {
      color: '#29E548',
      type: 'DOING',
      repository_id
    },
    {
      color: '#7B2CBF',
      type: 'REVIEW',
      repository_id
    },
    {
      color: '#F72585',
      type: 'CLOSED',
      repository_id
    }
  ]
}
