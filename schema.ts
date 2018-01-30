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

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

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