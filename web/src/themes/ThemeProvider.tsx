import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createGlobalStyle } from "../styled-components";

const Theme = createMuiTheme({
  mixins: {
    toolbar: {} /* Setting with styled-components instead */
  },
  palette: {
    primary: {
      main: "#2196f3"
    }
  },
  typography: {
    useNextVariants: true
  }
});

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.typography.fontFamily};
  }
`;

type Props = {
  children?: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => (
  <StyledThemeProvider theme={Theme}>
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <GlobalStyle />
      {children}
    </MuiThemeProvider>
  </StyledThemeProvider>
);

export default ThemeProvider;
