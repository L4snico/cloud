import { Security } from "src/class/security";
import { AuthDto } from "src/dto";
import { AuthModel } from "src/Model";

export class AuthController {
	protected _authModel = new AuthModel()
    
    async signUpUser(dto: AuthDto.TSignUpUser) {
        const { username, email, password } = dto
        
        await this._authModel.signUpUserValidate(dto)
        
        return await this._authModel.signUpUser({
            username: username,
            email: email,
            password: Security.hashPassword(password),
        })
    }
}
