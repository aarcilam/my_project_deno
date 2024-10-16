import routes from "./routes/test.routes.ts";

const handler = (request: Request) => {
  return routes(request);
};

Deno.serve({ port: 4321 },handler);