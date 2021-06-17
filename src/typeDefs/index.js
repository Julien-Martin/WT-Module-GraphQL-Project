const query = require('./query');
const mutation = require('./mutation');
const misc = require('./misc');

const {
  userType, tweetType, likeType, retweetType,
} = require('./types');

const typeDefs = [
  userType,
  tweetType,
  likeType,
  retweetType,
  misc,
  query,
  mutation,
];

module.exports = typeDefs;
