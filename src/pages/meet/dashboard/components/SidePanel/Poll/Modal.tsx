import React from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import { PollType } from "./PollType";

type PollCreatorProps = {
  open?: boolean;
  onClose?: () => unknown;
  pollHandler: (pollData: PollType) => unknown;
};

const PollCreator: React.FC<PollCreatorProps> = ({
  onClose = () => "",
  open = false,
  pollHandler,
}) => {
  const [question, setQuestion] = React.useState("");
  const [options, setOptions] = React.useState(["", ""] as string[]);
  const [correct, setCorrect] = React.useState("");

  const handleClick = () => {
    pollHandler({
      question,
      options,
      correct,
    });
    setQuestion("");
    setOptions(["", ""]);
    onClose();
  };

  return (
    <Dialog open={open} aria-labelledby="poll modal" onClose={onClose}>
      <DialogTitle>New Poll</DialogTitle>
      <DialogContent>
        <TextField
          label="Question"
          variant="filled"
          size="small"
          fullWidth
          rows={3}
          multiline
          // rowsMax={3}
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        />
        {options.map((value, index) => {
          return (
            <Grid container key={index} alignItems="center">
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder={"Option " + (index + 1)}
                  margin="normal"
                  variant="outlined"
                  value={value}
                  onChange={(event) => {
                    const opts = options;
                    opts[index] = event.target.value;
                    setOptions([...opts]);
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Radio
                          checked={Boolean(value && value === correct)}
                          onChange={(event) => setCorrect(event.target.value)}
                          value={value}
                          inputProps={{ "aria-label": value }}
                        />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="delete option"
                          onClick={() => {
                            const opts = options;
                            opts.splice(index, 1);
                            setOptions([...opts]);
                          }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          );
        })}

        <Button
          fullWidth
          startIcon={<AddCircleOutlineOutlinedIcon />}
          variant="text"
          // color="default"
          onClick={() => {
            setOptions([...options, ""]);
          }}
        >
          Add option
        </Button>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClick}
          size="small"
          disabled={!options.length || !question}
          variant="contained"
          color="primary"
        >
          Create
        </Button>
        <Button onClick={onClose} 
        // color="default"
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default PollCreator;
