import React from 'react'
import Logo from '../Logo'
import style from './Header.module.css'
import {MdBrightness4,MdBrightness7} from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../core/hooks/redux'

const Header = () => {
  const [useDark, setUseDark] = React.useState(false);
  const dispatch = useAppDispatch();

  const { displayName } = useAppSelector(
    ({ authReducer: { displayName }}) => ({
      displayName
    })
  );
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
<button className={style.displayBtn}>{displayName}</button>
    </div>
   </header>
  )
}

export default Header