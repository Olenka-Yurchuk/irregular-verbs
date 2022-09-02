import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card as MCard, Grid } from "@mui/material";

const CardWithInput = () => {
  return (
    <MCard elevation={3}>
      <CardContent>
        <Grid>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Custom Trainer
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h5" component="div">
            verbs
          </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center" padding="20px">
          <Button variant="contained">Exercise</Button>
        </Grid>
      </CardActions>
    </MCard>
  );
};

export default CardWithInput;
