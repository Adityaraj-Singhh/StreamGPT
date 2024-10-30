import React, { useState, useRef } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/Validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {


const [ isSignIn , setIsSignIn ] = useState(true);
const [errorMessage, setErrorMessage] = useState(null);
const navigate = useNavigate();


const email = useRef(null); //useRef is used to reference a tag
const password = useRef(null);
const name = useRef(null);

const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
}

const handleClick = () => {
    //validation

    console.log("Email:", email.current.value);
    console.log("Password:", password.current.value);
    const message =  checkValidData(email.current.value,password.current.value);
//    console.log(message);
    setErrorMessage(message);

    if(!isSignIn){
      createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        navigate("/Browse");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+"-"+errorMessage);
        // ..
      });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/Browse");
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+"-"+errorMessage);
      });
    }
}



  return (
    <div >
     <Header/>
    <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg' alt='background'/>
    </div>

    <form
    onSubmit = {(e)=>e.preventDefault()}
     className='absolute w-3/12 p-12 bg-black mx-auto my-36 right-0 left-0 text-white bg-opacity-80  rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn?"Sign In":"Sign Up"}</h1>
        {!isSignIn && (<input ref={name} type='text' placeholder='Full name' className='p-3 my-4 w-full bg-gray-700'/>)}
        <input ref = {email} type='text' placeholder='Email Address' className='p-3 my-4 w-full bg-gray-700'/>
        <input ref = {password} type='password' placeholder='Password' className='p-3 my-4 w-full  bg-gray-700'/>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button type='submit' className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleClick}>{isSignIn? "Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn?"Not a memeber? Sign Up now" : "Already a member? Sign in"}</p>
    </form>

    </div>
   
  )
}

export default Login;
