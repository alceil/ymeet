import React from 'react'
import {
    MdOutlineGetApp,
    MdPerson,
    MdRemoveCircleOutline
} from 'react-icons/md'
import { CSVLink } from "react-csv";
import { MeetParticipants } from '../../../../../core/reducers/meeting';
import { useSocket } from '../../../../../core/hooks/useSocket';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

type Props = {
    isHost?: boolean;
    participants: Record<string, MeetParticipants>;
  };
const Participants:React.FC<Props> = ({ isHost, participants }) => {

    const socket = useSocket();
    const removeParticipant = (UID: string) => {
      console.log(UID);
      socket.emit("forceQuit", UID);
    };
  return (



<div>
{isHost && (
        <CSVLink
          filename="TrioCallsMeeting.csv"
          data={Object.values(participants)}
        >
         <button style={
        {
        display:'flex',
        alignItems:'center',
        margin:'0px auto',
        color:'#4527a0',
        backgroundColor:'#fff',
        border:'none'
        }}>
    <MdOutlineGetApp size={20}/>
        <h4 style={{marginLeft:'10px'}}>Download Attendance</h4>
    </button>
        </CSVLink>
      )}
           <div style={{display:'flex',alignItems:'center'}}>
        <div style={
            {
            display:'flex',
            borderRadius:'50%',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#bdbdbd',
            color:'white',
            height:'40px',
            width:'40px'
            }
            }>
        <MdPerson size={30}/>
        </div>
        <h3 style={{marginLeft:'10px',color:'#0000008A'}}>You</h3>
    </div>
      {[...Object.entries(participants)].map(
        ([UID, { displayName, isAvail }], key) =>
          isAvail ? (

            <div style={{display:'flex',alignItems:'center'}}>
            <div style={
                {
                display:'flex',
                borderRadius:'50%',
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'#bdbdbd',
                color:'white',
                height:'40px',
                width:'40px'
                }
                }>
   {displayName?.[0].toUpperCase()}
            </div>
            <h3 style={{marginLeft:'10px',color:'#0000008A'}}>{displayName}</h3>
            {isHost && UID && (
                <Tooltip title={"Remove " + displayName}>
                  <IconButton
                    aria-label="remove from meeting"
                    onClick={() => removeParticipant?.(UID)}
                  >
                    <MdRemoveCircleOutline fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
        </div>

            // <Box
            //   key={key}
            //   display="flex"
            //   my={1}
            //   alignItems="center"
            //   justifyContent="space-between"
            // >
            //   <Box display="flex" alignItems="center">
            //     <Avatar className={classes.avatar}>
            //       {displayName?.[0].toUpperCase()}
            //     </Avatar>
            //     <Typography variant="subtitle1" color="textSecondary">
            //       <b>{displayName}</b>
            //     </Typography>
            //   </Box>
            //   {isHost && UID && (
            //     <Tooltip title={"Remove " + displayName}>
            //       <IconButton
            //         aria-label="remove from meeting"
            //         onClick={() => removeParticipant?.(UID)}
            //       >
            //         <MdRemoveCircleOutline fontSize="small" />
            //       </IconButton>
            //     </Tooltip>
            //   )}
            // </Box>
          ) : (
            <div key={key} />
          )
      )}
    

  </div>
  )
}

export default Participants