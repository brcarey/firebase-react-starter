import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import { join } from "path";
import resolvers from "./resolvers";

const typeDefs = importSchema(join(__dirname, "./schema/schema.graphql"));

export const schema = makeExecutableSchema({
  resolvers: resolvers as any,
  typeDefs
});
