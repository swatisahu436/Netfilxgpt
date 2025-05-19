import React from 'react'
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const [isSigninform,setIsSigninform] = useState(true);

  const onSignup=()=>{
       setIsSigninform(!isSigninform);
  }
  return (
    <div>
      <Header />
      <div className="absolute w-full h-full " >
        <img
        className='h-full w-full'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_small.jpg"
          alt="log"
        />
      </div>
      <form className='absolute w-4/12 p-12 bg-black/80 text-white my-36 mx-auto right-0 left-0' >
        <h1 className="text-3xl font-bold rounded-xl ">
          { isSigninform ? "Sign In": "Sign Up"}
        </h1>
        {/*This is Conditional Rendering*/}
        {
          !isSigninform && (
          <input type='text'
          className='rounded-lg my-4 p-4 bg-gray-500 text-gray-304 w-full'
          placeholder='Enter Name'>
          </input>
        )}
        <input type='text'
         className='rounded-lg my-4 p-4 bg-gray-500 text-gray-304 w-full'
         placeholder='Email or mobile number'>
         </input>
        <input type='password'
         className='rounded-lg  my-4 p-4 bg-gray-500 text-gray-304 w-full'
          placeholder='Passward'>
        </input>
        <button 
        className="rounded-lg p-4 my-6 bg-red-600 w-full">
          {isSigninform ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={onSignup} className='mt-2.5'>
          {isSigninform ? "New To NetFlix ?Sign Up" : "Already register? Sign In Now"}
        </p>
      </form>

    </div>
  )
};

export default Login;