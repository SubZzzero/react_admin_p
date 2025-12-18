import { ColorModeContext, useThemeMod } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { replace, Route, Routes, useNavigate } from "react-router-dom"
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar'
import Dashboard from "./scenes/dashboard";

import Team from "./scenes/team";
import Contacts from "./scenes/contacts"
import { createContext, useEffect, useState } from "react";
// import Invoices from "./scenes/invoices";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";


function App() {
  const [theme, colorMode] = useThemeMod()
  const [isCollapsed, setIsCollapsed] = useState(false);
  // useEffect(() => {
  //   navigate("/", replace(true))
  // }, [])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* RESET CSS */}
        <CssBaseline />
        <div className="app">
          {/* SIDEBAR */}
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <main className="content">
            {/* TOP BAR */}
            <Topbar />
            <Routes>
              {/* DASHBOARD */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team isCollapsed={isCollapsed} />} />
              <Route path="/contacts" element={<Contacts />} />
              {/* <Route path="/invoices" element={<Invoices />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/form" element={<Form />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>

          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
