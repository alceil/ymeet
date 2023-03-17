import React from 'react'
import Logo from '../Logo'
import style from './Header.module.css'
import {MdBrightness4,MdBrightness7} from 'react-icons/md'

const Header = () => {
  const [useDark, setUseDark] = React.useState(false);
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
    <div className={style.button_group}>
    {!useDark ? <MdBrightness4 style={{color:'grey'}} size={25}  /> : <MdBrightness7 />}
<button className={style.displayBtn}>Alceil</button>
    </div>
   </header>
  )
}

export default Header