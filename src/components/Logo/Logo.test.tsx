import { Logo } from "@/components/Logo";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Logo", () => {
    it("renders the symbol variant by default", async () => {
        render(<Logo brand="webstep" />);
        expect(
            await screen.findByAltText("webstep symbol"),
        ).toBeInTheDocument();
    });

    it("renders the logotype when type is set", async () => {
        render(<Logo brand="webstep" type="full" />);
        expect(await screen.findByAltText("webstep full")).toBeInTheDocument();
    });

    it("applies width and height to the container", async () => {
        render(<Logo brand="webstep" width={100} height={50} />);
        const img = await screen.findByAltText("webstep symbol");
        expect(img.parentElement).toHaveStyle({
            width: "100px",
            height: "50px",
        });
    });

    it("applies an explicit padding prop to the container", async () => {
        render(<Logo brand="webstep" padding={10} />);
        const img = await screen.findByAltText("webstep symbol");
        expect(img.parentElement).toHaveStyle({ padding: "10px" });
    });

    it("resolves a non-default variant", async () => {
        render(<Logo brand="webstep" variant="primary" />);
        const primarySrc = (
            await screen.findByAltText("webstep symbol")
        ).getAttribute("src");
        cleanup();

        render(<Logo brand="webstep" variant="secondary" />);
        const secondarySrc = (
            await screen.findByAltText("webstep symbol")
        ).getAttribute("src");

        expect(secondarySrc).not.toBe(primarySrc);
    });

    it("renders via the terse per-brand component", async () => {
        render(<Logo.Webstep type="full" variant="tertiary" />);
        expect(await screen.findByAltText("webstep full")).toBeInTheDocument();
    });
});
