export type TArticles = "a" | "an"

/**
 * en_us validation messages
 */
class EnUs {
    validations = {
        "any.required": (name: string, article: TArticles) => {
            return `Enter ${article} ${name}`
        },
    
        "string.alphanum": (name: string) => {
            return `The ${name} must be an alphanumeric`
        },
    
        "string.base": (name: string) => {
            return `The ${name} must be a string type`
        },
    
        "string.email": (name: string) => {
            return `The ${name} is an email type that we do not accept`
        },
    
        "string.empty": (name: string) => {
            return `The ${name} cannot be empty`
        },
    
        "string.max": (name: string, max: number) => {
            return `The ${name} must be at most ${max} ${max > 1 ? "characters" : "character"}`
        },
        
        "string.min": (name: string, min: number) => {
            return `The ${name} must be at least ${min} ${min > 1 ? "characters" : "character"}`
        },
    }
}

export default EnUs
