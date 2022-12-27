import { t } from "$trpc/router";
// import { z } from "zod";

export default t.router({
  get: t.procedure.query(() => {
    return "hello World";
  }),
});
