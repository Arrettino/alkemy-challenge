const express = require('express');

const router = express.Router();

router.use('/operations', (req, res, next) => {
  res.send('rad');
});

module.exports = router;
