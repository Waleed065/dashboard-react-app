import React from "react";
import { CssBaseline } from "@material-ui/core";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
  Theme,
} from "@material-ui/core/styles";
import GlobalStyles from "./GlobalStyles";
import palette from "./palette";
import shape from "./shape";
import typography from "./typography";
import shadows, { customShadows } from "./shadows";

import themeOverrides from "./themeOverrides";

const themeOptions = {
  palette,
  shadows,
  customShadows,
  shape,
  typography,
};

interface schema {
  children: JSX.Element | JSX.Element[];
}
export default function ThemeConfig({ children }: schema) {
  const theme: Theme = createTheme(themeOptions);
  theme.components = themeOverrides(theme);

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
