import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
const Auth = () => {
  return (
    <Routes>
    <Route path="/signIn" element={<SignIn/>} />
    <Route path="/signUp" element={<SignUp/> } />
    <Route path="/"  element={ <Navigate to="/auth/signIn" replace={true} />}/>
    </Routes> 
  )
}

export default Auth