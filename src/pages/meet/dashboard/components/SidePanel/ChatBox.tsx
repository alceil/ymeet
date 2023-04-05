import React from 'react'
import { useAppSelector } from '../../../../../core/hooks/redux';
import { useParams } from 'react-router-dom';
import { useMsgs } from '../../../../../core/hooks/useMsgs';
import { ChatTextInput } from '../../../../../components/Chat';
import LinearProgress from '@mui/material/LinearProgress';
import ChatMessage from '../../../../../components/Chat/ChatMessage';
import { dateToTime } from '../../../../../utils/common';

const ChatBox = () => {

  const { userID, chat } = useAppSelector((state) => ({
    userID: state.authReducer.UID,
    chat: state.chatReducer.chat,
  }));
  const { meetId } = useParams<{ meetId: string }>();
  const { sendMessage, loading } = useMsgs(meetId);
  let prev = "";
  console.log(meetId)
  return (

    <div style={{position:'relative'}}>

    <div  style={{display:'flex',flexDirection:'column',height:'60vh',overflowY:'auto'}}>
    {loading ? (
          <LinearProgress />
        ) : (
          chat?.map(({ message, displayName, createdAt, UID }, i) => (
            <ChatMessage
              key={i}
              hideAvatar
              hidePrimary={prev === (prev = UID)}
              displayName={displayName}
              isSelf={UID === userID}
              message={message}
              time={dateToTime(createdAt)}
            />
          ))
        )}

<div>
</div>

</div>
<ChatTextInput
 onSend={sendMessage}
 
 />

</div>

  )
}

export default ChatBox