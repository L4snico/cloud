import { hash } from "bcrypt"
import { UserModel } from "src/Model"

export class UserController {
	private userModel = new UserModel()
	
	async createUser(data: TCreateUserData) {
		const user = await this.userModel.create({
			username: data.username,
			email: data.email,
			password: await this.hashPassword(data.password),
		})

		return user
	}

    async getUsers() {
        const users = await this.userModel.findMany()

        return users
    }

    private async hashPassword(password: string) {
        const hashedPassword = await hash(password, 10)

        return hashedPassword
    }
}

type TCreateUserData = {
	username: string
	email: string
	password: string
}
