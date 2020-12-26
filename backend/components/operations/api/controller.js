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
    const { id } = req.params;
    const {
      concept, amount, date, type,
    } = req.body;
    operationsServices.updateOperations(id, concept, amount, date, type);
    res.send('rad');
  },
  deleteOperations(req, res) {
    operationsServices.deleteOperations();
    res.send('rad');
  },
};
