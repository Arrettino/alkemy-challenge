const { operations } = require('../api/validationSchemas');
const operationsRepo = require('../dataAccess');

module.exports = {
  findAllOperations() {
    operationsRepo.findAllOperations();
    return ('rad');
  },
  createOperations(concept, amount, date, type) {
    operationsRepo.createOperations(concept, amount, date, type);
    return ('rad');
  },
  updateOperations(id, concept, amount, date, type) {
    operationsRepo.updateOperations(id, concept, amount, date, type);
    return ('rad');
  },
  deleteOperations(id) {
    operationsRepo.deleteOperations(id);
    return ('rad');
  },
};
