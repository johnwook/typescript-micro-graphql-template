import { RequestHandler } from "micro";

const handler: RequestHandler = (_, res) => {
  res.end("Welcome to Micro");
};

module.exports = handler;
