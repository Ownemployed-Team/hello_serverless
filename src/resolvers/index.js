const advertisers = require("./advertisers");

module.exports.resolvers = {
  Query: {
    ...advertisers,
  },
};
