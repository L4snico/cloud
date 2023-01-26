import Joi from "joi";
import Model from "src/class/model"
import Security from "src/class/security";
import AuthDto from "src/dto/Auth.dto";
import ValidatorSchema from "src/validator/validator-schema";

class AuthModel extends Model {
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
    async signUpUserValidate(dto: AuthDto.TSignUpUser) {
        await Joi.object({
            username: ValidatorSchema.username(),
            email: ValidatorSchema.email(),
            password: ValidatorSchema.password(),
        })
        .validateAsync(dto)
    }
}

export default AuthModel
