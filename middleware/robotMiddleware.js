const Joi = require("joi");

module.exports.middlewareValidator = (req,res,next) => {
    const robotSchema = Joi.object({
        moves: Joi.number().integer().min(1).max(4).required().strict(),
        battery: Joi.number().required().strict()
    });

    const { error } = robotSchema.validate(req.body,{
        abortEarly: false
    });

    if (error) {
        res.status(400).json({ message: error });
    } else {
        next();
    }
};