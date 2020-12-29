const operationsServices = require('../services');

module.exports = {
  async findAllOperations(req, res) {
    try {
      const { id } = req.query;
      const response = await operationsServices.findAllOperations(id);
      res.send(response);
    } catch (err) {
      res.send(err);
    }
  },

  async createOperations(req, res) {
    try {
      const {
        concept, amount, date, type,
      } = req.body;
      const response = await operationsServices.createOperations(concept, amount, date, type);
      res.send(response);
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
      const response = await operationsServices.updateOperations(id, concept, amount, date, type);
      res.send(response);
    } catch (err) {
      res.send(err);
    }
  },

  async deleteOperations(req, res) {
    try {
      const { id } = req.params;
      const response = await operationsServices.deleteOperations(id);
      res.status(response.status).send({ message: response.message });
    } catch (err) {
      res.status(500).end();
    }
  },

  async totalBalance(req, res) {
    try {
      const response = await operationsServices.findTotalBalance();
      res.send(response);
    } catch (err) {
      res.send(err);
    }
  },
};
