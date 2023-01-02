import { Query, Resolver } from "type-graphql"

@Resolver()
export class HeathCheckResolver {
	@Query(() => Boolean)
	async heathCheck() {
		return true
	}
}
