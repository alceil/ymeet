import React from 'react'
import style from './SignIn.module.css'
import {HiOutlineMail} from 'react-icons/hi'
import {MdOutlineLockOpen} from 'react-icons/md'
import { Link } from 'react-router-dom'
const SignIn: React.FC = () => {
  return (
    <div className={style.Container}>
      <div className={style.SignUpBox}>
<h5>Sign in</h5>
<p>Use your trio calls account</p>
<div style={{position: 'relative', display: 'inline-block'}}>
<HiOutlineMail style={{position: 'absolute', left: 5, top: 14, width: 20, height: 20,color:'grey'}}/>
<input 
  className={style.emailInput} 
  name="text" 
  placeholder="      Email" 
  type="email"/>
</div>
<div style={{position: 'relative', display: 'inline-block'}}>
<MdOutlineLockOpen style={{position: 'absolute', left: 5, top: 14, width: 20, height: 20,color:'grey'}}/>
<input 
  className={style.emailInput} 
  name="text" 
  placeholder="      Password" 
  type="password"/>
</div>
<button className={style.click}>Login</button>

<Link to='/auth/signUp'  style={{color: 'inherit', textDecoration: 'inherit'}}>
<p>Create new account</p>

</Link>

      </div>
    </div>
  )
}

export default SignIn

