const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('rad');
});

router.post('/', (req, res) => {
  res.send('rad');
});

router.put('/:id', (req, res) => {
  res.send('rad');
});

router.delete('/:id', (req, res) => {
  res.send('rad');
});

module.exports = router;
