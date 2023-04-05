import React from "react";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { PollType } from "./PollType";
import { AfterPoll } from "./AfterPoll";

const PollForm: React.FC<PollType> = ({ question, options, correct }) => {
  const [response, setResponse] = React.useState("");
  const [submit, setSubmit] = React.useState(false);

  if (submit) {
    return <AfterPoll {...{ question, options, correct, myRes: response }} />;
  }
  return (
    <Box>
      <Typography variant="subtitle1" color="textPrimary">
        {question}
      </Typography>
      <FormControl component="fieldset" fullWidth>
        <RadioGroup
          aria-label="options"
          value={response}
          onChange={(event, val) => setResponse(val)}
        >
          {options.map((opt) => (
            <FormControlLabel
              key={opt}
              value={opt}
              label={opt}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Box display="flex" justifyContent="flex-end">
        <Button
          onClick={() => setSubmit(true)}
          size="small"
          variant="contained"
          color="primary"
        >
          Vote
        </Button>
      </Box>
    </Box>
  );
};

export default PollForm;
