"use client";
import React, { useRef } from 'react'
import { BG_PIC } from '@/utils/const'
import Image from 'next/image'
import Header from './Header'
import { useState } from 'react'
import { checkValidate } from '@/utils/validate';
const Login = () => {
const [signBtnColor, setsignBtnColor] = useState('bg-red-500');
const [isLogged, setIsLogged] = useState(true);
const email = useRef<HTMLInputElement>(null);
const password = useRef<HTMLInputElement>(null);
const [errorMessage,setErrorMessage] = useState<string | null>(null);
const handleSubmit = ()=>{
    const message = checkValidate(email.current?.value ?? '',password.current?.value ?? '');
    setErrorMessage(message);

}
  return (
    <div className="relative w-full min-h-screen">
  <Image 
    src={BG_PIC} 
    alt="background" 
    fill
    //className="object-cover"
  />
  <div className="absolute inset-0 bg-gray-950/65" />
  <Header />
  <div className="flex justify-center px-4">
  <form onSubmit= {(e)=>e.preventDefault()} className="text-white  bg-black/70 mx-auto right-0 left-0 w-full max-w-md p-6
   my-10 md:p-8 rounded-md  md:my-40 [@media(max-width:890px)]:my-32 
  [@media(max-width:890px)]:mr-2  [@media(max-width:890px)]:ml-2 z-10">
    <h1 className="font-bold text-3xl md:text-4xl mb-5">{isLogged ? "Sign In" : "Sign Up"}</h1>

    {!isLogged && (
      <input type="text" placeholder="Full Name" className="w-full py-3 px-4 mb-3 bg-white/5 rounded-lg" />
    )}

    <input ref={email} type="text" placeholder="Email Address or Phone Number" className="w-full py-3 px-4 mb-3 bg-white/5 rounded-lg" />

    <input ref={password} type="password" placeholder="Password" className="w-full py-3 px-4 mb-3 bg-white/5 rounded-lg" />
    {errorMessage && ( <p className='py-3 px-2 mb-3 text-red-400 text-md font-semibold whitespace-pre-line'>{errorMessage}</p>)}
    <button 
      type="submit" 
      className={`${signBtnColor} w-full p-3 font-bold cursor-pointer rounded-lg mb-3`}
      onMouseOver={() => setsignBtnColor('bg-red-800')}
      onMouseOut={() => setsignBtnColor('bg-red-500')}
      onClick={()=>handleSubmit()}
    >
      {isLogged ? "Sign In" : "Sign Up"}
    </button>

    {isLogged && (
      <div className="flex items-center mb-3">
        <input type="checkbox" className="mr-2" />
        <p>Remember Me</p>
      </div>
    )}

    {isLogged ? (
      <p className="mb-6">
        New to Netflix? <b className="cursor-pointer" onClick={() => setIsLogged(!isLogged)}>Sign Up</b>
      </p>
    ) : (
      <p className="mb-6">
        Already User? <b className="cursor-pointer" onClick={() => setIsLogged(!isLogged)}>Sign In</b>
      </p>
    )}
  </form>
  </div>
</div>

  )
}

export default Login