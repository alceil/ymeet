import React from 'react'
import './styles.css'
import { BiX } from 'react-icons/bi';

type ModalProps = {
    isOpen:boolean,
    onClose:()=> unknown,
    children:JSX.Element,
}



const Modal:React.FC<ModalProps> = ({isOpen,onClose,children}) => {
  return isOpen?(
    <>
<div className='modal-bg' 
// onClick={onClose}
>
<div className='modal'>
  <div className='modal-close' 
  
  onClick={onClose}
  >
<BiX/>
  </div>
  <div className='modal-body'>
    {children}
  </div>
</div>
    </div>
    </>
  ):
  (
  <></>
  )
}

export default Modal