import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./schema/type-defs.js";
import { resolvers } from "./schema/resolvers.js";

const appServer = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(appServer, {
    listen: { port: 4000 },
})
console.log(`🚀 Server ready at ${url}`)
