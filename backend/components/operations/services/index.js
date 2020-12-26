const operationsRepo = require('../dataAccess');

module.exports = {
  async findAllOperations() {
    try {
      const response = await operationsRepo.findAllOperations();
      return (response);
    } catch (err) {
      return (err);
    }
  },
  async findOperations(id) {
    try {
      const response = await operationsRepo.findOperations(id);
      return (response);
    } catch (err) {
      return (err);
    }
  },
  async createOperations(concept, amount, date, type) {
    try {
      const response = await operationsRepo.createOperations(concept, amount, date, type);
      return (response);
    } catch (err) {
      return (err);
    }
  },
  async updateOperations(id, concept, amount, date, type) {
    try {
      const response = await operationsRepo.updateOperations(id, concept, amount, date, type);
      return (response);
    } catch (err) {
      return (err);
    }
  },
  async deleteOperations(id) {
    try {
      const response = await operationsRepo.deleteOperations(id);
      return (response);
    } catch (err) {
      return (err);
    }
  },
};
