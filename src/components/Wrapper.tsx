import { Box } from "@chakra-ui/react";
import React from "react";

interface wrapperProps {
  variant?: "small" | "regualr";
}

export const Wrapper: React.FC<wrapperProps> = ({ children, variant }) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "regualr" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};
