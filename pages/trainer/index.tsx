import { Button, TextField } from "@mui/material";
import { useMemo, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectRandomVerbs } from "../../redux/verbs";
import userActivities, {
  selectNumberOfVerbs,
} from "../../redux/userActivities";

const Trainer = () => {
  const verbs = useAppSelector(selectRandomVerbs);
  const amount = useAppSelector(selectNumberOfVerbs);

  const [inputVerb, setInputVerb] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVerb(e.target.value);
  };
  const isPast = useMemo(() => {
    return Math.random() > 0.5;
  }, []);

  console.log(inputVerb);
  return (
    <>
      <h3>Trainer: {amount} verbs </h3>
      <p>
        What is the {isPast ? "simple past" : "past participle"} of to{" "}
        {verbs[0]?.[0]}?
      </p>
      <TextField onChange={handleInputChange} />
      <Button>Skip</Button>
      <Button>Check</Button>
    </>
  );
};

export default Trainer;
