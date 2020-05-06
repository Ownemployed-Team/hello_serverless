const { gql } = require("apollo-server-lambda");

module.exports.schema = gql`
  type Query {
    "Get advertiser names"
    getAdvertiserNames(name: String, page: Int, pageSize: Int): [Name]
  }

  type Name {
    id: Int
    name: String
  }
`;
