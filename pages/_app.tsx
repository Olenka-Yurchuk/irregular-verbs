import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h5" color="inherit" component="div">
                Irregular Verbs Trainer
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        {" "}
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="caption" color="inherit" component="div">
                Code with ❤️ from 🇺🇦
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </footer>
    </>
  );
}

export default MyApp;
