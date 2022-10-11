export const typeDef = /* GraphQL */ `
  type Query {
    quacks: [Quack!]!
    quack(quackId: Int!): Quack
  }

  type Quack {
    id: Int!
    createdAt: String!
    user: User!
    userId: Int!
    text: String!
  }
`;
