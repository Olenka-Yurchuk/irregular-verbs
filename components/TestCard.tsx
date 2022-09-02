import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, Paper } from "@mui/material";

const TestCard = () => {
  return (
    <Card elevation={3} sx={{ width: 275 }}>
      <CardContent>
        <Paper elevation={0}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Junior
          </Typography>
        </Paper>
        <Typography variant="h5" component="div">
          20 verbs
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          20 most common English irregular verbs
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default TestCard;
