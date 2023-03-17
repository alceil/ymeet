import React from 'react'
import Logo from '../Logo'
import style from './Header.module.css'
const Header = () => {
  return (
   <header className={style.nav_container}>
    <div  className={style.logo_container} >
    <Logo size={35}/>
<h6 style={{
  flexGrow:1, 
   fontWeight: "bold",
   fontSize:20,
   marginLeft:10,
   color:'#4527a0'
  }
   }>Ymeet</h6>
    </div>

   </header>
  )
}

export default Header