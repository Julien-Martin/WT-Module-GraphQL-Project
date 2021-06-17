const userResolvers = {
  Query: {
    userById: (_, args, context) => context.prisma.user.findUnique({
      where: {
        id: args.id,
      },
    }),
    users: (_, __, context) => context.prisma.user.findMany(),
  },
  Mutation: {
    createUser: (_, args, context) => context.prisma.user.create({
      data: {
        ...args.userInfo,
      },
    }),
    updateUser: (_, args, context) => context.prisma.user.update({
      where: {
        id: args.id,
      },
      data: {
        ...args.userInfo,
      },
    }),
    deleteUser: (_, args, context) => context.prisma.user.delete({
      where: {
        id: args.id,
      },
    }),
  },
  User: {
    tweets: (parent, __, context) => context.prisma.tweet.findMany({
      where: {
        userId: parent.id,
      },
    }),
    likes: (parent, __, context) => context.prisma.like.findMany({
      where: {
        userId: parent.id,
      },
    }),
    retweets: (parent, __, context) => context.prisma.retweet.findMany({
      where: {
        userId: parent.id,
      },
    }),
  },
};

module.exports = userResolvers;
