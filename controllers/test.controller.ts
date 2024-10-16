import { getHello } from "../services/test.service.ts";

export function getHi(): Response {
  const hello = getHello();
    return new Response(hello, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }