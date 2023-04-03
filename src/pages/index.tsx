
import { useEffect } from 'react';
import { Route, Routes,  RouteProps, useNavigate, } from 'react-router-dom';
import { useAppSelector } from '../core/hooks/redux';
import { useConnection } from '../core/hooks/useConnection';
import Auth from './auth';
import Chat from './chat/Chat';
import Home from './home/Home';
import Meet from './meet';
const Routers = () => {

  // <Route path="/" element={isAuth?<Home/>: <Navigate to="/auth/signIn" />} />

  const RequireAuth:React.FC<{element:JSX.Element}> = ({element}) => {
    useConnection();
  const { isAuth } = useAppSelector(({ authReducer }) => authReducer);

    const navigate = useNavigate();
    useEffect(() => {
      if (!isAuth) {
        navigate("/auth/signIn")
      }
    }, [isAuth]);
  
    return element;
  };
  return (
    <Routes>
    <Route path="/" element={<RequireAuth element={ <Home/>}/>} />
    <Route path="/auth/*" element={<RequireAuth element={ <Auth/>}/>} />
    <Route path="/chat" element={<RequireAuth element={ <Chat/>}/>} />
    <Route path="/:meetId" element={<RequireAuth element={ <Meet/>}/>} />
    </Routes> 
  )
}

export default Routers