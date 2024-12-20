import { defineConfig } from "auth-astro";
import Google from "@auth/core/providers/google";
import GitHub from "@auth/core/providers/github";

export default defineConfig({
    providers: [
        Google({
            clientId: import.meta.env.GOOGLE_CLIENT_ID,
            clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHub({
            clientId: import.meta.env.GIT_CLIEN_ID,
            clientSecret: import.meta.env.GIT_CLIENT_SECRET,
        }),
    ],
});