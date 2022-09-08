
const { Pool } = require('pg');
require('dotenv').config();

const {
  DEV_DB_URL, TEST_DB_URL, DATABASE_URL, NODE_ENV,
} = process.env;

let DB_URL = '';

switch (NODE_ENV) {
  case 'production':
    DB_URL = DATABASE_URL;
    break;
  case 'development':
    DB_URL = DEV_DB_URL;
    break;
  case 'test':
    DB_URL = TEST_DB_URL;
    break;
  default:
    throw new Error('No Database Found');
}

const connection = new Pool({
  connectionString: DB_URL,
  ssl:
    NODE_ENV === 'production'
      ? {
        rejectUnauthorized: false,
      }
      : false,
});

module.exports = connection;