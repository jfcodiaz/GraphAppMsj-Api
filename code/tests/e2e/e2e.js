const {
  init: initServer,
  close: closeServer,
} = require('../../init/main-server');
const request = require('supertest');

let app;

const graphqlRquest = async ({ query, variables }) => {
  const res = await request(app).post('/graphql').send({ query, variables });

  return res;
};

const RESET_DB = {
  NO_RESET: 0,
  AFTER_ALL: 1,
  AFTER_EACH: 2,
};

const SEED_DB = {
  NO_SEED: 0,
  BEFORE_ALL: 1,
  BEFORE_EACH: 2,
};

const e2e = (
  title,
  {
    beforeAll: customBeforeAll = async () => {},
    beforeEach: customBeforeEach = async () => {},
    tests = () => {},
    afterEach: customAfterEach = async () => {},
    afterAll: customAfterAll = async () => {},
    context = {},
    config = {
      dbReset: RESET_DB.AFTER_EACH,
      dbSeed: SEED_DB.BEFORE_EACH,
    },
  } = {},
) => {
  describe(title, () => {
    beforeAll(async () => {
      if (config.dbSeed === SEED_DB.BEFORE_ALL) {
        console.log('Seeding database before all test...');
      }
      app = await initServer();
      if (customBeforeAll) {
        await customBeforeAll(context, config);
      }
    });
    beforeEach(async () => {
      if (config.dbSeed === SEED_DB.BEFORE_EACH) {
        console.log('Seeding database before each test...');
      }
      await customBeforeEach();
    });

    tests({ request, graphqlRquest, context, config });

    afterEach(async () => {
      if (config.dbReset === RESET_DB.AFTER_EACH) {
        console.log('Resetting database after each test...');
      }
      await customAfterEach(context, config);
    });

    afterAll(async () => {
      if (config.dbReset === RESET_DB.AFTER_ALL) {
        console.log('Resetting database after all tests...');
      }

      await closeServer();
      if (customAfterAll) {
        await customAfterAll(context, config);
      }
    });
  });
};

module.exports = {
  RESET_DB,
  SEED_DB,
  e2e,
};
