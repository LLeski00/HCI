import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env" });

export default defineConfig({
        schema: "src/db/schemas/*.ts",
        out: "src/db/migrations",
        dialect: "postgresql",
        dbCredentials: {
                url: process.env.DATABASE_URL!,
        },
});
