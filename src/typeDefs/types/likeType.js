const { gql } = require('apollo-server');

const likeType = gql`
  type Like {
    id: Int!
    user: User!
    tweet: Tweet!
  }
`;

module.exports = likeType;
