import Joi from 'joi';

const generateBook = {
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    age: Joi.number().required(),
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
    glasses: Joi.boolean().default(false),
    theme: Joi.string()
      .valid(
        'wild west',
        'magic school',
        'candy world',
        'castles',
        'robot world',
        'dinosaur',
        'circus',
        'dragon world',
        'fantasy land',
        'island',
        'space',
        'underwater',
        'amusement park',
        'zoo',
        'safari',
        'jungle'
      )
      .required(),
    personalMsg: Joi.string()
      .required()
      .regex(/^(\S+\s+){0,39}\S+$/)
      .error(new Error('Personal message must contain exactly 40 words.')),
    familyMembers: Joi.string().required(),
    personalEvents: Joi.string().required()

    // {
    //   firstName: string;
    //   age: string;
    //   gender: string;
    //   skinColor: string;
    //   hairStyle: string;
    //   hairColor: string;
    //   eyeColor: string;
    //   glasses: string;
    //   theme: string;
    //   personalMsg: string;
    //   familyMembers: string[];
    //   personalEvents: string[];
    // }
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
  generateBook,
  getBooks
};
