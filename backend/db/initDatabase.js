const sequelize = require('./index');
const operationsDataAccess = require('../components/operations/dataAccess');
const CategoriesModel = require('../components/operations/dataAccess/CategoriesModel');
const OperationsModel = require('../components/operations/dataAccess/OperationsModel');

async function initDatabase() {
  try {
    await sequelize.sync();
    await OperationsModel.belongsTo(CategoriesModel, { as: 'categories', foreignKey: 'categoriesId' });
    let response = await operationsDataAccess.findTotalBalance(1);
    if (!response[0]) {
      await operationsDataAccess.createTotalBalance(1);
    }
    response = await operationsDataAccess.findAllCategories();
    if (!response[0]) {
      await operationsDataAccess.createCategories('salario');
      await operationsDataAccess.createCategories('comida');
      await operationsDataAccess.createCategories('impuestos');
      await operationsDataAccess.createCategories('Intereses de cuentas bancarias');
      await operationsDataAccess.createCategories('transporte');
      await operationsDataAccess.createCategories('entretenimiento');
      await operationsDataAccess.createCategories('inversiones');
      await operationsDataAccess.createCategories('otros');
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = initDatabase;
