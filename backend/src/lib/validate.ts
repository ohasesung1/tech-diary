import Joi from '@hapi/joi';

export const writePostValidate = (body: Object) => {
  const schema = Joi.object().keys({
    title: Joi.string().max(50).required(),
    contents: Joi.string().max(3000).required(),
  });

  return schema.validateAsync(body);
};

export const updatePostValidate = (body: Object) => {
  const schema = Joi.object().keys({
    idx: Joi.number().integer().required(),
    title: Joi.string().max(50).required(),
    contents: Joi.string().max(3000).required(),
  });

  return schema.validateAsync(body);
};