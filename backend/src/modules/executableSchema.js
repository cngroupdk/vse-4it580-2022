import merge from 'lodash.merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

// based on - https://www.apollographql.com/blog/backend/schema-design/modularizing-your-graphql-schema-code/
const Query = /* GraphQL */ `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

export const schema = makeExecutableSchema({
  typeDefs: [Query],
  resolvers: merge(resolvers),
});
