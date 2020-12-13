import { DefaultTheme } from "styled-components";

const colors = {
  cta: "#DE49F7",
  link: "#9BC5F8",
  background: "#242424",
  backgroundLight: "#2A2A2A",
  reading: "#EEEEEE",
  primary: "#7D3AF5",
  secondary: "#EC4476",
  accent: "#FAD34C",
  secondaryAccent: "#F4923F",
};

export const theme = {
  colors,
};
export type ThemeType = typeof theme;
