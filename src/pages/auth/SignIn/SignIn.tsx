import React from 'react'
import style from './SignIn.module.css'
import {HiOutlineMail} from 'react-icons/hi'
import {MdOutlineLockOpen} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../../../utils/auth.fetch'
import { updateAuth } from '../../../core/reducers/auth'
import { useAppDispatch, useAppSelector } from '../../../core/hooks/redux'
import { useSnackbar } from 'notistack'
import { useLocalStorage } from '../../../core/hooks/common'

const INITIAL_STATE = { text: "", error: "" };
export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { isAuth } = useAppSelector(({ authReducer }) => authReducer);
  const [email, setEmail] = React.useState(INITIAL_STATE);
  const [password, setPassword] = React.useState(INITIAL_STATE);
  const [loading, setLoading] = React.useState(false);
  const [firstStepOver, setEmailExist] = React.useState(false);
  const setUID = useLocalStorage("UID", "")[1];

  const handleLogin = async () => {
    if (!emailRegex.test(email.text)) {
      return setEmail({ ...email, error: "Field is invalid" });
    } else if (!firstStepOver) {
      return setEmailExist(true);
    } else if (!password.text) {
      return setPassword({ ...password, error: "Field is invalid" });
    }

    setLoading(true);

    await signIn(email.text, password.text)
      .then((userDetails) => {
        dispatch(updateAuth({ isAuth: true, ...userDetails }));
        enqueueSnackbar("Welcome " + userDetails.displayName);
        setUID(JSON.stringify(userDetails));
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar(error || "SomeThing went wrong", {
          variant: "error",
        });
      });
  };

  React.useEffect(() => {
    if (isAuth) {
        navigate('/')
    }
  }, [isAuth, navigate]);
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
<button 
className={style.click}
disabled={loading}
onClick={handleLogin}
>
  Login
  </button>

<Link to='/auth/signUp'  style={{color: 'inherit', textDecoration: 'inherit'}}>
<p>Create new account</p>

</Link>

      </div>
    </div>
  )
}

export default SignIn

