const operationsServices = require('../services');

module.exports = {
  findAllOperations(req, res) {
    operationsServices.findAllOperations();
    res.send('rad');
  },
  createOperations(req, res) {
    operationsServices.createOperations();
    res.send('rad');
  },
  updateOperations(req, res) {
    operationsServices.updateOperations();
    res.send('rad');
  },
  deleteOperations(req, res) {
    operationsServices.deleteOperations();
    res.send('rad');
  },
};
