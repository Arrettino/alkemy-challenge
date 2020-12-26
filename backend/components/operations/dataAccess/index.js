const OperationsModel = require('./OperationsModel');

module.exports = {
  async findAllOperations() {
    try {
      const response = await OperationsModel.findAll({});
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
      await OperationsModel.destroy({
        where: {
          id,
        },
      });
      return ({ message: 'Operation deleted succesfully' });
    } catch (err) {
      return (err);
    }
  },
};
