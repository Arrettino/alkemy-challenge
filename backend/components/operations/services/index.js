const operationsRepo = require('../dataAccess');
const signAmount = require('../utils/signAmount');

const userId = 1;

module.exports = {
  async findAllOperations() {
    try {
      const response = await operationsRepo.findAllOperations();
      return (response);
    } catch (err) {
      return (err);
    }
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
    try {
      const operation = await operationsRepo.findOperations(id);
      const amountSign = signAmount(operation.dataValues.amount, operation.dataValues.type);
      const totalBalance = await operationsRepo.findTotalBalance(userId);
      const newAmount = totalBalance - amountSign;
      await operationsRepo.updateTotalBalance(userId, newAmount);

      const response = await operationsRepo.deleteOperations(id);
      return (response);
    } catch (err) {
      return (err);
    }
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
