import React from 'react'
import style from './styles/Controller.module.css'
import {IoMdMic} from 'react-icons/io'
import {
    MdOutlineVideocam,
    MdPresentToAll,
    MdCallEnd,
    MdOutlineBrush,
    MdBrightness4,
    MdOutlinePanTool
} from 'react-icons/md'
const Controller = () => {
  return (
    <div className={style.controller_container}>
        <IoMdMic/>
        <MdOutlineVideocam/>
        <MdPresentToAll/>
        <MdCallEnd/>
        <MdOutlineBrush/>
        <MdBrightness4/>
        <MdOutlinePanTool/>
    </div>
  )
}

export default Controller