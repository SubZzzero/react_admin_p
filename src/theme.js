import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//color theme tokens

export const themeTokens = (modeTheme) => ({
  ...(modeTheme === "dark"
    ? {
      // GitHub Dark
      grey: {
        100: "#f0f6fc",
        200: "#c9d1d9",
        300: "#8b949e",
        400: "#6e7681",
        500: "#484f58",
        600: "#30363d",
        700: "#21262d",
        800: "#161b22",
        900: "#0d1117",
      },
      primary: {
        100: "#f0f6fc",
        200: "#c9d1d9",
        300: "#8b949e",
        400: "#30363d",
        500: "#0d1117", // background
        600: "#010409",
        700: "#010409",
        800: "#010409",
        900: "#010409",
      },
      blueAccent: {
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#58a6ff", // GitHub blue
        600: "#388bfd",
        700: "#1f6feb",
        800: "#1158c7",
        900: "#0b3c91",
      },
      greenAccent: {
        100: "#dcffe4",
        200: "#bef5cb",
        300: "#7ee787",
        400: "#56d364",
        500: "#3fb950", // success
        600: "#2ea043",
        700: "#238636",
        800: "#196c2e",
        900: "#0f4b22",
      },
      redAccent: {
        100: "#ffebe9",
        200: "#ffdcd7",
        300: "#ffb8b0",
        400: "#ff938a",
        500: "#f85149", // danger
        600: "#da3633",
        700: "#b62324",
        800: "#8e1519",
        900: "#67060c",
      },
    }
    : {
      // GitHub Light
      grey: {
        100: "#24292f",
        200: "#57606a",
        300: "#6e7781",
        400: "#8c959f",
        500: "#afb8c1",
        600: "#d0d7de",
        700: "#eaeef2",
        800: "#f6f8fa",
        900: "#ffffff",
      },
      primary: {
        100: "#24292f",
        200: "#57606a",
        300: "#6e7781",
        400: "#d0d7de",
        500: "#ffffff", // background
        600: "#f6f8fa",
        700: "#eaeef2",
        800: "#d0d7de",
        900: "#afb8c1",
      },
      blueAccent: {
        100: "#ddf4ff",
        200: "#b6e3ff",
        300: "#80ccff",
        400: "#54aeff",
        500: "#0969da", // GitHub blue
        600: "#0550ae",
        700: "#033d8b",
        800: "#0a3069",
        900: "#002155",
      },
      greenAccent: {
        100: "#dafbe1",
        200: "#aceebb",
        300: "#6fdd8b",
        400: "#4ac26b",
        500: "#1a7f37",
        600: "#116329",
        700: "#044f1e",
        800: "#003d16",
        900: "#002d11",
      },
      redAccent: {
        100: "#ffebe9",
        200: "#ffdcd7",
        300: "#ffc1ba",
        400: "#ff9b8a",
        500: "#cf222e",
        600: "#a40e26",
        700: "#82071e",
        800: "#660018",
        900: "#4c0014",
      },
    }),
});


// MUI THEME SETTINGS


export const muiThemeSetting = (modeTheme) => {
  const themeColors = themeTokens(modeTheme);

  return {
    palette: {
      mode: modeTheme,
      ...(modeTheme === "dark"
        ? {
          primary: {
            main: themeColors.primary[500],
          },
          secondary: {
            main: themeColors.greenAccent[500],
          },
          neutral: {
            dark: themeColors.grey[700],
            main: themeColors.grey[500],
            light: themeColors.grey[100],
          },
          background: {
            default: themeColors.primary[500],
          },
        }
        : {
          primary: {
            main: themeColors.primary[100],
          },
          secondary: {
            main: themeColors.greenAccent[500],
          },
          neutral: {
            dark: themeColors.grey[700],
            main: themeColors.grey[500],
            light: themeColors.grey[100],
          },
          background: {
            default: "#F5FFFA",
          },
        }),
    },

    typography: {
      fontFamily: ["Source Code Pro", "monospace"].join(","),
      fontSize: 12,
      h1: { fontSize: 40 },
      h2: { fontSize: 32 },
      h3: { fontSize: 24 },
      h4: { fontSize: 20 },
      h5: { fontSize: 16 },
      h6: { fontSize: 14 },
    },
  };
};

//EXPORT COLOR CONTEXT

export const ColorModeContext = createContext({
  toggleColorTheme: () => {
  }
});

export const useThemeMod = () => {
  const [colorThemeMod, setColorThemeMod] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorTheme: () =>
        setColorThemeMod((prev) => (prev === "light" ? "dark" : "light"))
    }), []
  );

  const theme = useMemo(() => createTheme(muiThemeSetting(colorThemeMod)), [colorThemeMod]);

  return [theme, colorMode]
}

