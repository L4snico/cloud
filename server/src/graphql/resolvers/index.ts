import { NonEmptyArray } from "type-graphql"
import { HeathCheckResolver } from "./HealthCheck.resolver"

type TGraphQlResolvers = NonEmptyArray<Function> | NonEmptyArray<string>

export const graphQlResolvers: TGraphQlResolvers = [HeathCheckResolver]
