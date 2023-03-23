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
import MeetInfo from './Info';
import Participants from './Participants';
import Chat from './ChatBox';
import Polls from './Polls';
const SidePanel:React.FC< {open: boolean;setOpen: React.Dispatch<React.SetStateAction<boolean>>;}> =
 ({ open, setOpen }) => {
    const [index, setIndex] = useState(1);
    
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
                  />
                );
              case 2:
                return <Chat />;
              case 3:
                return <Polls  />;
              default:
                return null;
            }
          })()}
</div>
<div className={style.sidepanelicon_container}>
<MdInfoOutline size={24} onClick={handleIconPress(0)}/>
<MdOutlinePeopleOutline size={24} onClick={handleIconPress(1)}/>
<BsChatLeftText size={24} onClick={ handleIconPress(2)}/>
<MdOutlineAssessment size={24} onClick={ handleIconPress(3)}/>
<MdLockOpen size={24} />
    </div>
    </div>

  )
}

export default SidePanel