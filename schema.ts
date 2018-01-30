import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";

// Some fake data
const books = [
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Sorcerer's stone"
  },
  {
    author: "Michael Crichton",
    title: "Jurassic Park"
  }
];

const typeDefs = importSchema("typeDefs/schema.graphql");

// The resolvers
const resolvers = {
  Query: { books: () => books }
};

// Put together a schema
const schema = makeExecutableSchema({
  resolvers,
  typeDefs
});

export default schema;
