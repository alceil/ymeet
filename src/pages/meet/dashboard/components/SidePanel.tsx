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
<MdInfoOutline/>
<MdOutlinePeopleOutline/>
<BsChatLeftText/>
<MdOutlineAssessment/>
<MdLockOpen/>
    </div>
  )
}

export default SidePanel