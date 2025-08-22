import React from 'react'
import Header from './Header'

const SignUp = () => {
  return (
    <>
    <Header/>
    <div className='relative'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg' alt='Background' className='z-10'/>

      {/* Black Overlay */}
      <div className='absolute top-0 w-full h-full bg-black/70 z-30'></div>
    </div>

    <div className='text-white absolute p-10 top-[22%] left-0 right-0 rounded-md w-5/12 mx-auto  z-40 text-center'>
        <p className='text-6xl font-bold mb-4'>Unlimited movies, TV shows and more </p>
        <p className='text-2xl font-bold mb-5'>Start at ₹149. Cancel at any time.</p>

        <p className='text-xl'>Ready to watch? Enter your email to create or restart your membership</p>

        <div className='flex mt-4 gap-3'>
            <input type='email' placeholder='Email address' className='p-3 rounded-sm bg-white/10 text-white border border-white/50 w-8/12' />
            <button className=' p-3 bg-[rgb(229,9,20)] text-2xl font-bold rounded-md text-white w-4/12'>Get Started</button>
        </div>
    </div>

    </>
  )
}

export default SignUp