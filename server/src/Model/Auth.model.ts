import { Model } from "src/class"
import { Security } from "src/class/security";
import { AuthDto } from "src/dto";

export class AuthModel extends Model {
    async signUpUser(dto: AuthDto.TSignUpUser) {
        const { username, email, password } = dto
        
        const user = await this._userRepository.create({
            data: {
                username,
                email,
                password
            },
            select: {
                id: true,
                username: true,
                email: true,
            }
        })

        const token = Security.generateToken("user", { user: { id: user.id } }, "1d")

        return { token }
    }
}
