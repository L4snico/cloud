import Joi from "joi";

class ValidatorSchema {
    static username(required = true) {
        if (!required) {
            return Joi.string().alphanum().min(4).max(32)
        }

        return Joi.string().required().alphanum().min(4).max(32)
    }

    static email(required = true) {
        if (!required) {
            return Joi.string().email()
        }
        
        return Joi.string().required().email()
    }

    static password() {
        return Joi.string().min(6).max(32)
    }
}

export default ValidatorSchema
