import "reflect-metadata"
import path from "path"
import { buildSchema } from "type-graphql"
import { ApolloServer } from "apollo-server"
import signale from "signale"
import { gqlResolvers } from "src/graphql/resolvers"

class Server {
	static async init() {
		const schema = await buildSchema({
            resolvers: gqlResolvers,
            emitSchemaFile: path.resolve(__dirname, "schema.gql")
        })

		const server = new ApolloServer({
            schema
        })

		const info = await server.listen()

		signale.star(`Server URL: ${info.url}`)
	}
}

Server.init()
