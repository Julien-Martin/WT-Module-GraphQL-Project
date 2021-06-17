const likeResolvers = {
  Query: {
    likeById: (_, args, context) => context.prisma.like.findUnique({
      where: {
        id: args.id,
      },
    }),
    likesByUserId: (_, args, context) => context.prisma.like.findMany({
      where: {
        userId: args.userId,
      },
    }),
    likesByTweetId: (_, args, context) => context.prisma.like.findMany({
      where: {
        tweetId: args.tweetId,
      },
    }),
    likes: (_, __, context) => context.prisma.like.findMany(),
  },
  Mutation: {
    doLike: async (_, args, context) => {
      const tweet = await context.prisma.tweet.findUnique({
        where: {
          id: args.tweetId,
        },
      });
      if (tweet) {
        return context.prisma.like.delete({
          userId: args.userId,
          tweetId: args.tweetId,
        });
      }
      return context.prisma.like.create({
        data: {
          ...args,
        },
      });
    },
    unLike: (_, args, context) => context.prisma.like.delete({
      where: {
        tweetId: args.tweetId,
        userId: args.userId,
      },
    }),
  },
  Like: {
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

module.exports = likeResolvers;
