import React from 'react'
import './styles/ChatTextInput.css'
import {MdOutlineSend} from 'react-icons/md'

type ChatTextInputProps = {
    onSend?: (message: string) => unknown;
    isSmall?: boolean;
  };

const ChatTextInput:React.FC<ChatTextInputProps> = ({ onSend, isSmall }) => {
    const [text, setText] = React.useState("");



  const handleSubmit = () => {
    console.log(text)
    if (!text) return;
    onSend?.(text);
    setText("");
  };
  
    return (
    <div className='chattext-container'>
<input 
  className='chattext-input'
  name="text" 
  placeholder="Send a message to everyone" 
  type="email"
  value={text}
onChange={(e) => setText(e.target.value)}
  />
  <button style={{
  display:'flex',
  alignItems:'center',

  marginRight:20,
borderRadius:50,
padding:15,
border:'none',
color:'#fff',
boxShadow:'0px 0px 30px 1px #c2c2c2',
backgroundColor:'#4527a0'
}}
onClick={handleSubmit}
>
<MdOutlineSend size={20}/>
</button>
    </div>
  )
}

export default ChatTextInput