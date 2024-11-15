const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const envFilePath = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
const dotenvConfig = dotenv.config({ path: envFilePath });
dotenvExpand.expand(dotenvConfig);

const config = {
  port: process.env.APP_PORT || 4000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB,
  },
};

module.exports = config;
