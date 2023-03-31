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
    <div className='modal-bg' >
        <div className='modal'>
        <div className='modal-close' 
      
      onClick={onClose}
      >
    <BiX/>
      </div>
      <div className='modal-body'>
      <div className='dialogueContainter'>
    <h3 style={{color:'#000000DE',position:'relative',right:'15rem'}}>Create New meeting </h3>
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
    </div>
      </div>
    </div>
    </div>
        </>):(<></>)
  )
}

export default Modal