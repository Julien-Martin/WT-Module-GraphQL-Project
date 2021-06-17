const retweetResolvers = {
  Query: {
    retweetById: (_, args, context) => context.prisma.retweet.findUnique({
      where: {
        id: args.id,
      },
    }),
    retweetsByUserId: (_, args, context) => context.prisma.retweet.findMany({
      where: {
        userId: args.userId,
      },
    }),
    retweetsByTweetId: (_, args, context) => context.prisma.retweet.findMany({
      where: {
        tweetId: args.tweetId,
      },
    }),
    retweets: (_, __, context) => context.prisma.retweet.findMany(),
  },
  Mutation: {
    doRetweet: async (_, args, context) => {
      const tweet = await context.prisma.tweet.findUnique({
        where: {
          id: args.tweetId,
        },
      });
      if (tweet) {
        return context.prisma.retweet.delete({
          userId: args.userId,
          tweetId: args.tweetId,
        });
      }
      return context.prisma.retweet.create({
        data: {
          ...args,
        },
      });
    },
    unRetweet: (_, args, context) => context.prisma.retweet.delete({
      where: {
        tweetId: args.tweetId,
        userId: args.userId,
      },
    }),
  },
  Retweet: {
    user: (parent, __, context) => context.prisma.user.findUnique({
      where: {
        id: parent.userId,
      },
    }),
    tweet: (parent, __, context) => context.prisma.tweet.findUnique({
      where: {
        id: parent.tweetId,
      },
    }),
  },
};

module.exports = retweetResolvers;
