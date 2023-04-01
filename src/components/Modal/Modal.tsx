import React, { useState } from 'react'
import './Modal.css'
import { MuiChipsInput } from 'mui-chips-input'
import { useAppSelector } from '../../core/hooks/redux'
import { useLocalStorage } from '../../core/hooks/common'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { newMeet } from '../../utils/meeting.fetch'

type ModalProps = {
    isOpen:boolean,
    onClose:()=> unknown,
}
type MeetType = "public" | "private";


const Modal:React.FC<ModalProps> = ({isOpen,onClose}) => {
  const [meetingName, setMeetingName] = React.useState({ text: "", error: "" });
  const [meetingType, setMeetingType] = React.useState<MeetType>("public");
  const [meetingTime, setMeetingTime] = React.useState({ text: "", error: "" });
  const [meetingInvitees, setMeetingInvitees] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { UID } = useAppSelector(({ authReducer }) => authReducer);
  const [recentCalls, setRecentCalls] = useLocalStorage(
    "recentCalls",
    [] as string[]
  );

  const handleSubmit = async () => {
    setLoading(true);
    await newMeet({
      title: meetingName.text,
      type: meetingType,
      hostID: UID,
      invitees: meetingInvitees,
      time: meetingTime.text || new Date().getTime().toString(),
    })
      .then(({ meetID }) => {
        enqueueSnackbar("New meet created", {
          variant: "success",
        });
        meetID && setRecentCalls([meetID, ...recentCalls.slice(0, 3)]);
        navigate(`/${meetID}`);
      })
      .catch((error) => {
        enqueueSnackbar(error || "Something went wrong", {
          variant: "error",
        });
        setLoading(false);
      });
  };
  return (
   isOpen?( <>
   <div>
    <div className='modal-bg' onClick={onClose}></div>
        <div className='modal'>
      <div className='modal-body'>
      <div className='dialogueContainter'>
    <h3 style={{color:'#000000DE',position:'relative',right:'7rem'}}>Create New meeting </h3>
    <input 
      className='meetInput' 
      name="text" 
      placeholder="Meeting Name" 
      type="text"
      value={meetingName.text}
      onChange={(event) =>
        setMeetingName({ text: event.target.value, error: "" })
      }
      />
        <input 
        className='meetInput' 
        name="text" 
        type="datetime-local" 
        onChange={(event) => {
          setMeetingTime({
            text: Date.parse(event.target.value).toString(),
            error: "",
          });
        }}
        />
 <MuiChipsInput 
 fullWidth
 value={meetingInvitees} 
 onChange={setMeetingInvitees}
 label="Invite users by email"
 placeholder="Type and press enter to add emails"
 />

      
<label style={{position:'relative',right:'8.6rem',marginTop:'5px'}}>
            <input
             checked={meetingType==="public"}
              type="radio"
              value="public"
              onChange={(e) => {
                setMeetingType(e.target.value as MeetType);
                  }}
            />
            Anyone can join
          </label>
          <label style={{position:'relative',right:'6.7rem',marginTop:'5px'}}>
            <input
              checked={meetingType==="private"}
              type="radio"
              value="private"
              onChange={(e) => {
                setMeetingType(e.target.value as MeetType);
                  }}
            />
    Restricted to invited users
          </label >
      <button 
        disabled={loading}
      className='click'
      onClick={handleSubmit}
      >Start New Meeting</button>
    </div>
      </div>
    </div>
    </div>
        </>):(<></>)
  )
}

export default Modal