import type { Handle } from "@sveltejs/kit";
import { appRouter as trpcRouter } from "$trpc";
import { createContext } from "$trpc/router";
import { createTRPCHandle } from "trpc-sveltekit";

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

export const handle = trpcHandle;
