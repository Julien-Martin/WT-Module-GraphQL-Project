const { gql } = require('apollo-server');

const tweetType = gql`
  type Tweet {
    id: Int!
    text: String!
    user: User!
    likes: [Like]!
    retweets: [Retweet]!
  }
`;

module.exports = tweetType;
