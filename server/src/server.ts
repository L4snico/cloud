import "reflect-metadata"
import path from "path"
import { buildSchema } from "type-graphql"
import { ApolloServer } from "apollo-server"
import signale from "signale"
import { graphQlResolvers } from "src/graphql/resolvers"

class Server {
	static async main() {
		const schema = await buildSchema({
            resolvers: graphQlResolvers,
            emitSchemaFile: path.resolve(__dirname, "schema.gql")
        })

		const server = new ApolloServer({
            schema
        })

		const info = await server.listen()

		signale.star(`Server URL: ${info.url}`)
	}
}

Server.main()
