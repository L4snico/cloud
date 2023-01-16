import { Controller } from "src/class";
import { Security } from "src/class/security";
import { AuthDto } from "src/dto";

export class AuthController extends Controller {
    async signUpUser(dto: AuthDto.TSignUpUser) {
        const { username, email, password } = dto
        
        return await this._authModel.signUpUser({
            username: username,
            email: email,
            password: Security.hashPassword(password),
        })
    }
}
