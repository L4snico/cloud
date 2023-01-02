import { NonEmptyArray } from "type-graphql"
import { HeathCheckResolver } from "./HealthCheck.resolver"
import { UserResolver } from "./User.resolver"

type TGraphQlResolvers = NonEmptyArray<Function> | NonEmptyArray<string>

export const gqlResolvers: TGraphQlResolvers = [HeathCheckResolver, UserResolver]
