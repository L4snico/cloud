import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class User {
	@Field(_type => ID)
	id!: string

	@Field(_type => String)
	email!: string

	@Field(_type => String)
	password!: string
}
