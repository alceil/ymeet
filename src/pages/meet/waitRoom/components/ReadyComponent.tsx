import React from 'react'
import style from './styles/ReadyComponent.module.css'
import {MdOutlineVoiceChat} from 'react-icons/md';

type ReadyComponentProps = {
  joinMeetHandler: () => unknown;
};
const ReadyComponent:React.FC<ReadyComponentProps> = ({joinMeetHandler}) => {
  return (
    <div className={style.joinmeet_right}>
        <h2 className={style.joinmeet_title}>Ready to Join?</h2>
        <button className={style.joinmeet_btn} onClick={joinMeetHandler}>
            <MdOutlineVoiceChat size={18}/>
           <span style={{marginRight:'10px'}} >
           Join Now
            </span>
            
            </button>
    </div>
  )
}

export default ReadyComponent