const { gql } = require('apollo-server');

const userType = gql`
  type User {
    id: Int!
    firstname: String!
    lastname: String!
    username: String!
    email: String!
    avatar: String
    tweets: [Tweet]!
    likes: [Like]!
    retweets: [Retweet]!
  }
`;

module.exports = userType;
