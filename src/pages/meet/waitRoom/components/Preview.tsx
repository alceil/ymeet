import React from 'react'
import style from './styles/Preview.module.css'
import {IoMdMic} from 'react-icons/io'
import {MdOutlineVideocam} from 'react-icons/md'
const Preview = () => {
  return (
    <div className={style.video_box}>
      <div className={style.vc_options}>
       <IoMdMic size={20} style={{color:'rgba(0, 0, 0, 0.54)'}}/> 
       <MdOutlineVideocam size={20} style={{color:'rgba(0, 0, 0, 0.54)'}}/>

      </div>
    </div>
  )
}

export default Preview