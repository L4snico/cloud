import Joi from "joi";
import Const from "src/constants";
import prisma from "src/prisma";
import ValidatorSchema from "src/validator/validator-schema";

class Model {
    protected _user_repository = prisma.user

    protected _validator_schema = new ValidatorSchema()
    
    protected _VALIDATION_MSG = Const.ValidationMessages
    protected _LENGTH = Const.LengthLimit

    protected async _validate(value: any, schema: any) {
        await Joi.object(schema).validateAsync(value, { abortEarly: false })
    }
}

export default Model
