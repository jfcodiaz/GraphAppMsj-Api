require('../config');
const initDb = require('../init/database');
const userRepository = require('../repositories/users.repository');
const messageRepository = require('../repositories/messages.repository');

const { faker } = require('@faker-js/faker');

let mongoConnection;
async function seedUsers() {
  mongoConnection = await initDb();
  const users = [];
  for (let i = 0; i < 50; i++) {
    const user = {
      username:
        faker.internet.userName().replace(/[^a-zA-Z0-9]/g, '') +
        faker.number.int(1, 999),
    };
    users.push(user);
  }
  await userRepository.insertMany(users);
  const usersObjects = await userRepository.getAll();
  const messages = [];
  usersObjects.forEach((user) => {
    const top = faker.number.int({ min: 10, max: 150 });
    for (let i = 0; i < top; i++) {
      messages.push({
        userId: user._id.toString(),
        text: faker.lorem.sentence(),
        createdAt: faker.date.past(1),
      });
    }
  });
  await messageRepository.insertMany(messages);
  console.log(
    `${users.length} users and ${messages.length} messages have been seeded.'`,
  );
}

seedUsers()
  .catch((error) => {
    console.error('Error seeding users:', error);
  })
  .finally(() => {
    mongoConnection.connection.close();
  });
