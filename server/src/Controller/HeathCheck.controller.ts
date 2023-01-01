import { Query, Resolver } from "type-graphql"

@Resolver()
export class HeathCheckController {
	@Query(() => Boolean)
	async heathCheck() {
		return true
	}
}
