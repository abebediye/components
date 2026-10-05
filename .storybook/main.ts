import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@chromatic-com/storybook",
        "@storybook/addon-vitest",
        "@storybook/addon-a11y",
        "@storybook/addon-docs",
        "@storybook/addon-mcp",
    ],
    framework: "@storybook/react-vite",
    async viteFinal(viteConfig) {
        viteConfig.resolve ??= {};
        const srcPath = path.join(import.meta.dirname, "..", "src");
        // resolve.alias can be an array (Alias[]) or an object; handle both
        // so we don't clobber whatever Storybook's base config already set.
        if (Array.isArray(viteConfig.resolve.alias)) {
            viteConfig.resolve.alias.push({ find: "@", replacement: srcPath });
        } else {
            viteConfig.resolve.alias = {
                ...viteConfig.resolve.alias,
                "@": srcPath,
            };
        }
        return viteConfig;
    },
};
export default config;
