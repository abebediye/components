import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

import brandImage from "../src/components/Logo/assets/abebediye/wordmark/primary.svg";

const theme = create({
    base: "light",
    brandTitle: "abebediye",
    brandUrl: "https://components.abebediye.no",
    brandImage,
    brandTarget: "_self",
});

addons.setConfig({
    theme,
});
