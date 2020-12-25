const express = require('express');
const operationsController = require('./controller');

const router = express.Router();

router.get('/', operationsController.operationsFindAll);

router.post('/', operationsController.operationsCreate);

router.put('/:id', operationsController.operationsUpdate);

router.delete('/:id', operationsController.operationsDelete);

module.exports = router;
