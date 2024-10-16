import * as userService from "../services/user.service.ts";

export async function getUsers(): Promise<Response> {
  const users = await userService.getUsers();
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
