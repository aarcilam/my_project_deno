import { getUsers } from "../controllers/user.controller.ts";

export default async function userRoutes(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const { pathname } = url;

  if (request.method === "GET" && pathname === "/api/users") {
    return await getUsers();
  }

  return new Response("Not Found", { status: 404 });
}
