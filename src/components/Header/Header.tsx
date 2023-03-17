import React from 'react'
import Logo from '../Logo'
import style from './Header.module.css'
const Header = () => {
  return (
   <header className={style.nav_container}>
    <div  className={style.logo_container} >
    <Logo size={35}/>
<h6 
className={style.header_text}
>
  Ymeet
</h6>
    </div>

   </header>
  )
}

export default Header