import React from 'react'
import Header from '../../components/Header/Header'
import JoinMeet from './components/JoinMeet/JoinMeet'
import {BsChatLeftText} from 'react-icons/bs'
import Modal from '../../components/Modal/Modal'

const Home = () => {
  const [openDialog, setOpenDialog] = React.useState(true);
const handleModalClose = () => {
  console.log("called modal close")
    setOpenDialog(!openDialog)
  };
  return (
<>
<Header/>

<div style={
  {
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',  
    marginTop:'5rem'  
    }}>
<img
    alt="Meeting"
    src="https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg"
  />
<JoinMeet/>

</div>

<div style={
  {
    display:'flex',
    justifyContent:'end'
    
  }}>
<button style={{
  display:'flex',
  alignItems:'center',

  marginTop:'11rem',
  marginRight:20,
borderRadius:50,
padding:15,
border:'none',
color:'#fff',
boxShadow:'0px 0px 30px 1px #c2c2c2',
backgroundColor:'#4527a0'
}}>
<BsChatLeftText size={20}/>
</button>
{/* <Modal isOpen={openDialog} onClose={handleModalClose}/> */}

</div>

</>
  )
}

export default Home