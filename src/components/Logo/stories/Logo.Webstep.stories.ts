import type { Meta, StoryObj } from "@storybook/react-vite";

import { Logo } from "@/components/Logo";

const meta = {
    title: "Components/Logo/Webstep",
    component: Logo.Webstep,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        type: { control: "radio", options: ["full", "symbol"] },
        variant: {
            control: "radio",
            options: ["primary", "secondary", "tertiary"],
        },
    },
} satisfies Meta<typeof Logo.Webstep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Symbol: Story = {
    args: {
        type: "symbol",
        variant: "primary",
        width: 120,
    },
};

export const Logotype: Story = {
    args: {
        type: "full",
        variant: "primary",
        width: 240,
    },
};
