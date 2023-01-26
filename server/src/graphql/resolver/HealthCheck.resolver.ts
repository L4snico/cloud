import { Query, Resolver } from "type-graphql"

@Resolver()
class HeathCheckResolver {
	@Query(() => Boolean)
	async heathCheck() {
		return true
	}
}

export default HeathCheckResolver
