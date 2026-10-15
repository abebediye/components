import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

const theme = create({
    base: "dark",
    colorPrimary: "#14243A",
    appBg: "#14243A",
    appContentBg: "#14243A",
    barBg: "#14243A",
    brandTitle: "abebediye",
    brandUrl: "https://components.abebediye.no",
    brandImage: "/logo/assets/abebediye/lockup/light.svg",
    brandTarget: "_self",
});

addons.setConfig({
    theme,
});
