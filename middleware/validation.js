const Joi = require('joi')

const validator = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);

        if (error) {

            const errorMessages = error.details.map((details) => ({ message: details.message }))
            return res.status(403).send(errorMessages);
        }
        next();
    };
};




module.exports = {
    validator
}