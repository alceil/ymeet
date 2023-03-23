import React,{useState} from 'react'
import Controller from './components/Controller';
import SidePanel from './components/SidePanel';
import Video from './components/Video';
import style from './Meet.module.css';
const Meet = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className={style.meet_container}>
      <div style={{display:'flex'}}>
      <Video open={isOpen}/>
  

      </div>
<div className={style.vc_controllers}>
<h2 style={{color:'#0000008A',fontWeight:'bold'}} onClick={()=>setIsOpen(!isOpen)}>
  2:45pm | i6fl-k5cd-gvom
</h2>
<Controller/>
</div>
<SidePanel open={isOpen} setOpen={setIsOpen}/>

    </div>
  )
}

export default Meet