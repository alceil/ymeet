import React from 'react'
import style from './JoinMeet.module.css'
import {MdKeyboard} from 'react-icons/md'
const JoinMeet = () => {
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
      </div>
  )
}

export default JoinMeet