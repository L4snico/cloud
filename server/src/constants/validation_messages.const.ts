import Locale from "src/locale"
import { TArticles } from "src/locale/messages/en_us"
import Const from "."

const getValidationsList = (validations: any) => Object.getOwnPropertyNames(validations)

class ValidationMessagesConst {
    static pt_br_validations = Locale.Messages.pt_br.validations
    static en_us_validations = Locale.Messages.en_us.validations

    static getAllPtBr(
        name: string, 
        mf: boolean, 
        min: number = Const.LengthLimit.min, 
        max: number = Const.LengthLimit.max
    ) {
        const validations = getValidationsList(this.pt_br_validations)

        const allPtBrValidations: any = {}

        for (const validation of validations) {
            switch(validation) {
                case "string.min":
                    allPtBrValidations[validation] = this.pt_br_validations[validation](name, min, mf)
                break
                
                case "string.max":
                    allPtBrValidations[validation] = this.pt_br_validations[validation](name, max, mf)
                break
                
                default:
                    // @ts-ignore
                    allPtBrValidations[validation] = this.pt_br_validations[validation](name, mf)
                break
            }
        }

        return allPtBrValidations
    }

    static getAllEnUs(
        name: string,
        article: TArticles,
        min: number = Const.LengthLimit.min,
        max: number = Const.LengthLimit.max
    ) {
        const validations = getValidationsList(this.en_us_validations)

        const allEnUsValidations: any = {}

        for (const validation of validations) {
            switch(validation) {
                case "string.min":
                    allEnUsValidations[validation] = this.en_us_validations[validation](name, min)
                break

                case "string.max":
                    allEnUsValidations[validation] = this.en_us_validations[validation](name, max)
                break

                case "any.required":
                    allEnUsValidations[validation] = this.en_us_validations[validation](name, article)
                break
                
                default:
                    // @ts-ignore
                    allEnUsValidations[validation] = this.en_us_validations[validation](name)
                break
            }
        }

        return allEnUsValidations
    }
}

export default ValidationMessagesConst
