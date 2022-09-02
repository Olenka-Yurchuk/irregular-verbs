import { Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Card from "../components/Card";
import CardWithInput from "../components/CardWithInput";

const Home: NextPage = () => {
  return (
    <Grid>
      <Grid marginLeft="50px" marginTop="50px">
        <Typography variant="h4">Irregular verb trainer</Typography>
      </Grid>
      <Grid marginLeft="50px" marginTop="35px">
        <Typography variant="h5">
          Learn and exercise the most common English irregular verbs! You
          don&apos;t need to register or fill out any forms, just click on the
          &quot;Exercise&quot; button below and start making progress!
        </Typography>
      </Grid>

      <Grid container columnGap="35px" justifyContent="center" marginTop="45px">
        <Grid xs={2.5}>
          <Card level="Beginner" wordsAmount={20} />
        </Grid>
        <Grid xs={2.5}>
          <Card level="Expert" wordsAmount={50} />
        </Grid>
        <Grid xs={2.5}>
          <CardWithInput/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
