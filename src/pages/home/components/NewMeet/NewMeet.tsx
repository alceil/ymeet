import React from 'react'
import style from './NewMeet.module.css'
import {MdVideoCall} from 'react-icons/md'
const NewMeet = () => {
    const [openDialog, setOpenDialog] = React.useState(false);
  return (
    <>
    <button className={style.outline_btn}>
  <MdVideoCall size={25}/> 
  <span className={style.btn_text}>
   Create new Link
    
  </span>
  
  </button>
    
    </>
  )
}

export default NewMeet