import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header.js';
import { validation } from '../utlis/validation.js';
import { auth } from '../utlis/firebase.js';
import { addUser } from '../utlis/redux/userSlice.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch(); 

  const fname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const handelSubmit = () =>{
    const msg = validation(email.current.value, password.current.value);    
      setErrorMessage(msg);

      if(msg) return;

      if(!isSignInForm){
        
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {displayName: fname.current.value}
            ).then(() => {
              const { uid , email, displayName } = auth.currentUser;
              dispatch(addUser({ uid:uid, email:email, displayName:displayName }) )
            }).catch((error) => {
              setErrorMessage(error.message);
            });

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
            // ..
          });
      }else{
        signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
  }


  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
    <Header/>
    <div className='absolute bg-center bg-cover w-full h-full' style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg')"}}>
    </div>
    <div className='bg-black/50 w-full h-full absolute z-10'></div>

      <div className='text-white absolute p-10 bg-black/80 rounded-md w-4/12 mx-auto mt-32 right-0 left-0 z-20'>
        <h1 className='text-4xl font-bold'>Sign {isSignInForm === true ? "In" : "UP"}</h1>
        <form onSubmit={(e)=> e.preventDefault()} className='gap-5 flex flex-col mt-5 '>
          {!isSignInForm && (<input ref={fname} type='text' placeholder='Full Name' className='p-4 rounded-sm bg-white/10 text-white border border-white/50' />)}
          <input ref={email} type='email' placeholder='Email Address' className='p-4 rounded-sm bg-white/10 text-white border border-white/50' />
          <input ref={password} type='password' placeholder='Password' className=' p-4 rounded-sm bg-white/10 text-white border border-white/50' />

          <p className='text-red-500 text-sm font-bold'>{errorMessage}</p>

          <button onClick={handelSubmit} className='w-full p-2 my-2 bg-[rgb(229,9,20)] rounded-md text-white'>Sign {isSignInForm === true ? "In" : "UP"}</button>
        </form>

        <div className='mt-5 space-y-3'>
          <p className='text-gray-400'>{isSignInForm === true ? "New to Netflix?" : "Already Registered?"} <span className='text-white hover:underline cursor-pointer' onClick={toggleForm}>Sign {isSignInForm === true ? "UP" : "IN"}.</span></p>
          <p className='text-gray-400 text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          <p className='text-blue-600 hover:underline cursor-pointer'>Learn more</p>
        </div>
      </div>
    
    </>
  )
}

export default Login