import React from 'react'
import Header from '../../components/Header/Header'
import ChatHeader from './components/ChatHeader'
import ChatParticipants from './components/ChatParticipants'
import style from './styles.module.css'
const Chat = () => {
  return (
<>
<Header/>
<div className={style.chat_container}>
<ChatHeader/>
<div className={style.chat_bottom}>
<ChatParticipants/>
<div className={style.chatimg_container}>
<img
                    alt="Start new chat"
                    width={180}
                    style={{ alignSelf: "center", margin: 20 }}
                    src={
                      "https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
                    }
                  />
<div style={{fontSize:'24px',fontWeight:'500'}}>Select someone to chat</div>

</div>
</div>
</div>
</>
  )
}

export default Chat