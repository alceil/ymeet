import React from 'react'
import style from './SignUp.module.css'
import {HiOutlineMail} from 'react-icons/hi'
import {MdOutlineLockOpen} from 'react-icons/md'
import {BsPerson} from 'react-icons/bs'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className={style.Container}>
      <div className={style.SignUpBox}>
<p>Create your team account</p>
<div style={{position: 'relative', display: 'inline-block'}}>
<BsPerson style={{position: 'absolute', left: 5, top: 14, width: 20, height: 20,color:'grey'}}/>
<input 
  className={style.emailInput} 
  name="text" 
  placeholder="      Display Name" 
  type="email"/>
</div>
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
<button className={style.click}>Register Now</button>
<p>Already have an account?Sign in</p>
      </div>
    </div>
  )
}

export default SignUp