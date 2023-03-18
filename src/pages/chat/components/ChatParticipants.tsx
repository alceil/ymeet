import React from 'react'
import style from './styles/ChatParticipants.module.css'
import {MdSearch} from 'react-icons/md'
const ChatParticipants = () => {
  return (
    <div>
        <div style={{position: 'relative', display: 'inline-block',margin:10}}>
<MdSearch style={{position: 'absolute', left: 5, top: 11, width: 20, height: 20,color:'grey'}}/>
<input 
  className={style.search_input} 
  name="text" 
  placeholder="      Search" 
  type="search"/>
</div>
        
</div>
  )
}

export default ChatParticipants