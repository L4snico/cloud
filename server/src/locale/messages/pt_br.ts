/**
 * pt_br Validation Messages
 */
class PtBr {
    protected article = {
        a: (mf: boolean) => mf ? "um" : "uma",
        the: (mf: boolean) => mf ? "o" : "a",
    }
    
    validations = {
        "any.required": (name: string, mf: boolean) => {
            const a = this.article.a(mf)
            
            return `Digite ${a} ${name}`
        },
    
        "string.alphanum": (name: string, mf: boolean) => {
            const the = this.article.the(mf).toUpperCase()
            
            return `${the} ${name} precisa ser alfanumérico`
        },
    
        "string.base": (name: string, mf: boolean) => {
            const the = this.article.the(mf).toUpperCase()
    
            return `${the} ${name} precisa ser do tipo string`
        },
    
        "string.email": (name: string, mf: boolean) => {
            const the = this.article.the(mf).toUpperCase()
    
            return `${the} ${name} é um tipo de e-mail que não aceitamos`
        },
    
        "string.empty": (name: string, mf: boolean) => {
            const the = this.article.the(mf).toUpperCase()
    
            return `${the} ${name} precisa ser preenchido`
        },
    
        "string.max": (name: string, max: number, mf: boolean) => {
            const the = this.article.the(mf).toUpperCase()
            
            return `${the} ${name} precisa ter no máximo ${max} ${max > 1 ? "caracteres" : "caractere"}`
        },
        
        "string.min": (name: string, min: number, mf: boolean) => {
            const the = this.article.the(mf).toUpperCase()
    
            return `${the} ${name} precisa ter no mínimo ${min} ${min > 1 ? "caracteres" : "caractere"}`
        },
    }
}

export default PtBr
