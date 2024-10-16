import { createUser, deleteUser, getUsers, updateUser } from "../controllers/user.controller.ts";

export default async function userRoutes(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const { pathname } = url;
  if (request.method === "GET" && pathname === "/api/users") {
    return await getUsers();
  } else if (request.method === "POST" && pathname === "/api/users") {
    return await createUser(request);
  } else if (request.method === "PUT" && pathname.startsWith("/api/users/")) {
    return await updateUser(request);
  } else if (request.method === "DELETE" && pathname.startsWith("/api/users/")) {
    return await deleteUser(request);
  }

  return new Response("Not Found", { status: 404 });
}
