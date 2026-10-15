import { render as rtlRender } from "@testing-library/react";
import type { ReactElement } from "react";

import { Provider } from "@/components/Provider";

// Wraps components under test with the Chakra Provider all consumers render within.
export const render = (ui: ReactElement) =>
    rtlRender(ui, { wrapper: Provider });

// oxlint-disable-next-line react/only-export-components -- re-exports RTL's test utilities, not components
export * from "@testing-library/react";
