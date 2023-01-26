import { hashSync } from "bcrypt"
import { sign } from "jsonwebtoken"
import Secrets from "src/config/auth-secrets"

export default class Security {
    static generateToken(to: TGenerateTokenTo, encodeData?: any, expires?: string) {
        if (to === "user") return sign(encodeData || {}, Secrets.user, { expiresIn: expires || "1d" })
    }

    static hashPassword(password: string) {
        return hashSync(password, 10)
    }
}

type TGenerateTokenTo = "user"
