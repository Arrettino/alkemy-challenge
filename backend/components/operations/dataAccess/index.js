const OperationsModel = require('./OperationsModel');
const TotalBalanceModel = require('./TotalBalanceModel');

module.exports = {
  async findAllOperations() {
    try {
      const response = await OperationsModel.findAll({});
      return (response);
    } catch (err) {
      return (err);
    }
  },
  async findOperations(id) {
    try {
      const response = await OperationsModel.findByPk(id);
      return (response);
    } catch (err) {
      return (err);
    }
  },
  async createOperations(concept, amount, date, type) {
    try {
      await OperationsModel.create({
        concept, amount, date, type,
      });
      return ({ message: 'Operation created succesfully' });
    } catch (err) {
      return (err);
    }
  },
  async updateOperations(id, concept, amount, date, type) {
    try {
      await OperationsModel.update({
        concept, amount, date, type,
      }, {
        where: { id },
      });
      return ({ message: 'Operation updated succesfully' });
    } catch (err) {
      return (err);
    }
  },
  async deleteOperations(id) {
    try {
      const response = await OperationsModel.destroy({ where: { id } });
      return ({ message: response });
    } catch (err) {
      return (err);
    }
  },
  async findTotalBalance(userId) {
    try {
      const response = await TotalBalanceModel.findAll({ where: { userId } });
      return (response);
    } catch (err) {
      return (err);
    }
  },
  async updateTotalBalance(userId, amount) {
    try {
      const response = await TotalBalanceModel.update(
        { amount, userId },
        { where: { userId } },
      );
      return (response);
    } catch (err) {
      return (err);
    }
  },
  async createTotalBalance(userId) {
    try {
      const response = await TotalBalanceModel.create({ amount: 0, userId });
      return (response);
    } catch (err) {
      return (err);
    }
  },
};
