import Joi from "joi";
import Const from "src/constants";
import ValidationMessages, { TDisplayMsg } from "./validation-messages";

class ValidatorSchema {
    private _messages = new ValidationMessages()
    
    username(
        name = "username",
        display_message?: TDisplayMsg,
        min: number = Const.LengthLimit.min_username,
        max: number = Const.LengthLimit.max_username,
        required = true
    ) {
        const schema = Joi.string().alphanum().min(min).max(max).messages(
            this._messages.get([
                "string.base",
                "string.empty",
                "string.alphanum",
                "string.min",
                "string.max",
            ], { name, min, max }, {
                pt_br: display_message?.pt_br,
                en_us: display_message?.en_us,
            }),
        )

        return schema.concat(this._requiredString(name, required, display_message))
    }

    email(name = "email", display_message?: TDisplayMsg, required = true) {
        const schema = Joi.string().email().messages(
            this._messages.get([
                "string.base",
                "string.empty",
                "string.email",
            ], { name }, {
                pt_br: display_message?.pt_br,
                en_us: display_message?.en_us,
            })
        )

        return schema.concat(this._requiredString(name, required, display_message))
    }

    password(
        name = "password", 
        display_message?: TDisplayMsg,
        min: number = Const.LengthLimit.min_password, 
        max: number = Const.LengthLimit.max_password, 
        required = true
    ) {
        const schema = Joi.string().min(min).max(max).messages(
            this._messages.get([
                "string.base",
                "string.empty",
                "string.min",
                "string.max",
            ], { name, min, max }, {
                pt_br: display_message?.pt_br,
                en_us: display_message?.en_us,
            })
        )

        return schema.concat(this._requiredString(name, required, display_message))
    }

    protected _requiredString(name: string, required: boolean, display_message?: TDisplayMsg) {
        return required
            ? Joi.string().required().messages(
                this._messages.get([ "any.required" ], 
                    { name },
                    { 
                        pt_br: display_message?.pt_br,
                        en_us: display_message?.en_us,
                    }
                )
            ) 
            : Joi.string().optional()
    }
}

export default ValidatorSchema
