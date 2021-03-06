const operationsRepo = require('../dataAccess');
const signAmount = require('../utils/signAmount');

const userId = 1;

module.exports = {
  async findOperations(id) {
    if (!id) {
      const response = await operationsRepo.findAllOperations();
      return ({ status: 200, json: response });
    }
    const response = await operationsRepo.findOperations(id);
    if (response) {
      return ({ status: 200, json: response });
    }
    return ({ status: 404 });
  },
  async createOperations(concept, amount, date, type, categoriesId) {
    const amountSign = signAmount(amount, type);
    const totalBalance = await operationsRepo.findTotalBalance(userId);
    const totalBalanceAmount = totalBalance[0].amount;
    const newAmount = totalBalanceAmount + amountSign;
    await operationsRepo.updateTotalBalance(userId, newAmount);

    await operationsRepo.createOperations(concept, amount, date, type, categoriesId);
    return ({ status: 200, message: 'OK' });
  },
  async updateOperations(id, concept, amount, date, type, categoriesId) {
    const operation = await operationsRepo.findOperations(id);
    if (operation) {
      const totalBalance = await operationsRepo.findTotalBalance(userId);
      const operationAmountSign = signAmount(
        operation.dataValues.amount, operation.dataValues.type,
      );
      const totalBalanceAmount = totalBalance[0].amount;
      const newOperationAmountSign = signAmount(amount, type);
      const newTotalBalanceAmount = (
        totalBalanceAmount - operationAmountSign + newOperationAmountSign
      );
      await operationsRepo.updateTotalBalance(userId, newTotalBalanceAmount);

      await operationsRepo.updateOperations(id, concept, amount, date, type, categoriesId);
      return ({ status: 200, message: 'OK' });
    }
    return ({ status: 400, message: `Not exist operation with id:${id}` });
  },
  async deleteOperations(id) {
    const operation = await operationsRepo.findOperations(id);
    if (operation) {
      const amountSign = signAmount(operation.dataValues.amount, operation.dataValues.type);
      const totalBalance = await operationsRepo.findTotalBalance(1);
      const totalBalanceAmount = totalBalance[0].amount;
      const newTotalBalanceAmount = totalBalanceAmount - amountSign;
      await operationsRepo.updateTotalBalance(userId, newTotalBalanceAmount);

      await operationsRepo.deleteOperations(id);
      return ({ status: 200, message: 'OK' });
    }
    return ({ status: 400, message: `Not exist operation with id:${id}` });
  },
  async findTotalBalance() {
    const response = await operationsRepo.findTotalBalance(userId);
    return ({ status: 200, json: response });
  },
  async findAllCategories() {
    const response = await operationsRepo.findAllCategories();
    return ({ status: 200, json: response });
  },
};
