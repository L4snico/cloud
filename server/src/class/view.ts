import signale from "signale"
import AuthController from "src/Controller/Auth.controller"
import ViewResponse from "src/class/view-response"
import Joi from "joi"
import ValidationMessage from "./validation_message"

const validation_message = new ValidationMessage()

class View {
    protected _log_error_id = {
        pt_br: "Falha em algum processo"
    }
    protected _response = new ViewResponse()
    protected _auth_controller = new AuthController()

    protected _handleError(error: any, debug?: string[]) {
        if ( this._handleValidationError(error) ) return
        
        this._logError(error, debug)
        this._setDefaultResponseError()
    }
    
    protected _handleValidationError(error: any) {
        if (error instanceof Joi.ValidationError) {
            this._setResponseError("validation_failed", {
                messages: error.details.map((e) => validation_message.getDefault(e.message)),
                display_messages: {
                    pt_br: error.details.map((e) => validation_message.getPtBr(e.message)),
                    en_us: error.details.map((e) => validation_message.getEnUs(e.message)),
                },
            })

            return true
        }

        return false
    }
    
    protected _logError(error: unknown, debug?: string[]) {
        signale.error(this._log_error_id)
        
        if (debug) debug.forEach((log) => signale.debug(log))

        console.error(error)
    }

    protected _setResponseSuccess(reason: typeof this._response.reason, success_data: typeof this._response.success_data) {
        this._response.error = false
        this._response.reason = reason
        this._response.success_data = success_data
        this._response.error_data = null
    }

    protected _setResponseError(reason: typeof this._response.reason, error_data: typeof this._response.error_data) {
        this._response.error = true
        this._response.reason = reason
        this._response.success_data = null
        this._response.error_data = error_data
    }

    protected _setDefaultResponseError() {
        this._response.error = true
        this._response.reason = "internal_server_error"
        this._response.success_data = null
        this._response.error_data = {
            messages: null,
            display_messages: {
                pt_br: ["Falha ao se comunicar com o servidor"],
            }
        }
    }
}

export default View
