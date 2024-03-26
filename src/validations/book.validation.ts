import Joi from 'joi';

const createBook = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    amount: Joi.string().required(),
    description: Joi.string().required(),
    imageUrl: Joi.string().required()
  })
};

const getBooks = {
  query: Joi.object().keys({
    name: Joi.string(),
    amount: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer()
  })
};

export default {
  createBook,
  getBooks
};
