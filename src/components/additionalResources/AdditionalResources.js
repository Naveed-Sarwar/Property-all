import React from 'react'
import { BsGraphUpArrow } from "react-icons/bs";
import {IoNewspaperOutline} from "react-icons/io5";
const AdditionalResources = () => {
    return (
        <div>
                <p className='text-[27px] font-bold text-black -leading-[0.75px] '>Additional Resources</p> 
                 <hr className='my-6' />
            <div className='grid md:grid-cols-3 gap-y-4 md:gap-y-0 gap-x-4'>
                <div className='flex gap-6  '>
                    <div>
                        <BsGraphUpArrow fontSize={28} className='mt-2' />
                    </div>
                    <div>
                        <p className='text-[0.9rem] lg:text-[1.1rem]'>Offering Circular</p>
                        <p className='font-bold text-[0.8rem]'>Link</p>
                    </div>
                </div>
                <div className='flex gap-6 '>
                    <div>
                        <IoNewspaperOutline fontSize={28} className='mt-2' />
                    </div>
                    <div>
                        <p className='text-[0.9rem] lg:text-[1.1rem]'>15 Best Family Beaches in <br /> Florida</p>
                        <p className='font-bold text-[0.8rem]'>Market news</p>
                    </div>
                </div>
                <div className='flex gap-6  '>
                    <div>
                        <IoNewspaperOutline fontSize={28} className='mt-2' />
                    </div>
                    <div>
                        <p className='text-[0.9rem] lg:text-[1.1rem]'>The best place to buy a  <br />
                        vacation home in Florida - it’s <br /> not where you think it is</p>
                        <p className='font-bold text-[0.8rem]'>Market news</p>
                    </div>
                </div>    </div>
        </div>
    )
}

export default AdditionalResources