import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { LandingPage } from "./mainfolder/LandingPage/landingPage";
import "./App.css";

function App() {
  const [mode, setMode] = React.useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        // main: "#000000",
        main: "#B00539",
        // main: "#fd7d2d",
        // main: "#212f3c",
        mode: "#B00539",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"}>
        <LandingPage setMode={setMode} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
