export const nodeMap = new Map([
  ["Course", ["Book", "Topic"]],
  ["Book", ["Topic"]],
]);

export const schema = [
  {
    label: "Course",
    properties: ["title", "id", "teacher"],
    followingNodes: [
      {
        label: "Book",
        edgeProperties: ["uses"],
      },
      {
        label: "Topic",
        edgeProperties: ["included"],
      },
    ],
  },
  {
    label: "Book",
    properties: ["title", "id"],
    followingNodes: [
      {
        label: "Topic",
        edgeProperties: ["included"],
      },
    ],
  },
  {
    label: "Topic",
    properties: ["title", "id"],
    followingNodes: [],
  },
];
