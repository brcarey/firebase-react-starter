import { ApolloServer } from "apollo-server-cloud-functions";
import * as functions from "firebase-functions";
import { schema } from "./graphql";

const server = new ApolloServer({
  introspection: true,
  playground: {
    endpoint: "/graphql"
  },
  schema
});

const handler = server.createHandler();

export const graphql = functions.https.onRequest(handler);
