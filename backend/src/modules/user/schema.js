export const typeDef = /* GraphQL */ `
    type Query {
      users: [User!]!
      user(userName: String!): User
    }

    type User {
      id: Int!
      name: String!
      userName: String!
      profileImageUrl: String
      quacks: [Quack!]!
    }
`;
