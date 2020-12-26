const operationsServices = require('../services');

module.exports = {
  async findAllOperations(req, res) {
    try {
      await operationsServices.findAllOperations();
      res.send('rad');
    } catch (err) {
      res.send(err);
    }
  },

  async createOperations(req, res) {
    try {
      const {
        concept, amount, date, type,
      } = req.body;
      await operationsServices.createOperations(concept, amount, date, type);
      res.send('rad');
    } catch (err) {
      res.send(err);
    }
  },

  async updateOperations(req, res) {
    try {
      const { id } = req.params;
      const {
        concept, amount, date, type,
      } = req.body;
      await operationsServices.updateOperations(id, concept, amount, date, type);
      res.send('rad');
    } catch (err) {
      res.send(err);
    }
  },

  async deleteOperations(req, res) {
    try {
      const { id } = req.params;
      await operationsServices.deleteOperations(id);
      res.send('rad');
    } catch (err) {
      res.send(err);
    }
  },
};
