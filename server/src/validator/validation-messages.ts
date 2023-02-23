import ValidationMessage from "src/class/validation_message"
import Const from "src/constants"

/**
 * JSON.stringify
 */
const J = (obj: any) => ValidationMessage.stringify(obj)

type TValidations = {
    "any.required"?: string,
    "string.alphanum"?: string,
    "string.base"?: string,
    "string.email"?: string,
    "string.empty"?: string,
    "string.max"?: string,
    "string.min"?: string,
}

export type TDisplayMsg = {
    pt_br?: TValidations
}

/**
 * Display Message Language
 */
type TDisplayMsgLang = {
    pt_br?: string,
}

class ValidationMessages {
    validations = {
        "any.required": (name: string, ...args: [TDisplayMsgLang?]) => ({
            default: this._displayPattern(name, `not provided`),
            pt_br: args[0]?.pt_br,
        }),

        "string.alphanum": (name: string, ...args: [TDisplayMsgLang?]) => ({
            default: this._displayPattern(name, `must be alphanumeric`),
            pt_br: args[0]?.pt_br,
        }),

        "string.base": (name: string, ...args: [TDisplayMsgLang?]) => ({
            default: this._displayPattern(name, `must be a string`),
            pt_br: args[0]?.pt_br,
        }),

        "string.email": (name: string, ...args: [TDisplayMsgLang?]) => ({
            default: this._displayPattern(name, `invalid email type`),
            pt_br: args[0]?.pt_br,
        }),

        "string.empty": (name: string, ...args: [TDisplayMsgLang?]) => ({
            default: this._displayPattern(name, `cannot be empty`),
            pt_br: args[0]?.pt_br,
        }),

        "string.max": (name: string, max: number, ...args: [TDisplayMsgLang?]) => ({
            default: this._displayPattern(name, `must be <= ${max}`),
            pt_br: args[0]?.pt_br,
        }),
        
        "string.min": (name: string, min: number, ...args: [TDisplayMsgLang?]) => ({
            default: this._displayPattern(name, `must be >= ${min}`),
            pt_br: args[0]?.pt_br,
        }),
    } as const

    get(
        messages: Array<keyof typeof this.validations>,
        data: { name: string, min?: number, max?: number },
        display_message?: TDisplayMsg
    ) {
        const validation_messages = {} as any

        for (const message of messages) {
            switch(message) {
                case "string.max":
                    validation_messages[message] = J(this.validations[message](
                        data.name, 
                        data.max || Const.LengthLimit.max, 
                        { pt_br: display_message?.pt_br?.[message] }
                    ))
                break

                case "string.min":
                    validation_messages[message] = J(this.validations[message](
                        data.name,
                        data.min || Const.LengthLimit.min,
                        { pt_br: display_message?.pt_br?.[message] }
                    ))
                break
                
                default:
                    validation_messages[message] = J(this.validations[message](
                        data.name, 
                        { pt_br: display_message?.pt_br?.[message] }
                    ))
                break
            }
        }

        return validation_messages
    }

    protected _displayPattern(name: string, message: string) {
        return `[${name}] ${message}`
    }
}

export default ValidationMessages
