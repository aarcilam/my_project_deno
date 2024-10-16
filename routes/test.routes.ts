import { getHi } from "../controllers/test.controller.ts";

export default async function routes(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const { pathname } = url;

  if (request.method === "GET" && pathname === "/api/hi") {
    return await getHi();
  }

  return new Response("Not Found", { status: 404 });
}
