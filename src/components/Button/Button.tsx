import { Button as ChakraButton } from "@chakra-ui/react";

const sizeMap = { small: "sm", medium: "md", large: "lg" } as const;

export interface ButtonProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: "small" | "medium" | "large";
    /** Button contents */
    label: string;
    /** Optional click handler */
    onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
    primary = false,
    size = "medium",
    backgroundColor,
    label,
    ...props
}: ButtonProps) => (
    <ChakraButton
        variant={primary ? "solid" : "outline"}
        colorPalette="blue"
        size={sizeMap[size]}
        rounded="full"
        style={backgroundColor ? { backgroundColor } : undefined}
        {...props}
    >
        {label}
    </ChakraButton>
);
