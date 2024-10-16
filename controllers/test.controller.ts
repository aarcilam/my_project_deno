import { getHello } from "../services/test.service.ts";

export async function getHi(): Promise<Response> {
  const hello = await getHello();
  return new Response(JSON.stringify(hello), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
