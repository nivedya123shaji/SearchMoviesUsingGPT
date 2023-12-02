import React, { useState, useRef } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validate.js"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/fireBase.js"

const Login = () => {

  const [isSignForm, setIsSignInForm]= useState(true);
  const [errorMessage,setErrorMessage]=useState(null);


  const email=useRef(null);
  const password=useRef(null);

 const handleButtonClick=()=>{
    //validate the form data
   
   // console.log(email.current.value);
   // console.log(password.current.value);

   const message= checkValidData(email.current.value,password.current.value)
  setErrorMessage(message);
  //once validation is done then Sigin or Sign up can be done

  if(message) return;
  
  //Sigin In Sigiup Logic
   if(!isSignForm){
     //Sign up logic
     createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
    // ..
  });
  }
  
  else{
    //Sign In Logic
    signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });


  }
}

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

        <form onSubmit={(e)=>e.preventDefault()}  className='w-3/12 absolute p-12 bg-black m-36 mx-auto  right-0 left-0 text-white  bg-opacity-90'>
          <h1 className='font-bold text-3xl py-4'>{isSignForm ? "Sign In" : "Sign Up"}</h1>

          {!isSignForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
        
         <input ref={email}   type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>                 
          <input ref={password}  type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-600'/>

            <p className='text-red-500'>{errorMessage}</p>

          <button className='p-4 my-6 bg-red-700 w-full rounded-lg ' onClick={handleButtonClick} >{isSignForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignForm ? "New to NetFlix? Sign Up Now" : "Already register? Sign In Now "}</p>
        </form>

    </div>
  )
}

export default Login