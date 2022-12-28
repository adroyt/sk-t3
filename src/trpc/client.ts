import type { AppRouter } from "$trpc"; // 👈 only the types are imported from the server
import type { LoadEvent } from "@sveltejs/kit";
import { browser } from "$app/environment";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";

const url = browser ? "/trpc" : "http://localhost:5173/trpc";

export const trpc = (loadFetch?: LoadEvent["fetch"]) =>
  createTRPCProxyClient<AppRouter>({
    transformer: superjson,
    links: [
      httpBatchLink({
        url: loadFetch ? "/trpc" : url,
      }),
    ],
    ...(loadFetch && { fetch: loadFetch as typeof fetch }),
  });
