import joi from 'joi';

const schema = joi.object().keys({
    ip: joi.string().required(),
    coordinates: joi.object({
        x: joi.number().required,
        y: joi.number().required,
    }).required()
})

export default schema;