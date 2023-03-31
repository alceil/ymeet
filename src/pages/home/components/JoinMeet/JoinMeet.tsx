import React from 'react'
import style from './JoinMeet.module.css'
import {MdKeyboard,MdVideoCall} from 'react-icons/md'
import NewMeet from '../NewMeet/NewMeet'
import Modal from '../../../../components/Modal/Modal'
const JoinMeet = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleModalClose = () => {
    console.log("called modal close")
      setOpenDialog(!openDialog)
    };
  return (
      <div className={style.SignUpBox}>
<div style={{position: 'relative', display: 'inline-block'}}>
<MdKeyboard style={{position: 'absolute', left: 5, top: 13, width: 20, height: 20,color:'grey'}}/>
<input 
  className={style.emailInput} 
  name="text" 
  placeholder="      Enter meeting code or link" 
  type="email"/>
</div>

<button className={style.click}>Join Meeting</button>
<span style={{color:'#0000008A',margin:'auto'}}>or</span>
<button 
    className={style.outline_btn}
    onClick={() => setOpenDialog(!openDialog)}
    >
  <MdVideoCall size={25}/> 
  <span className={style.btn_text}>
   Create new Link
    
  </span>

  </button>
{/* <NewMeet/> */}

<Modal isOpen={openDialog} onClose={handleModalClose}/>
      </div>
  )
}

export default JoinMeet