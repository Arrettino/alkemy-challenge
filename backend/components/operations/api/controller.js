const operationsServices = require('../services');

module.exports = {
  findAllOperations(req, res) {
    operationsServices.findAllOperations();
    res.send('rad');
  },
  createOperations(req, res) {
    const {
      concept, amount, date, type,
    } = req.body;
    operationsServices.createOperations(concept, amount, date, type);
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
