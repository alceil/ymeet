import React from 'react'
import {MdAdd} from 'react-icons/md'
import PollModal from "./Poll/Modal";
import AddIcon from "@mui/icons-material/Add";
import { PollType } from './Poll/PollType';
import PollAlert from "./Poll/Form";
import { useSocket } from '../../../../../core/hooks/useSocket';
import { useSnackbar } from 'notistack';
import { useAppSelector } from '../../../../../core/hooks/redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  isHost?: boolean;
};



const Polls: React.FC<Props> = ({ isHost }) => {
console.log(isHost)
  const socketClient = useSocket();
  const { enqueueSnackbar } = useSnackbar();
  const [openModal, setOpenModal] = React.useState(false);
  const poll = useAppSelector((state) => state.meetReducer.poll);
  const handlePress = () => {
    setOpenModal(true);
  };

  const createPoll = React.useCallback((pollData: PollType) => {
    socketClient.emit("newPoll", pollData);
    enqueueSnackbar("Poll Published");
  }, []);
  return (
    <>
    {/* <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>
    <img
              width={"90"}
              alt="Poll Icon"
              src="https://avatars.slack-edge.com/2020-05-09/1112549471909_7543dde099089941d3c3_512.png"
            />
            <button style={
              { 
                display:'flex',
                alignItems:'center',
                backgroundColor:'#ffff',
                border:'none',
                color:'#4527a0',
                marginTop:'20px'
              }
              }>
            <MdAdd size={20}/>
              <span style={{marginLeft:'10px'}}>
              Create a poll
              </span>
            </button>
    </div> */}



    <PollModal
        pollHandler={createPoll}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
      {!poll.question ? (
        <Box py={3} display="flex" justifyContent="center">
          <img
            width={"90"}
            alt="Poll Icon"
            src="https://avatars.slack-edge.com/2020-05-09/1112549471909_7543dde099089941d3c3_512.png"
          />
        </Box>
      ) : (
        <PollAlert {...poll} />
      )}
      {isHost ? (
        <Button
          fullWidth
          startIcon={<AddIcon />}
          variant="text"
          color="secondary"
          onClick={handlePress}
        >
          Create a poll
        </Button>
      ) : (
        !poll.question && (
          <Typography variant="h5" align="center" color="textSecondary">
            Polls will appear here
          </Typography>
        )
      )}
    </>

  )
}

export default Polls