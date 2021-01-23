const infoResolver = require("./info");
const userResolver = require("./user");

module.exports = {
  Query: {
    ...infoResolver.Query,
    ...userResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
  },
};
