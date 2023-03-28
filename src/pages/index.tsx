
import { Route, Routes } from 'react-router-dom';
import Auth from './auth';
import Chat from './chat/Chat';
import Home from './home/Home';
const Routers = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/auth/*" element={<Auth/> } />
    <Route path="/chat" element={<Chat/>} />
    </Routes> 
  )
}

export default Routers