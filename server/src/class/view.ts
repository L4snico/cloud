import signale from "signale"
import AuthController from "src/Controller/Auth.controller"
import ViewResponse from "src/class/view-response"

class View {
    protected _logErrorId = {
        ptBr: "Falha em alguma View"
    }
    protected _response = new ViewResponse()
    protected _authController = new AuthController()

    protected _logError(error: unknown, debug?: string[]) {
        signale.error(this._logErrorId)
        if (debug) debug.forEach((log) => signale.debug(log))
        console.error(error)
    }

    protected _setResponseSuccess(reason: typeof this._response.reason, successData: typeof this._response.successData) {
        this._response.error = false
        this._response.reason = reason
        this._response.successData = successData
        this._response.errorData = null
    }

    protected _setResponseError(reason: typeof this._response.reason, errorData: typeof this._response.errorData) {
        this._response.error = true
        this._response.reason = reason
        this._response.successData = null
        this._response.errorData = errorData
    }

    protected _setDefaultResponseError() {
        this._response.error = true
        this._response.reason = "internal_server_error"
        this._response.successData = null
        this._response.errorData = {
            message: null,
            messages: null,
            suggestedMessage: {
                ptBr: "Falha ao se comunicar com o servidor",
            }
        }
    }
}

export default View
