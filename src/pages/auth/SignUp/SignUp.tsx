import React from 'react'
import style from './SignUp.module.css'
type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className={style.Container}>
      <div className={style.SignUpBox}>
<h5>Sign in</h5>
<p>Use your trio calls account</p>
<input 
  className={style.emailInput} 
  name="text" 
  placeholder="Email" 
  type="email"/>
      </div>
    </div>
  )
}

export default SignUp