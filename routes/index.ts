import userRoutes from "./user.routes.ts";

export default async function routes(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const { pathname } = url;

  if (pathname === "/api/users") {
    return await userRoutes(request);
  }

  if (pathname === "/") {
    return new Response("Hello from deno 2.0");
  }

  return new Response("Not Found", { status: 404 });
}
