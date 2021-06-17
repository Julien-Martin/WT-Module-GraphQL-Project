const { gql } = require('apollo-server');

const query = gql`
  type Query {
    userById(id: Int!): User
    users: [User]!
    
    tweetById(id: Int!): Tweet
    tweetsByUserId(userId: Int!): Tweet
    tweets: [Tweet]!

    likeById(id: Int!): Like
    likesByUserId(userId: Int!): [Like]!
    likesByTweetId(tweetId: Int!): [Like]!
    likes: [Like]!
    
    retweetById(id: Int!): Retweet
    retweetsByUserId(userId: Int!): [Retweet]!
    retweetsByTweetId(tweetId: Int!): [Retweet]!
    retweets: [Retweet]!
  }
`;

module.exports = query;
