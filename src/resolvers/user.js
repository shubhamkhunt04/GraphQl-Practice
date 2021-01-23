module.exports = {
  Query: {
    users() {
      return [{ id: "1", name: "shubham" }];
    },
    user(_, { id }) {
      return { id: id, name: "hello" };
    },
  },
  Mutation: {
    createUser(_, { name }) {
      return { id: "8", name: `${name} created` };
    },
  },
};
