const userResolvers = require('./userResolvers');
const tweetResolvers = require('./tweetResolvers');
const likeResolvers = require('./likeResolvers');
const retweetResolvers = require('./retweetResolvers');

const resolvers = [
  userResolvers,
  tweetResolvers,
  likeResolvers,
  retweetResolvers,
];

module.exports = resolvers;
