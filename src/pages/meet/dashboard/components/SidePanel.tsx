import React from 'react'
import style from './styles/SidePanel.module.css'
import {
    MdInfoOutline,
    MdOutlinePeopleOutline,
    MdOutlineAssessment,
    MdLockOpen
} from 'react-icons/md'
import { BsChatLeftText } from "react-icons/bs";
const SidePanel = () => {
  return (
    <div className={style.sidepanel_container}>
<MdInfoOutline size={24}/>
<MdOutlinePeopleOutline size={24}/>
<BsChatLeftText size={24}/>
<MdOutlineAssessment size={24}/>
<MdLockOpen size={24}/>
    </div>
  )
}

export default SidePanel