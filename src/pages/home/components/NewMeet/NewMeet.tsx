import React from 'react'
import style from './NewMeet.module.css'
import {MdVideoCall} from 'react-icons/md'
import Modal from '../../../../components/Modal/Modal';
const NewMeet = () => {

  return (
    <>
    <button 
    className={style.outline_btn}
    // onClick={() => setOpenDialog(!openDialog)}
    >
  <MdVideoCall size={25}/> 
  <span className={style.btn_text}>
   Create new Link
    
  </span>

  </button>
    
    </>
  )
}

export default NewMeet