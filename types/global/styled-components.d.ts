import { CSSObject, CSSProp } from "styled-components";
import { ThemeType } from "../../styles/theme";

declare module "styled-components" {
  type DefaultTheme = ThemeType;
}

declare module "react" {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
