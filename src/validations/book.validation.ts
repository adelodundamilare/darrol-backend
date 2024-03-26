import Joi from 'joi';

const createBook = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    imageUrl: Joi.string()
  })
};

const getBooks = {
  query: Joi.object().keys({
    name: Joi.string(),
    price: Joi.number(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer()
  })
};

export default {
  createBook,
  getBooks
};
