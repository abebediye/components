import React from "react";

import { Header } from "@/components/Header";
import { Box, Heading, HStack, Link, List, Text } from "@chakra-ui/react";

type User = {
    name: string;
};

export const Page: React.FC = () => {
    const [user, setUser] = React.useState<User>();

    return (
        <Box as="article">
            <Header
                user={user}
                onLogin={() => setUser({ name: "Jane Doe" })}
                onLogout={() => setUser(undefined)}
                onCreateAccount={() => setUser({ name: "Jane Doe" })}
            />

            <Box as="section" maxW="48rem" mx="auto" px={6} py={10}>
                <Heading size="lg" mb={4}>
                    Pages in Storybook
                </Heading>
                <Text mb={4}>
                    We recommend building UIs with a{" "}
                    <Link
                        href="https://componentdriven.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>component-driven</strong>
                    </Link>{" "}
                    process starting with atomic components and ending with
                    pages.
                </Text>
                <Text mb={4}>
                    Render pages with mock data. This makes it easy to build and
                    review page states without needing to navigate to them in
                    your app. Here are some handy patterns for managing page
                    data in Storybook:
                </Text>
                <List.Root mb={4}>
                    <List.Item>
                        Use a higher-level connected component. Storybook helps
                        you compose such data from the "args" of child component
                        stories
                    </List.Item>
                    <List.Item>
                        Assemble data in the page component from your services.
                        You can mock these services out using Storybook.
                    </List.Item>
                </List.Root>
                <Text mb={4}>
                    Get a guided tutorial on component-driven development at{" "}
                    <Link
                        href="https://storybook.js.org/tutorials/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Storybook tutorials
                    </Link>
                    . Read more in the{" "}
                    <Link
                        href="https://storybook.js.org/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        docs
                    </Link>
                    .
                </Text>
                <HStack gap={2} bg="bg.muted" p={3} rounded="md">
                    <Text as="span" fontWeight="bold">
                        Tip
                    </Text>
                    <Text as="span">
                        Adjust the width of the canvas with the{" "}
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g fill="none" fillRule="evenodd">
                                <path
                                    d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                                    id="a"
                                    fill="#999"
                                />
                            </g>
                        </svg>
                        Viewports addon in the toolbar
                    </Text>
                </HStack>
            </Box>
        </Box>
    );
};
