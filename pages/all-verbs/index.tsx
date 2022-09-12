import { Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { getAllVerbs, Verbs } from "../../api/verbs";
import Table from "../../components/Table";
import { useAppSelector } from "../../redux/hooks";
import verbs, { selectVerbsData } from "../../redux/verbs";

const AllVerbs: NextPage = () => {
  const verbsData = useAppSelector(selectVerbsData);

  return (
    <>
      <Grid margin="50px">
        <Typography variant="h4" marginBottom="35px">
          All the most common English irregular verbs
        </Typography>
      </Grid>
      <Grid marginLeft="150px" marginRight="250px">
        {verbs === undefined ? <p>Loading...</p> : <Table verbs={verbsData} />}
      </Grid>
    </>
  );
};

export default AllVerbs;
