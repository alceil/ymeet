import React from 'react'
import {MdAdd} from 'react-icons/md'
const Polls = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>
    <img
              width={"90"}
              alt="Poll Icon"
              src="https://avatars.slack-edge.com/2020-05-09/1112549471909_7543dde099089941d3c3_512.png"
            />
            <button style={
              { 
                display:'flex',
                alignItems:'center',
                backgroundColor:'#ffff',
                border:'none',
                color:'#4527a0',
                marginTop:'20px'
              }
              }>
            <MdAdd size={20}/>
              <span style={{marginLeft:'10px'}}>
              Create a poll
              </span>
            </button>
    </div>
  )
}

export default Polls