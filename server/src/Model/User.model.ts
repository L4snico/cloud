import prisma from "src/prisma"

export class UserModel {
	static async create(data: TCreateData) {
		const user = await prisma.user.create({
			data: {
				...data,
			},
		})

		return user
	}

	static async findMany() {
		const users = await prisma.user.findMany()

		return users
	}
}

type TCreateData = {
	username: string
	email: string
	password: string
}
