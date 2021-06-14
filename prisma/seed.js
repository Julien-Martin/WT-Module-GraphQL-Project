const faker = require('faker');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const generateRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);

const generateData = async () => {
  const tweets = [];
  const user = {
    username: faker.internet.userName(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    avatar: 'https://thispersondoesnotexist.com/image',
  };
  Array.from({ length: generateRandom(10, 0) }).forEach(() => {
    tweets.push({
      text: faker.lorem.sentence(),
    });
  });
  if (tweets.length) {
    user.tweets = {
      create: tweets,
    };
  }
  await prisma.user.create({
    data: {
      ...user,
    },
  });
};

const main = async () => {
  const promises = [];
  Array.from({ length: generateRandom(10, 3) }).forEach(() => {
    promises.push(generateData());
  });
  await Promise.all(promises);
};

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
