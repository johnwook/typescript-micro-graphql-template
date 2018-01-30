import { microGraphiql, microGraphql } from "apollo-server-micro";
import { send } from "micro";
import { get, post, router } from "microrouter";
import schema from "./schema";

const graphqlHandler = microGraphql({ schema });
const graphiqlHandler = microGraphiql({ endpointURL: "/graphql" });

const handler = router(
  get("/graphql", graphqlHandler),
  post("/graphql", graphqlHandler),
  get("/graphiql", graphiqlHandler),
  (_, res) => send(res, 404, "not found")
);

module.exports = handler;
