const OperationsModel = require('./OperationsModel');
const TotalBalanceModel = require('./TotalBalanceModel');
const CategoriesModel = require('./CategoriesModel');

module.exports = {
  async findAllOperations() {
    const response = await OperationsModel.findAll({
      include: [
        {
          model: CategoriesModel,
          as: 'categories',
        },
      ],
    });
    return (response);
  },
  async findOperations(id) {
    const response = await OperationsModel.findByPk(id, {
      include: [
        {
          model: CategoriesModel,
          as: 'categories',
        },
      ],
    });
    return (response);
  },
  async createOperations(concept, amount, date, type, categoriesId) {
    await OperationsModel.create({
      concept, amount, date, type, categoriesId,
    });
  },
  async updateOperations(id, concept, amount, date, type, categoriesId) {
    await OperationsModel.update({
      concept, amount, date, type, categoriesId,
    }, {
      where: { id },
    });
  },
  async deleteOperations(id) {
    await OperationsModel.destroy({ where: { id } });
  },
  async findTotalBalance(userId) {
    const response = await TotalBalanceModel.findAll({ where: { userId } });
    return (response);
  },
  async updateTotalBalance(userId, amount) {
    const response = await TotalBalanceModel.update(
      { amount, userId },
      { where: { userId } },
    );
    return (response);
  },
  async createTotalBalance(userId) {
    try {
      const response = await TotalBalanceModel.create({ amount: 0, userId });
      return (response);
    } catch (err) {
      return (err);
    }
  },
  async createCategories(name) {
    await CategoriesModel.create({ name });
  },
  async findAllCategories() {
    const response = await CategoriesModel.findAll();
    return response;
  },
};
