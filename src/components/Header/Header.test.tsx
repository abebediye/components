import { Header } from "@/components/Header";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

describe("Header", () => {
    it("renders login and sign up buttons when logged out", () => {
        render(<Header />);
        expect(
            screen.getByRole("button", { name: "Log in" }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Sign up" }),
        ).toBeInTheDocument();
    });

    it("calls onLogin when the login button is clicked", async () => {
        const onLogin = vi.fn();
        render(<Header onLogin={onLogin} />);
        await userEvent.click(screen.getByRole("button", { name: "Log in" }));
        expect(onLogin).toHaveBeenCalledOnce();
    });

    it("calls onCreateAccount when the sign up button is clicked", async () => {
        const onCreateAccount = vi.fn();
        render(<Header onCreateAccount={onCreateAccount} />);
        await userEvent.click(screen.getByRole("button", { name: "Sign up" }));
        expect(onCreateAccount).toHaveBeenCalledOnce();
    });

    it("renders a welcome message and logout button when logged in", () => {
        render(<Header user={{ name: "Jane Doe" }} />);
        expect(screen.getByText("Jane Doe")).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Log out" }),
        ).toBeInTheDocument();
    });

    it("calls onLogout when the logout button is clicked", async () => {
        const onLogout = vi.fn();
        render(<Header user={{ name: "Jane Doe" }} onLogout={onLogout} />);
        await userEvent.click(screen.getByRole("button", { name: "Log out" }));
        expect(onLogout).toHaveBeenCalledOnce();
    });
});
