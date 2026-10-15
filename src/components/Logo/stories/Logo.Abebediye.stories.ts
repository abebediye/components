import type { Meta, StoryObj } from "@storybook/react-vite";

import { Logo } from "@/components/Logo";

const meta = {
    title: "Components/Logo/Abebediye",
    component: Logo.Abebediye,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        type: { control: "radio", options: ["lockup", "symbol", "wordmark"] },
        variant: { control: "radio", options: ["primary", "light"] },
    },
} satisfies Meta<typeof Logo.Abebediye>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lockup: Story = {
    args: {
        type: "lockup",
        variant: "primary",
        width: 240,
    },
};

export const Symbol: Story = {
    args: {
        type: "symbol",
        variant: "primary",
        width: 120,
    },
};

export const Wordmark: Story = {
    args: {
        type: "wordmark",
        variant: "primary",
        width: 240,
    },
};
