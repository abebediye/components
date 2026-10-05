import type { Meta, StoryObj } from "@storybook/react-vite";

import { Logo } from "@/components/Logo";

const meta = {
    title: "Components/Logo/Naf",
    component: Logo.Naf,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        // Only symbol/primary exists in assets/naf today.
        type: { control: "radio", options: ["symbol"] },
        variant: { control: "radio", options: ["primary"] },
    },
} satisfies Meta<typeof Logo.Naf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Symbol: Story = {
    args: {
        type: "symbol",
        variant: "primary",
        width: 120,
    },
};
