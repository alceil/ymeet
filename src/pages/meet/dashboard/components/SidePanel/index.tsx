import style from '../styles/SidePanel.module.css'
import React,{useState} from 'react'
import { MdClose} from 'react-icons/md'

import {
    MdInfoOutline,
    MdOutlinePeopleOutline,
    MdOutlineAssessment,
    MdLockOpen,
    MdAdd
} from 'react-icons/md'

import { BsChatLeftText } from "react-icons/bs";
import LinearProgress from '@mui/material/LinearProgress';
import loadable from '@loadable/component';
import { useAppSelector } from '../../../../../core/hooks/redux';
import Badge from '@mui/material/Badge';


const Chat = loadable(() => import("./ChatBox"), {
  fallback: <LinearProgress />,
});
const Participants = loadable(() => import("./Participants"), {
  fallback: <LinearProgress />,
});
const MeetInfo = loadable(() => import("./Info"), {
  fallback: <LinearProgress />,
});
const Polls = loadable(() => import("./Polls"), {
  fallback: <LinearProgress />,
});
const LockMeet = loadable(() => import("./LockMeet"), {
  fallback: <LinearProgress />,
});

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidePanel:React.FC<Props> =
 ({ open, setOpen }) => {
    const [index, setIndex] = useState(1);

    const { participants, meetDetails, chat } = useAppSelector((state) => ({
      ...state.meetReducer,
      ...state.chatReducer,
    }));
    console.log(meetDetails)
    
  const handleIconPress = (key: number) => () => {
    if (!open) {
      setOpen(true);
    } else if (open && key === index) {
      setOpen(false);
    }
    setIndex(key);
  };
  return (
    <div className={style.sidepanel_container}>
      <div className={`${style.meeting_card} ${open?`${style.transition}`:` `}`}>
  <div className={style.meeting_card_top}>
  <h3>
  {["Meeting Details", "People", "In-call messages", "Polls"][index]}
  </h3>
  <MdClose size={20} style={{color:'#0000008A'}}/>
  </div>
  {(() => {
            switch (index) {
              case 0:
                return <MeetInfo />;
              case 1:
                return (
                  <Participants
                  isHost={meetDetails.isHost}
                  participants={participants}
                  />
                );
              case 2:
                return <Chat  />;
              case 3:
                return <Polls  isHost={meetDetails.isHost} />;
              default:
                return null;
            }
          })()}
</div>
<div className={style.sidepanelicon_container}>
<MdInfoOutline size={24} onClick={handleIconPress(0)}/>
<MdOutlinePeopleOutline size={24} onClick={handleIconPress(1)}/>
<Badge color="primary" variant="dot" invisible={!chat.length}>
<BsChatLeftText size={24} onClick={ handleIconPress(2)}/>

            </Badge>
<MdOutlineAssessment size={24} onClick={ handleIconPress(3)}/>
{(meetDetails.isHost || process.env.NODE_ENV === "development") && (
          <LockMeet />
        )}
    </div>
    </div>

  )
}

export default SidePanel