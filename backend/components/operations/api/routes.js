const express = require('express');
const operationsController = require('./controller');

const router = express.Router();

router.get('/', operationsController.findAllOperations);

router.post('/', operationsController.createOperations);

router.put('/:id', operationsController.updateOperations);

router.delete('/:id', operationsController.deleteOperations);

module.exports = router;
