import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignForm, setIsSignInForm]= useState(true);

  const toggleSignInForm =()=>{
        setIsSignInForm(!isSignForm); 
  }


  return (
    <div>
        <Header/>
       <div className='absolute'>
       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg'
        alt='logo'
        />
        </div> 

        <form className='w-3/12 absolute p-12 bg-black m-36 mx-auto  right-0 left-0 text-white  bg-opacity-90'>
          <h1 className='font-bold text-3xl py-4'>{isSignForm ? "Sign In" : "Sign Up"}</h1>

          {!isSignForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
        
         <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>                 
          <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-600'/>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg '>{isSignForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignForm ? "New to NetFlix? Sign Up Now" : "Already register? Sign In Now "}</p>
        </form>

    </div>
  )
}

export default Login