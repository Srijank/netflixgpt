"use client";
import React from 'react'
import { BG_PIC } from '@/utils/const'
import Image from 'next/image'
import Header from './Header'
import { useState } from 'react'
const Login = () => {
const [signBtnColor, setsignBtnColor] = useState('bg-red-500');
const [isLogged, setIsLogged] = useState(true);
  return (
    <div className="relative w-full h-screen">
      <Image 
        src={BG_PIC} 
        alt="background" 
        fill
        className="object-cover "
      />
       <div className="absolute inset-0 bg-gray-950/65" />
       <Header/>
       <form className='text-white absolute bg-black/70 my-40 mx-auto right-0 left-0 w-110 p-15 '>
        <h1 className='font-bold text-4xl mb-5 mx-2'>{isLogged? "Sign In" :"Sign Up"} </h1>
        {!isLogged && (
        <input type='text' placeholder='Full Name' className='w-full py-4 px-2  mx-2 my-2 bg-white/5 rounded-lg '/>
        )}

        <input type='text' placeholder='Email Address or Phone Number' className='w-full py-4 px-2  mx-2 my-2 bg-white/5 rounded-lg '/>

        <input type='password' placeholder='Password' className='w-full px-2 py-4 mx-2 my-2 bg-white/5 rounded-lg '/>

        <button type='submit' className={`${signBtnColor} w-full p-2 mx-2 my-2 font-bold cursor-pointer rounded-lg`} onMouseOver={()=>{setsignBtnColor('bg-red-800')} }
        onMouseOut={()=>{setsignBtnColor('bg-red-500')}}>{isLogged? "Sign In" :"Sign Up"} </button>

        {isLogged && (
        <div>
        <input type='checkbox' placeholder='Remember' className='py-4 px-2 mx-2 my-2'/><p className=' inline-block'>Remember Me </p>
        </div>
        )}
        {
            isLogged ? (<p className='mx-2 my-2'> New to Netflix ? <b className='cursor-pointer' onClick={()=>{
            {setIsLogged(!isLogged)}
            }}>Sign Up</b> </p>) : (<p className='mx-2 my-2'> Already User ? <b className='cursor-pointer' onClick={()=>{
            {setIsLogged(!isLogged)}
            }}>Sign In</b> </p>)
        }
        
       </form>
      </div>
  )
}

export default Login