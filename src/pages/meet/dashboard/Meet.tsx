import React,{useState} from 'react'
import Controller from './components/Controller';
import SidePanel from './components/SidePanel';
import Video from './components/Video';
import style from './Meet.module.css';
import { MdClose,MdOutlineFileCopy} from 'react-icons/md'
const Meet = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className={style.meet_container}>
      <div style={{display:'flex'}}>
      <Video open={isOpen}/>
  <div className={`${style.meeting_card} ${isOpen?`${style.transition}`:` `}`}>
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

      </div>
<div className={style.vc_controllers}>
<h2 style={{color:'#0000008A',fontWeight:'bold'}} onClick={()=>setIsOpen(!isOpen)}>
  2:45pm | i6fl-k5cd-gvom
</h2>
<Controller/>
<SidePanel/>
</div>
    </div>
  )
}

export default Meet