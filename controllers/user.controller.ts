import * as userService from "../services/user.service.ts";

export async function getUsers(): Promise<Response> {
  const users = await userService.getUsers();
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function createUser(request: Request): Promise<Response> {
  const user = await request.json();
  const result = await userService.createUser(user);
  return new Response(JSON.stringify(result), {
    status: result.error ? 400 : 201,
    headers: { "Content-Type": "application/json" },
  });
}

export async function updateUser(request: Request): Promise<Response> {
  const { id } = request.params; // Asumiendo que el ID se pasa como parámetro
  const user = await request.json();
  const result = await userService.updateUser(Number(id), user);
  return new Response(JSON.stringify(result), {
    status: result.error ? 400 : 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function deleteUser(request: Request): Promise<Response> {
  const { id } = request.params; // Asumiendo que el ID se pasa como parámetro
  const result = await userService.deleteUser(Number(id));
  return new Response(JSON.stringify(result), {
    status: result.error ? 400 : 200,
    headers: { "Content-Type": "application/json" },
  });
}
