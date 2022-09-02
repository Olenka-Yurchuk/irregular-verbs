import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography
                margin="20px"
                variant="h3"
                color="inherit"
                component="div"
              >
                Irregular Verb Trainer
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Grid container justifyContent="center" marginTop="100px">
          <Typography color="inherit" sx={{ fontSize: 16 }} component="div">
            Code with ❤️ from 🇺🇦
          </Typography>
        </Grid>
      </footer>
    </>
  );
}

export default MyApp;
