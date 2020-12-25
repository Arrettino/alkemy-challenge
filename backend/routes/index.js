const express = require('express');
const operationsRoutes = require('../components/operations/api/routes');

const router = express.Router();

router.use('/operations', operationsRoutes);

module.exports = router;
