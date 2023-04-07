import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { LockOpenOutlined, LockOutlined } from "@mui/icons-material";
import { useSocket } from "../../../../../core/hooks/useSocket";

const LockMeet: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [locked, setLocked] = React.useState(false);
  const socket = useSocket();

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handlePress = () => {
    socket.emit("lockMeeting", true);
    setLocked(true);
    onClose();
  };

  return (
    <>
      <Tooltip title="Lock Meet">
        <IconButton onClick={onOpen} disabled={locked}>
          {locked ? <LockOutlined color="error" /> : <LockOpenOutlined />}
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={onClose} aria-labelledby="lock meeting">
        <DialogTitle>Do you really want to lock meeting?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New member would not able to join, You can not undo this action
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePress} variant="contained" color="primary">
            Yeah Sure
          </Button>
          <Button onClick={onClose} 
        //   color="default"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default LockMeet;
