import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
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
                sx={{ flexGrow: 1 }}
              >
                <Link href={"/"}>Irregular Verb Trainer</Link>
              </Typography>

              <Button
                variant="outlined"
                color="inherit"
                onClick={() => {
                  router.push("/all-verbs");
                }}
              >
                All verbs
              </Button>
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
