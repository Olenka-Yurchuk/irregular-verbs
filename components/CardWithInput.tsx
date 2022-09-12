import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card as MCard, Grid, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import Link from "next/link";

const CardWithInput = () => {
  const [amountWords, setAmountWords] = useState<string | number>("");
  const [error, isError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountWords(event.target.value);
  };

  const handleClicked = (event: React.MouseEvent<HTMLElement>) => {
    if (amountWords === "" || amountWords === "0" || amountWords === null) {
      event.preventDefault();
      isError(true);
    } else {
      isError(false);
    }
  };
  console.log(error);
  return (
    <MCard elevation={3}>
      <CardContent>
        <Grid>
          <Typography
            sx={{ mb: 1.5, fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Custom Trainer 🤓
          </Typography>
        </Grid>

        <Grid>
          <Typography sx={{ mb: 1, fontSize: 17 }} color="text.primary">
            Enter your amount of verbs
          </Typography>

          <TextField
            error={error}
            type="number"
            size="small"
            margin="dense"
            id="outlined-basic"
            variant="outlined"
            label={error ? "Please enter a number" : ""}
            value={amountWords}
            onChange={handleChange}
          />
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center" padding="20px">
          <Link href={`/trainer/${amountWords}`}>
            <a>
              <Button onClick={handleClicked} variant="contained">
                Exercise
              </Button>
            </a>
          </Link>
        </Grid>
      </CardActions>
    </MCard>
  );
};

export default CardWithInput;
