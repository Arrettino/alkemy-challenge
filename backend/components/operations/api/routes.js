const express = require('express');
const operationsController = require('./controller');
const validationMiddleware = require('../../../middleware/validationMiddleware');
const validationSchema = require('./validationSchemas');

const router = express.Router();

router.get('/',
  validationMiddleware(validationSchema.operationsId, 'query'),
  operationsController.findOperations);

router.get('/totalbalance', operationsController.totalBalance);

router.get('/categories', operationsController.findAllCategories);

router.post('/',
  validationMiddleware(validationSchema.operations, 'body'),
  operationsController.createOperations);

router.put('/:id',
  validationMiddleware(validationSchema.operationsId, 'params'),
  validationMiddleware(validationSchema.operations, 'body'),
  operationsController.updateOperations);

router.delete('/:id',
  validationMiddleware(validationSchema.operationsId, 'params'),
  operationsController.deleteOperations);

module.exports = router;
