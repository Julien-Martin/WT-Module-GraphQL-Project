const { gql } = require('apollo-server');

const retweetType = gql`
  type Retweet {
    id: Int!
    user: User!
    tweet: Tweet!
  }
`;

module.exports = retweetType;
