import { Typography } from "@mui/material";
import type { NextPage } from "next";
import TestCard from "../components/TestCard";

const Home: NextPage = () => {
  return (
    <div>
      <Typography variant="h4">Irregular verb trainer</Typography>
      <Typography variant="h5">
        Learn and exercise the most common English irregular verbs! You don't
        need to register or fill out any forms, just click on the "exercise"
        button below and start making progress!
      </Typography>
      <TestCard />
    </div>
  );
};

export default Home;
