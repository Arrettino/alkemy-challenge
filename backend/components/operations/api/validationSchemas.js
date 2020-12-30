const Joi = require('joi');

const schemas = {
  operations: Joi.object().keys({
    concept: Joi.string().min(3).max(30).required(),
    amount: Joi.number().integer().positive().required(),
    date: Joi.string().length(10).required(),
    type: Joi.string().min(1).max(20).required(),
  }),
  operationsId: Joi.object().keys({
    id: Joi.number().integer(),
  }),
};

module.exports = schemas;
