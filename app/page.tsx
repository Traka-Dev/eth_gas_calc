"use client";
import { Box, ChakraProvider, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <Box py={10}>
        <Heading textAlign="center">GAS TRACKER :D</Heading>
      </Box>
    </ChakraProvider>
  );
}
