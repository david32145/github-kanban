import { Board } from "models";

export const boardsFaker: Board[] = [
  {
    title: "Todo",
    creatable: true,
    cards: [
      {
        color: "#F9D825",
        title: "Add native FAP button",
        description:
          "Add native support  for floating action button on react native.",
        issueId: 10,
      },
      {
        color: "#F9D825",
        title: "Add native FAP button",
        description:
          "Add native support  for floating action button on react native.",
        issueId: 12,
      },
    ],
  },
  {
    title: "Doing",
    creatable: true,
    cards: [
      {
        color: "#29E548",
        title: "Add native FAP button",
        description:
          "Add native support  for floating action button on react native.",
        issueId: 5,
      },
    ],
  },
  {
    title: "Review",
    creatable: true,
    cards: [
      {
        color: "#7B2CBF",
        title: "Add native FAP button",
        description:
          "Add native support  for floating action button on react native.",
        issueId: 3,
      },
    ],
  },
  {
    title: "Closed",
    creatable: true,
    cards: [
      {
        color: "#F72585",
        title: "Add native FAP button",
        description:
          "Add native support  for floating action button on react native.",
        issueId: 8,
      },
    ],
  },
];
