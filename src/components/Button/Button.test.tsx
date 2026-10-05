import { Button } from "@/components/Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

describe("Button", () => {
    it("renders the label", () => {
        render(<Button label='Click me' />);
        expect(
            screen.getByRole("button", { name: "Click me" }),
        ).toBeInTheDocument();
    });

    it("calls onClick when clicked", async () => {
        const onClick = vi.fn();
        render(<Button label='Click me' onClick={onClick} />);
        await userEvent.click(screen.getByRole("button", { name: "Click me" }));
        expect(onClick).toHaveBeenCalledOnce();
    });
});
