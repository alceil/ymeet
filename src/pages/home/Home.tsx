import React from 'react'
import Header from '../../components/Header/Header'
import JoinMeet from './components/JoinMeet/JoinMeet'

const Home = () => {
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

</>
  )
}

export default Home