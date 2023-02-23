import Joi from "joi";
import Model from "src/class/model"
import Security from "src/class/security";
import AuthDto from "src/dto/Auth.dto";

class AuthModel extends Model {
    async signUpUser(dto: AuthDto.TSignUpUser) {
        const { username, email, password } = dto
          
        const user = await this._user_repository.create({
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
    async signUpUserValidator(dto: AuthDto.TSignUpUser) {
        await this._validate(dto, {
            username: this._validator_schema.username(undefined, {
                pt_br: {
                    ...this._VALIDATION_MSG.getAllPtBr("nome de usuário", true, this._LENGTH.min_username, this._LENGTH.max_username)
                }
            }),
            email: this._validator_schema.email(undefined, {
                pt_br: {
                    ...this._VALIDATION_MSG.getAllPtBr("e-mail", true)
                }
            }),
            password: this._validator_schema.password(undefined, {
                pt_br: {
                    ...this._VALIDATION_MSG.getAllPtBr("senha", false, this._LENGTH.min_password, this._LENGTH.max_password)
                }
            }),
        })
    }
}

export default AuthModel
