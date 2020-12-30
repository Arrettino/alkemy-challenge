const Sequelize = require('sequelize');
const sequelize = require('../../../db');

module.exports = sequelize.define('categories', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
