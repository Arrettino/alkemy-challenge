const operationsRepo = require('../dataAccess');
const signAmount = require('../utils/signAmount');

const userId = 1;

module.exports = {
  async findAllOperations(id) {
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
  async createOperations(concept, amount, date, type) {
    try {
      const amountSign = signAmount(amount, type);
      const totalBalance = await operationsRepo.findTotalBalance(userId);
      const newAmount = totalBalance[0].amount + amountSign;
      await operationsRepo.updateTotalBalance(userId, newAmount);

      const response = await operationsRepo.createOperations(concept, amount, date, type);
      return (response);
    } catch (err) {
      return (err);
    }
  },
  async updateOperations(id, concept, amount, date, type) {
    try {
      const operation = await operationsRepo.findOperations(id);
      let amountSign = signAmount(operation.dataValues.amount, operation.dataValues.type);
      const totalBalance = await operationsRepo.findTotalBalance(userId);
      let newAmount = totalBalance[0].amount - amountSign;
      amountSign = signAmount(amount, type);
      newAmount = amountSign + newAmount;
      await operationsRepo.updateTotalBalance(userId, newAmount);

      const response = await operationsRepo.updateOperations(id, concept, amount, date, type);
      return (response);
    } catch (err) {
      return (err);
    }
  },
  async deleteOperations(id) {
    const operation = await operationsRepo.findOperations(id);
    if (operation) {
      const amountSign = signAmount(operation.dataValues.amount, operation.dataValues.type);
      const totalBalance = await operationsRepo.findTotalBalance(1);
      const newAmount = totalBalance - amountSign;
      await operationsRepo.updateTotalBalance(userId, newAmount);

      await operationsRepo.deleteOperations(id);
      return ({ status: 200, message: 'OK' });
    }
    return ({ status: 400, message: `Not exist operation with id:${id}` });
  },
  async findTotalBalance() {
    try {
      const response = await operationsRepo.findTotalBalance(userId);
      return (response);
    } catch (err) {
      return (err);
    }
  },
};
