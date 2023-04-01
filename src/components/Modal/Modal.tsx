import React from 'react'
import './Modal.css'
import { BiX } from 'react-icons/bi';

type ModalProps = {
    isOpen:boolean,
    onClose:()=> unknown,
}



const Modal:React.FC<ModalProps> = ({isOpen,onClose}) => {
  return (
   isOpen?( <>
   <div>
    <div className='modal-bg' onClick={onClose}></div>
        <div className='modal'>
      <div className='modal-body'>
      <div className='dialogueContainter'>
    <h3 style={{color:'#000000DE',position:'relative',right:'7rem'}}>Create New meeting </h3>
    <input 
      className='meetInput' 
      name="text" 
      placeholder="Meeting Name" 
      type="text"
    //   value={email.text}
    //   onChange={(e) => {
    //     setEmail({ error: "", text: e.target.value });
    //   }}
      />
    
      <input 
      className='meetInput' 
      name="text" 
      placeholder="Invite users by email" 
      type="text"
    //   value={email.text}
    //   onChange={(e) => {
    //     setEmail({ error: "", text: e.target.value });
    //   }}
      />
      <button className='click'>Start New Meeting</button>
    </div>
      </div>
    </div>
    </div>
        </>):(<></>)
  )
}

export default Modal