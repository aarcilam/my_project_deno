import routes from "./routes/index.ts";

const handler = async (request: Request) => {
  return await routes(request);
};

Deno.serve({ port: 4322 }, handler);
