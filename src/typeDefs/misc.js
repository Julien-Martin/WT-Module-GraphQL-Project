const { gql } = require('apollo-server');

const misc = gql`
  input CreateUserInput {
    firstname: String!
    lastname: String!
    username: String!
    email: String!
    avatar: String
  }

  input UpdateUserInput {
    firstname: String
    lastname: String
    username: String
    email: String
    avatar: String
  }

  input CreateTweetInput {
    text: String!
    userId: Int!
  }

  input UpdateTweetInput {
    text: String
  }
`;

module.exports = misc;
