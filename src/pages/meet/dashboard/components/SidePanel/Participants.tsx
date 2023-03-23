import React from 'react'
import {
    MdOutlineGetApp,
    MdPerson
} from 'react-icons/md'
const Participants = () => {
  return (
<div>
    <button style={
        {
        display:'flex',
        alignItems:'center',
        margin:'0px auto',
        color:'#4527a0',
        backgroundColor:'#fff',
        border:'none'
        }}>
    <MdOutlineGetApp size={20}/>
        <h4 style={{marginLeft:'10px'}}>Download Attendance</h4>
    </button>
    <div style={{display:'flex',alignItems:'center'}}>
        <div style={
            {
            display:'flex',
            borderRadius:'50%',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#bdbdbd',
            color:'white',
            height:'40px',
            width:'40px'
            }
            }>
        <MdPerson size={30}/>
        </div>
        <h3 style={{marginLeft:'10px',color:'#0000008A'}}>You</h3>
    </div>
  </div>
  )
}

export default Participants