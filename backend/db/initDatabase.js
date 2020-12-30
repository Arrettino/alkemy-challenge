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
      await operationsDataAccess.createCategories('Salario');
      await operationsDataAccess.createCategories('Comida');
      await operationsDataAccess.createCategories('Impuestos');
      await operationsDataAccess.createCategories('Intereses de cuentas bancarias');
      await operationsDataAccess.createCategories('Transporte');
      await operationsDataAccess.createCategories('Entretenimiento');
      await operationsDataAccess.createCategories('Inversiones');
      await operationsDataAccess.createCategories('Otros');
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = initDatabase;
