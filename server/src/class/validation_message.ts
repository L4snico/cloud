class ValidationMessage {
    static stringify(obj: any) {
        return JSON.stringify(obj).replaceAll("{", "<<").replaceAll("}", ">>")
    }

    static parse(str: string) {
        str = str.replaceAll("<<", "{").replaceAll(">>", "}")
        
        return JSON.parse(str)
    }

    static getDefault(validation_message: string) {
        const message = ValidationMessage.parse(validation_message)

        return message?.default
    }

    static getPtBr(validation_message: string) {
        const message = ValidationMessage.parse(validation_message)

        return message?.pt_br
    }
}

export default ValidationMessage
