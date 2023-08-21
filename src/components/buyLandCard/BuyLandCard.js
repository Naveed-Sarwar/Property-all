import Image from 'next/image';
import React from 'react';
import Land from "../../../assets/land.jpeg";
const BuyLandCard = () => {
    return (
        <div className='cursor-pointer flex flex-col justify-center lg:justify-start lg:items-start items-center'>
     
        <div className='h-auto w-[90%] lg:w-64 lg:h-84 mt-4 rounded-md bg-[#1d222d] border-[#575555] border-[1px] p-4'>
            <Image src={Land} alt='land' />
            <p className='font-normal text-xl py-1 text-[#d1d5db]'>APN 174-783 </p>
            <p className='text-[#9ca3af]'>Hyderabad ,Telangana</p>
            <div className='bg-[#111827] mt-2 text-center w-28 rounded-3xl p-2'>
                <span className='text-[#e0e0e0]'>10 Cr{" "}</span><span className='text-[#9ca3af]'>INR</span>
            </div>
        </div>

        </div>
    )
}

export default BuyLandCard;