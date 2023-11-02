"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brandDark: {
    primary: "#363062",
    secondary: "#4D4C7D",
    accent: "#F99417",
    font: "#F5F5F5",
  },
  brandLight: {
    primary: "#F5F5F5",
    secondary: "#4D4C7D",
    accent: "#F99417",
    font: "#363062",
  },
};

export const theme = extendTheme({ colors });

export function ChakraUiProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
