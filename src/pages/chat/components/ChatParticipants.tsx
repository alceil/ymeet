import React from 'react'
import style from './styles/ChatParticipants.module.css'
import {MdSearch} from 'react-icons/md'
const ChatParticipants = () => {
  return (
    <div className={style.chatparticipants}>
        <div style={{position: 'relative', display: 'inline-block',margin:10}}>
<MdSearch style={{position: 'absolute', left: 5, top: 11, width: 20, height: 20,color:'grey'}}/>
<input 
  className={style.search_input} 
  name="text" 
  placeholder="      Search" 
  type="search"/>
</div>
<div className={style.list_card}>
<div className={style.avatar}>
    I
    </div> 
    <div className={style.card_right}>
<div style={{display:'flex',justifyContent:'space-between'}}>
<div className={style.meeting_name}>i6fl-k5cd-gvom</div>
<div style={{marginLeft:'10px',color:'rgba(0, 0, 0, 0.54)',fontWeight:'bold'}}>10:20 pm</div>
</div>
      <div className={style.chat_msg}>asasada</div>
    </div>     
</div>
  
</div>
  )
}

export default ChatParticipants