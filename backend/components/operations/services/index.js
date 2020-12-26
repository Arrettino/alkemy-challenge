const operationsRepo = require('../dataAccess');

module.exports = {
  async findAllOperations() {
    try {
      await operationsRepo.findAllOperations();
      return ('rad');
    } catch (err) {
      return (err);
    }
  },
  async createOperations(concept, amount, date, type) {
    try {
      await operationsRepo.createOperations(concept, amount, date, type);
      return ('rad');
    } catch (err) {
      return (err);
    }
  },
  async updateOperations(id, concept, amount, date, type) {
    try {
      await operationsRepo.updateOperations(id, concept, amount, date, type);
      return ('rad');
    } catch (err) {
      return (err);
    }
  },
  async deleteOperations(id) {
    try {
      await operationsRepo.deleteOperations(id);
      return ('rad');
    } catch (err) {
      return (err);
    }
  },
};
