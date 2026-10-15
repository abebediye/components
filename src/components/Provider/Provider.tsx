import { ChakraProvider } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

import { system } from "@/theme/system";

export const Provider = ({ children }: PropsWithChildren) => (
    <ChakraProvider value={system}>{children}</ChakraProvider>
);
