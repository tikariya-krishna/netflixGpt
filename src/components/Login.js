import { useRef, useState } from 'react';
import Header from './Header.js';
import { validation } from '../utlis/validation.js';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const email = useRef(null);
  const password = useRef(null);


  const handelSubmit = () =>{
    console.log(email.current.value);
    console.log(password.current.value);
    const msg = validation(email.current.value, password.current.value);
    if (msg) {
      setErrorMessage(msg.message);
      return;
    }
  }

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
    <Header/>
    <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg' alt='Background'/>
    </div>

      <div className='text-white absolute p-10 bg-black/80 rounded-md w-4/12 mx-auto mt-32 right-0 left-0 '>
        <h1 className='text-4xl font-bold'>Sign {isSignInForm === true ? "In" : "UP"}</h1>
        <form onSubmit={(e)=> e.preventDefault()} className='gap-5 flex flex-col mt-5 '>
          {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 rounded-sm bg-white/10 text-white border border-white/50' />)}
          <input ref={email} type='email' placeholder='Email Address' className='p-4 rounded-sm bg-white/10 text-white border border-white/50' />
          <input ref={password} type='password' placeholder='Password' className=' p-4 rounded-sm bg-white/10 text-white border border-white/50' />

          <p className='text-red-500 text-sm font-bold'>{errorMessage}</p>

          <button onClick={handelSubmit} className='w-full p-2 my-2 bg-[rgb(229,9,20)] rounded-md text-white'>Sign {isSignInForm === true ? "In" : "UP"}</button>
        </form>

        <div className='mt-5 space-y-3'>
          <p className='text-gray-400'>{isSignInForm === true ? "New to Netflix?" : "Already Registered?"} <span className='text-white hover:underline cursor-pointer' onClick={toggleForm}>Sign {isSignInForm === true ? "In" : "UP"}.</span></p>
          <p className='text-gray-400 text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          <p className='text-blue-600 hover:underline cursor-pointer'>Learn more</p>
        </div>
      </div>
    
    </>
  )
}

export default Login