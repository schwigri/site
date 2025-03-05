import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

const config = defineConfig({
    adapter: node({ mode: "standalone" }),
    i18n: {
        defaultLocale: "en",
        locales: ["de", "en", "ja"],
    },
    vite: {
        plugins: [tailwindcss()],
    },
    output: "server",
});

export default config;
