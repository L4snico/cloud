import Controller from "src/class/controller";
import Security from "src/class/security";
import AuthDto from "src/dto/Auth.dto";

class AuthController extends Controller {
    async signUpUser(dto: AuthDto.TSignUpUser) {
        const { username, email, password } = dto
        
        await this._auth_model.signUpUserValidator(dto)
        
        return await this._auth_model.signUpUser({
            username: username,
            email: email,
            password: Security.hashPassword(password),
        })
    }
}

export default AuthController
