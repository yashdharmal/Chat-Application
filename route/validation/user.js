const Joi = require('joi')
const { failure } = require('../../constants/validationMessages');

const signUpSchema = Joi.object({
    firstName: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.min': failure.firstNameShort.message,
            'string.max': failure.firstNameLong.message,
            'any.required': failure.firstNameIsRequired.message
        }),

    lastName: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.min': failure.lastNameShort.message,
            'string.max': failure.lastNameLong.message,
            'any.required': failure.lastNameIsRequired.message
        }),
    email: Joi.string()
        .email()
        .required()
        .messages({
            'any.required': failure.emailIsRequired.message,
            'string.email': failure.firstNameLong.message
        }),
    password: Joi.string()
        .min(4)
        .max(30)
        .required()
        .messages({
            'string.min': failure.passwordShort.message,
            'string.max': failure.passwordLong.message,
            'any.required': failure.passwordRequired.message,
        }),

})

const loginSchema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            'any.required': failure.emailIsRequired.message,
            'string.email': failure.firstNameLong.message
        }),
    password: Joi.string()
        .min(4)
        .max(30)
        .required()
        .messages({
            'string.min': failure.passwordShort.message,
            'string.max': failure.passwordLong.message,
            'any.required': failure.passwordRequired.message,
        }),
})
module.exports = { signUpSchema, loginSchema }