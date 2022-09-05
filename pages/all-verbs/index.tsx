import { Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { getAllVerbs, Verbs } from "../../api/verbs";
import Table from "../../components/Table";

const AllVerbs: NextPage = () => {
  const [verbs, setVerbs] = useState<Verbs | undefined>();

  useEffect(() => {
    getAllVerbs().then((verbs) => setVerbs(verbs));
  }, []);
  console.log(verbs);
  return (
    <>
      <Grid margin="50px">
        <Typography variant="h4" marginBottom="35px">
          All the most common English irregular verbs
        </Typography>
      </Grid>
      <Grid marginLeft="150px" marginRight="250px">
        {verbs === undefined ? <p>Loading...</p> : <Table verbs={verbs} />}
      </Grid>
    </>
  );
};

export default AllVerbs;
