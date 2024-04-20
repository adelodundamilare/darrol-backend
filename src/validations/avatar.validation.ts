import Joi from 'joi';

const createAvatar = {
  body: Joi.object().keys({
    gender: Joi.string().valid('girl', 'boy').required(),
    skinColor: Joi.string().valid('light', 'medium', 'dark').required(),
    hairStyle: Joi.string()
      .valid(
        'very short bald',
        'short straight',
        'short curly',
        'medium length straight',
        'medium length curly',
        'long straight',
        'long curly'
      )
      .required(),
    hairColor: Joi.string().valid('blonde', 'brown', 'dark', 'red').required(),
    eyeColor: Joi.string().valid('blue', 'green', 'brown').required(),
    glasses: Joi.boolean().default(false)
  })
};

const regenerateAvatar = {
  body: Joi.object().keys({
    imageUrl: Joi.string()
      .uri({
        scheme: ['http', 'https']
      })
      .required()
  })
};

export default {
  createAvatar,
  regenerateAvatar
};
