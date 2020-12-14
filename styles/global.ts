import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

type GlobalStyleProps = {
  theme: ThemeType;
};

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background-color: ${(props) => props.theme.colors.background};
    padding: 0 1rem;
  }
  p {
    color: ${(props) => props.theme.colors.reading};
    font-size: ${(props) => props.theme.font.sizes.medium};
  }
  a {
    color: ${(props) => props.theme.colors.link};
    font-size: ${(props) => props.theme.font.sizes.medium};
  }
  
  li {
    list-style-type: none;
    font-size: ${(props) => props.theme.font.sizes.medium};
  }
`;
