import Koa from "koa";
import { ApolloServer, gql } from "apollo-server-koa";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from './models/index';
import serve from 'koa-static';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { db }
});

const app = new Koa();
server.applyMiddleware({ app });

app.use(serve(__dirname + '/public'))

app.listen(4000);