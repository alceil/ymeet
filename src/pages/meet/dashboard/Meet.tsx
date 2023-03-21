import React from 'react'
import Controller from './components/Controller';
import SidePanel from './components/SidePanel';
import Video from './components/Video';
import style from './Meet.module.css';

const Meet = () => {
  return (
    <div className={style.meet_container}>
      <div style={{display:'flex'}}>
      <Video/>
<div className={style.meeting_card}>
<h6>Meet</h6>
</div>
      </div>
<div className={style.vc_controllers}>
<h2 style={{color:'#0000008A',fontWeight:'bold'}}>
  2:45pm | i6fl-k5cd-gvom
</h2>
<Controller/>
<SidePanel/>
</div>
    </div>
  )
}

export default Meet