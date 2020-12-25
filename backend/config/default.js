const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  db: {
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
};
