import { publicProcedure, router } from "$trpc/router";
// import { z } from "zod";

export default router({
  get: publicProcedure.query(() => {
    return "hello World";
  }),
});
