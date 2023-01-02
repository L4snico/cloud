import prisma from "src/prisma"

export class UserModel {
	async create(data: TCreateData) {
		const user = await prisma.user.create({
			data: {
				...data,
			},
		})

		return user
	}

	async findMany() {
		const users = await prisma.user.findMany()

		return users
	}
}

type TCreateData = {
	username: string
	email: string
	password: string
}
