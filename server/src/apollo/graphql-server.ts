import path from "path"
import { buildSchema } from "type-graphql"
import { ApolloServer } from "apollo-server"
import signale from "signale"
import HeathCheckResolver from "src/graphql/resolver/HealthCheck.resolver"
import AuthResolver from "src/graphql/resolver/Auth.resolver"

class GraphQlServer {
	static async init() {
		const schema = await buildSchema({
            resolvers: [
				HeathCheckResolver,
				AuthResolver,
			],
            emitSchemaFile: path.resolve(__dirname, "..", "..", "schema.gql")
        })

		const server = new ApolloServer({
            schema
        })

		const server_info = await server.listen()

		signale.star(`Server URL: ${server_info.url}`)
	}
}

export default GraphQlServer
