const operationsServices = require('../services');

module.exports = {
  operationsFindAll(req, res) {
    operationsServices.operationsFindAll();
    res.send('rad');
  },
  operationsCreate(req, res) {
    operationsServices.operationsCreate();
    res.send('rad');
  },
  operationsUpdate(req, res) {
    operationsServices.operationsUpdate();
    res.send('rad');
  },
  operationsDelete(req, res) {
    operationsServices.operationsDelete();
    res.send('rad');
  },
};
