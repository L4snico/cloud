import { object, string } from "joi";
import { AuthDto } from "src/dto";

export class AuthValidator {
    signUpUser(dto: AuthDto.TSignUpUser) {
        const schema = object({
            username: string().required().alphanum().min(4).max(32)
        })
    }
}
