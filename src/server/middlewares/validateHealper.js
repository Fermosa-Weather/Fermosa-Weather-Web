const { validationResult } = require("express-validator");

const validateSchema = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorArray = errors.array();
        const errorObject = errors.mapped();

        const errorMessages = errorArray.map(error => error.msg);

        return res.status(400).json({
            errors: {
                array: errorMessages,
                object: errorObject
            }
        });
    }

    next();
};

module.exports = { validateSchema };
