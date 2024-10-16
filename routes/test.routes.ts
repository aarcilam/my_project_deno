import { getHi } from "../controllers/test.controller.ts";

export default function routes(request: Request):Response {
    const url = new URL(request.url);
    const { pathname } = url;
  
    if (request.method === "GET" && pathname === "/api/hi") {
      return getHi();
    }

    return new Response("Not Found", { status: 404 });
}