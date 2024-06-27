import { serve } from "https://deno.land/std@0.165.0/http/server.ts";

const now = new Date();
console.log("now date", now);

function handler(_req: Request): Response {
      return new Response(now);
}
serve(handler, { port: 80});
