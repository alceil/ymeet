import React from 'react'
import style from './SignUp.module.css'
import {HiOutlineMail} from 'react-icons/hi'
import {MdOutlineLockOpen} from 'react-icons/md'
import {BsPerson} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../../../core/hooks/redux";
import { useSnackbar } from "notistack";
import { useLocalStorage } from "../../../core/hooks/common";
const INITIAL_STATE = { text: "", error: "" };
export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const setUID = useLocalStorage("UID", "")[1];
  const { isAuth } = useAppSelector(({ authReducer }) => authReducer);
  const [name, setName] = React.useState(INITIAL_STATE);
  const [email, setEmail] = React.useState(INITIAL_STATE);
  const [password, setPassword] = React.useState(INITIAL_STATE);
  const [loading, setLoading] = React.useState(false);
  const handleSignUp = async () => {
    const inValid = (
      [
        [name.text, setName, /(\w+)/],
        [email.text, setEmail, emailRegex],
        [password.text, setPassword, /(\w+)/],
      ] as [string, typeof setName, RegExp][]
    ).filter((elem) => !elem[0] || !elem[2].test(elem[0]));

    if (inValid.length) {
      inValid.map(([text, setState]) =>
        setState({ text, error: "Field is invalid" })
      );
      return;
    }

    setLoading(true);

    await signUp(name.text, email.text, password.text)
      .then((userDetails) => {
        dispatch(updateAuth({ isAuth: true, ...userDetails }));
        enqueueSnackbar("Welcome " + userDetails.displayName);
        setUID(JSON.stringify(userDetails));
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar(error || "Something went wrong", {
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
<button 
className={style.click}
disabled={loading}
onClick={handleSignUp}
>
  Register Now
  </button>
<Link to='/auth/signIn'  style={{color: 'inherit', textDecoration: 'inherit'}}>
<p>Already have an account?Sign in</p>

</Link>
      </div>
    </div>
  )
}

export default SignUp