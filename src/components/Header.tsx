import React from 'react'
import Image from 'next/image'
import { LOGO } from '@/utils/const'
const Header = () => {
  return (
  <div className='absolute my-1 left-38'>
      <Image 
        src={LOGO} 
        alt="logo"
        width={80}
        height={80} 
        className='w-47 h-20 '
      />
    </div>
       
  )
}

export default Header