const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllUsers = () => prisma.user.findMany();

getAllUsers()
  .then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.error(err);
  });
