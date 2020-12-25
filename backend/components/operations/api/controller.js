const operationsServices = require('../services');

module.exports = {
  findAllOperations(req, res) {
    operationsServices.operationsFindAll();
    res.send('rad');
  },
  createOperations(req, res) {
    operationsServices.operationsCreate();
    res.send('rad');
  },
  updateOperations(req, res) {
    operationsServices.operationsUpdate();
    res.send('rad');
  },
  deleteOperations(req, res) {
    operationsServices.operationsDelete();
    res.send('rad');
  },
};
