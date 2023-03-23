import React from 'react'
import { MdOutlineFileCopy} from 'react-icons/md'
const MeetInfo = () => {
  return (
    <div>
    <p>Joining info</p>
    <span style={{color:'#0000008A'}}>
    https://trio-calls.vercel.app/i6fl-k5cd-gvom
    </span>
    <button style={{display: 'flex',alignItems: 'center',border: 'none',margin: '10px auto',backgroundColor: '#ffff',color:'#4527a0'}}>
    <MdOutlineFileCopy size={20}/>
<span style={{marginLeft:'10px'}}>Copy joining info</span>
    </button>
  </div>
  )
}

export default MeetInfo