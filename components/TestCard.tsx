import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, Grid, Paper } from "@mui/material";

const TestCard = () => {
  return (
    <Card elevation={3}>
      <CardContent>
        <Grid>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Junior
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h5" component="div">
            20 verbs
          </Typography>
        </Grid>
        <Grid>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            20 most common English irregular verbs
          </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center" padding="20px">
          <Button variant="contained">Exercise</Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default TestCard;
