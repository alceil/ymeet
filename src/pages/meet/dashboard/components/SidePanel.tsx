import style from './styles/SidePanel.module.css'
import { MdClose,MdOutlineFileCopy} from 'react-icons/md'

import {
    MdInfoOutline,
    MdOutlinePeopleOutline,
    MdOutlineAssessment,
    MdLockOpen
} from 'react-icons/md'
import { BsChatLeftText } from "react-icons/bs";
const SidePanel:React.FC< {open: boolean;setOpen: React.Dispatch<React.SetStateAction<boolean>>;}> =
 ({ open, setOpen }) => {
  return (
    <div className={style.sidepanel_container}>
      <div className={`${style.meeting_card} ${open?`${style.transition}`:` `}`}>
  <div className={style.meeting_card_top}>
  <h3>Meeting Details</h3>
  <MdClose size={20} style={{color:'#0000008A'}}/>
  </div>
  <div>
    <p>Joining info</p>
    <span style={{color:'#0000008A'}}>
    https://trio-calls.vercel.app/i6fl-k5cd-gvom
    </span>
    <button className={style.joincard_btn}>
    <MdOutlineFileCopy size={20}/>
<span style={{marginLeft:'10px'}}>Copy joining info</span>
    </button>
  </div>
</div>
<div className={style.sidepanelicon_container}>
<MdInfoOutline size={24}/>
<MdOutlinePeopleOutline size={24}/>
<BsChatLeftText size={24}/>
<MdOutlineAssessment size={24}/>
<MdLockOpen size={24}/>
    </div>
    </div>

  )
}

export default SidePanel