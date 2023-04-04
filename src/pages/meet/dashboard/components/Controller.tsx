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

type ControllerProps = {
  endCallHandler: () => unknown;
  raiseHandHandler: () => unknown;
};
const Controller:React.FC<ControllerProps> = (
  endCallHandler,
  raiseHandHandler,

) => {
  return (
    <div className={style.controller_container}>
        <IoMdMic size={24}/>
        <MdOutlineVideocam  size={24}/>
        <MdPresentToAll size={24}/>
        <button  className={style.callend_btn}>
        <MdCallEnd size={24}/>
        </button>
        <MdOutlineBrush size={24}/>
        <MdBrightness4 size={24}/>
        <MdOutlinePanTool size={24}/>
    </div>
  )
}

export default Controller