const express = require('express');
const operationsController = require('./controller');
const validationMiddleware = require('../../../middleware/validationMiddleware');
const schema = require('./schemas');

const router = express.Router();

router.get('/', operationsController.findAllOperations);

router.post('/', validationMiddleware(schema.operations, 'body'), operationsController.createOperations);

router.put('/:id', validationMiddleware(schema.operationsId, 'params'), validationMiddleware(schema.operations, 'body'), operationsController.updateOperations);

router.delete('/:id', validationMiddleware(schema.operationsId, 'params'), operationsController.deleteOperations);

module.exports = router;
