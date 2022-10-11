import merge from 'lodash.merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { typeDef as Quack } from './quack/index';
import { typeDef as User } from './user/index';
import { quacks, users } from '../__mocks__/mocks';

const QUACKS_LIMIT = 20;

const resolvers = {
  Query: {
    async users () {
      return users;
    },
    async user (_, { userName }) {
      return users.find((user) => user.userName === userName);
    },
    async quacks () {
      return quacks.slice(0, QUACKS_LIMIT);
    },
    async quack (_, { quackId }) {
      return quacks.find(quack => quack.id === quackId);
    }
  },
  Quack: {
    user: ({ userId }) => {
      return users.find((user) => user.id === userId);
    },
  },
  User: {
    quacks: ({ id }) => {
      return quacks
        .filter((quack) => quack.userId === id)
        .slice(0, QUACKS_LIMIT);
    },
  },
};

export const schema = makeExecutableSchema({
  typeDefs: [Quack, User],
  resolvers: merge(resolvers),
});
