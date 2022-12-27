import { t } from "./router";
import user from "./routes/user";

export const appRouter = t.router({ user });

export type AppRouter = typeof appRouter;
