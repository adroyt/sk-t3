import { router } from "./router";
import user from "./routes/user";

export const appRouter = router({ user });

export type AppRouter = typeof appRouter;
