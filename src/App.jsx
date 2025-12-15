import { ColorModeContext, useThemeMod } from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";


function App() {

  const [theme, colorMode] = useThemeMod()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <div className="app">HI</div>
       </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
