import { NonEmptyArray } from "type-graphql"
import { AuthResolver } from "./Auth.resolver"
import { HeathCheckResolver } from "./HealthCheck.resolver"

type TGraphQlResolvers = NonEmptyArray<Function> | NonEmptyArray<string>

export const gqlResolvers: TGraphQlResolvers = [HeathCheckResolver, AuthResolver]
