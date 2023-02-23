import Joi from "joi";
import View from "src/class/view";
import AuthDto from "src/dto/Auth.dto";

class AuthView extends View {
    constructor() {
        super()
        this._log_error_id = {
            pt_br: "Falha na Autenticação"
        }
    }
    
    async signUpUser(dto: AuthDto.TSignUpUser) {
        this._log_error_id = {
            pt_br: "Falha ao inscrever usuário (Autenticação)"
        }

        const { username, email, password } = dto
        
        try {
            const success_data = await this._auth_controller.signUpUser({ username, email, password })
            
            this._setResponseSuccess("subscribed", success_data)
        } catch(error) {
            this._handleError(error, [`username: ${username}`, `email: ${email}`])
        }
        finally {
            return this._response.execute()
        }
    }
}

export default AuthView
