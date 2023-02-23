class ValidationMessage {
    static stringify(obj: any) {
        return JSON.stringify(obj).replaceAll("{", "<<").replaceAll("}", ">>")
    }

    static parse(str: string) {
        str = str.replaceAll("<<", "{").replaceAll(">>", "}")
        
        return JSON.parse(str)
    }

    getDefault(validation_message: string) {
        return this.getMessage("default", validation_message)
    }

    getPtBr(validation_message: string) {
        return this.getMessage("pt_br", validation_message)
    }

    getEnUs(validation_message: string) {
        return this.getMessage("en_us", validation_message)
    }

    protected getMessage(type: "default" | "pt_br" | "en_us", validation_message: string) {
        const message = ValidationMessage.parse(validation_message)

        return message?.[type]
    }
}

export default ValidationMessage
