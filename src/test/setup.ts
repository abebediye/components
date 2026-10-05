import "@testing-library/jest-dom/vitest";
import { cleanup, configure } from "@testing-library/react";
import { afterEach } from "vitest";

// CI runners can be slow on the first (cold) dynamic import of a lazy-loaded
// asset chunk (see Logo.tsx), which can exceed the default 1000ms findBy* timeout.
configure({ asyncUtilTimeout: 5000 });

afterEach(() => {
    cleanup();
});
