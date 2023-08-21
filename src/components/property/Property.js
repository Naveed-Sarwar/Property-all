import React from 'react'

import Image from 'next/image';
const Property = ({img , price}) => {
  return (
    <div className='rounded-[5px] border-gray border-[1px] pb-2'>
        <Image src={img} className='rounded-t-[5px] bg-cover bg-no-repeat  h-44 '/> 
         
          <p className='pt-1 text-center text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Revenue</p>
        <p className= 'text-center text-[#200955]'><span className='font-bold text-[1.1rem] leading-[1rem]'>${price}</span>/mo</p>   </div>
  )
}

export default Property