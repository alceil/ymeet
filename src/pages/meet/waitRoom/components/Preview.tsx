import React from 'react'
import style from './styles/Preview.module.css'
import {IoMdMic} from 'react-icons/io'
import {MdOutlineVideocam} from 'react-icons/md'
const Preview = () => {
  return (
    <div className={style.video_box}>
      <div className={style.vc_options}>
       <IoMdMic/> 
       <MdOutlineVideocam/>

      </div>
    </div>
  )
}

export default Preview