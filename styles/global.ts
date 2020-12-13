import { createGlobalStyle, DefaultTheme } from "styled-components";
import { ThemeType } from "./theme";

type GlobalStyleProps = {
  theme: ThemeType;
};

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background-color: ${(props) => props.theme.colors.background};
  }
  p {
    color: ${(props) => props.theme.colors.reading};
  }
  a {
    color: ${(props) => props.theme.colors.link};
  }
`;
