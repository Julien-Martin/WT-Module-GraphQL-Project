const tweetResolvers = {
  Query: {
    tweetById: (_, args, context) => context.prisma.tweet.findUnique({
      where: {
        id: args.id,
      },
    }),
    tweetsByUserId: (_, args, context) => context.prisma.tweet.findMany({
      where: {
        userId: args.userId,
      },
    }),
    tweets: (_, __, context) => context.prisma.tweet.findMany(),
  },
  Mutation: {
    createTweet: (_, args, context) => context.prisma.tweet.create({
      data: {
        ...args.tweetInfo,
      },
    }),
    updateTweet: (_, args, context) => context.prisma.tweet.update({
      where: {
        id: args.id,
      },
      data: {
        ...args.tweetInfo,
      },
    }),
    deleteTweet: (_, args, context) => context.prisma.tweet.delete({
      where: {
        id: args.id,
      },
    }),
  },
  Tweet: {
    user: (parent, __, context) => context.prisma.user.findUnique({
      where: {
        userId: parent.userId,
      },
    }),
    likes: (parent, __, context) => context.prisma.like.findMany({
      where: {
        tweetId: parent.id,
      },
    }),
    retweets: (parent, __, context) => context.prisma.retweet.findMany({
      where: {
        tweetId: parent.id,
      },
    }),
  },
};

module.exports = tweetResolvers;
