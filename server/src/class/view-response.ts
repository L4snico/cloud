import { ErrorData } from "../graphql/class/response-schema"

export default class ViewResponse {
    error = false
    reason: TReason = "undefined"
    successData: any = null
    errorData: ErrorData | null = null
    
    execute() {
        return {
            error: this.error,
            reason: this.reason,
            successData: this.successData,
            errorData: this.errorData,
        }
    }
}

const reasonTypes = [
    "subscribed",
    "undefined",
    "subscribed",
    "internal_server_error",
    "validation_failed",
] as const
type TReason =
    | typeof reasonTypes[0]
    | typeof reasonTypes[1]
    | typeof reasonTypes[2]
    | typeof reasonTypes[3]
    | typeof reasonTypes[4]
