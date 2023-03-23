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
import ChatBox from './ChatBox';
const SidePanel:React.FC< {open: boolean;setOpen: React.Dispatch<React.SetStateAction<boolean>>;}> =
 ({ open, setOpen }) => {
    const [index, setIndex] = useState(3);
  return (
    <div className={style.sidepanel_container}>
      <div className={`${style.meeting_card} ${open?`${style.transition}`:` `}`}>
  <div className={style.meeting_card_top}>
  <h3>
  {["Meeting Details", "People", "In-call messages", "Polls"][index]}
  </h3>
  <MdClose size={20} style={{color:'#0000008A'}}/>
  </div>
 
{/* <ChatBox/> */}
  {/* <Participants/> */}
{/* <MeetInfo/> */}
</div>
<div className={style.sidepanelicon_container}>
<MdInfoOutline size={24} onClick={() => setOpen(!open)}/>
<MdOutlinePeopleOutline size={24}/>
<BsChatLeftText size={24}/>
<MdOutlineAssessment size={24}/>
<MdLockOpen size={24}/>
    </div>
    </div>

  )
}

export default SidePanel