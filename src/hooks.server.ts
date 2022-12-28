import GitHub from "@auth/core/providers/github";
import { SvelteKitAuth } from "@auth/sveltekit";
import type { Handle } from "@sveltejs/kit";
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private";
import { appRouter as trpcRouter } from "$trpc";
import { createContext } from "$trpc/router";
import { createTRPCHandle } from "trpc-sveltekit";
import { sequence } from "@sveltejs/kit/hooks";

const trpcHandle: Handle = async ({ event, resolve }) => {
  // 👇 add this handle
  const response = await createTRPCHandle({
    url: "/trpc",
    router: trpcRouter,
    createContext,
    event,
    resolve,
  });

  return response;
};

export const handle = sequence(
  SvelteKitAuth({
    providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
  }),
  trpcHandle
);
