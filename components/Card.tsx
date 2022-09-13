import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card as MCard, Grid } from "@mui/material";
import Link from "next/link";
import { useAppDispatch } from "../redux/hooks";
import { setNumberOfVerbs } from "../redux/userActivities";

const Card = ({
  level,
  wordsAmount,
}: {
  level: string;
  wordsAmount: number;
}) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setNumberOfVerbs(wordsAmount));
  };
  return (
    <MCard elevation={3}>
      <CardContent>
        <Grid>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {level}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h5" component="div">
            {wordsAmount} verbs
          </Typography>
        </Grid>
        <Grid>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {wordsAmount} most common English irregular verbs
          </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center" padding="20px">
          <Link href={`/trainer/`}>
            <a>
              <Button onClick={handleClick} variant="contained">
                Exercise
              </Button>
            </a>
          </Link>
        </Grid>
      </CardActions>
    </MCard>
  );
};

export default Card;
