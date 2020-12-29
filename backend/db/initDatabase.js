const sequelize = require('./index');
const operationsDataAccess = require('../components/operations/dataAccess');

async function initDatabase() {
  try {
    await sequelize.sync();
    const response = await operationsDataAccess.findTotalBalance(1);
    if (!response[0]) {
      await operationsDataAccess.createTotalBalance(1);
      console.log('hola');
    }
  } catch (err) {
    console.log(err);
  }
}

initDatabase();
