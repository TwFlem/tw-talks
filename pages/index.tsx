import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/global";
import { Home } from "./Home";
import { ViewportProvider } from "../context/ViewportProvider";

export default function IndexPage(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ViewportProvider>
        <Home />
      </ViewportProvider>
    </ThemeProvider>
  );
}
