import React,{useState} from 'react'
import Controller from './components/Controller';
import LeftBar from './components/LeftBar';
import SidePanel from './components/SidePanel';
import Video from './components/Video';
import style from './Meet.module.css';
const Meet = () => {
  const [open,setOpen] = useState(false);
  return (
    <div className={style.meet_container}>
      <div style={{display:'flex'}}>
      <Video open={open}/>
      </div>
<SidePanel open={open} setOpen={setOpen}/>
<Controller/>
<LeftBar/>
    </div>
  )
}

export default Meet