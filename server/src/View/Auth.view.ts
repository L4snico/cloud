import { View } from "src/class";
import { AuthDto } from "src/dto";

export class AuthView extends View {
    constructor() {
        super()
        this._logErrorId = {
            ptBr: "Falha na AuthView"
        }
    }
    
    async signUpUser(dto: AuthDto.TSignUpUser) {
        this._logErrorId = {
            ptBr: "Falha ao inscrever usuário (AuthView)"
        }

        const { username, email, password } = dto
        
        try {
            const successData = await this._authController.signUpUser({ username, email, password })
            
            this._setResponseSuccess("subscribed", successData)
        } catch(error) {
            this._logError(error, [`email: ${email}`])

            this._setDefaultResponseError()
        }
        finally {
            return this._response.execute()
        }
    }
}
