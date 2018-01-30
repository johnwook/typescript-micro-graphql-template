import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolvers";
const typeDefs = importSchema("typeDefs/schema.graphql");

const schema = makeExecutableSchema({
  resolvers,
  typeDefs
});

export default schema;
