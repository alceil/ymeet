import React from 'react'
import Header from '../../components/Header/Header'
import ChatHeader from './components/ChatHeader'
import ChatParticipants from './components/ChatParticipants'
import style from './styles.module.css'
const Chat = () => {
  return (
<>
<Header/>
<div className={style.SignUpBox}>
<ChatHeader/>
<ChatParticipants/>
</div>
</>
  )
}

export default Chat