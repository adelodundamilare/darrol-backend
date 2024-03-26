import Joi from 'joi';

const createTheme = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    coverImageUrl: Joi.string().required()
  })
};

const getThemes = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer()
  })
};

const getTheme = {
  params: Joi.object().keys({
    id: Joi.number().integer()
  })
};

const updateTheme = {
  params: Joi.object().keys({
    id: Joi.number().integer()
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      coverImageUrl: Joi.string()
    })
    .min(1)
};

const deleteTheme = {
  params: Joi.object().keys({
    id: Joi.number().integer()
  })
};

export default {
  createTheme,
  getThemes,
  getTheme,
  updateTheme,
  deleteTheme
};
