const { gql } = require('apollo-server');

const mutation = gql`
  type Mutation {
    createUser(userInfo: CreateUserInput!): User!
    updateUser(id: Int!, userInfo: UpdateUserInput!): User!
    deleteUser(id: Int!): User!

    createTweet(tweetInfo: CreateTweetInput!): Tweet!
    updateTweet(id: Int!, tweetInfo: UpdateTweetInput!): Tweet!
    deleteTweet(id: Int!): Tweet!

    doLike(userId: Int!, tweetId: Int!): Like!
    unLike(userId: Int!, tweetId: Int!): Like!
    doRetweet(userId: Int!, tweetId: Int!): Retweet!
    unRetweet(userId: Int!, tweetId: Int!): Retweet!
  }
`;

module.exports = mutation;
