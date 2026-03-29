"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#A16745",
      light: "#C4896A",
      dark: "#693519",
      contrastText: "#F5EDE6",
    },
    secondary: {
      main: "#693519",
      light: "#A16745",
      dark: "#492A17",
      contrastText: "#F5EDE6",
    },
    background: {
      default: "#0D0D0D",
      paper: "#1A1209",
    },
    text: {
      primary: "#F5EDE6",
      secondary: "#C4896A",
    },
    divider: "#492A17",
  },
  typography: {
    fontFamily: "var(--font-geist-sans), sans-serif",
    h1: {
      fontWeight: 700,
      color: "#F5EDE6",
    },
    h2: {
      fontWeight: 600,
      color: "#F5EDE6",
    },
    h6: {
      fontWeight: 600,
      color: "#F5EDE6",
    },
    subtitle1: {
      color: "#C4896A",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0D0D0D",
          borderBottom: "1px solid #492A17",
          boxShadow: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "64px",
        },
      },
    },
  },
});

export default theme;
