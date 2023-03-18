import React from 'react'
import style from './styles/ChatHeader.module.css'
const ChatHeader = () => {
  return (

    <div className={style.chatheader_container}>
        <h2 style={{color:'white',fontWeight:'bold'}}>Messages</h2>
    </div>
  )
}

export default ChatHeader