import React, { useState } from 'react'
import { TfiPlus, TfiMinus } from "react-icons/tfi";
const Faq = () => {
    const [show, setShow] = useState(false);
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);
    const [showFive, setShowFive] = useState(false);

    return (
        <div>


            <p className='text-[27px] font-bold text-black -leading-[0.75px] '>FAQ</p>
            <div className='grid lg:grid-cols-2  gap-x-10'>
                <div>
                    <div className='my-5'>
                        <div onClick={() => setShow(!show)} className='cursor-pointer flex items-center justify-between  '>
                            <p className='font-semibold text-[1rem] flex flex-wrap w-4/5 lg:w-auto'>What does it mean when a Here property is "onboarding?"</p>
                            {
                                show ? <TfiMinus fontSize={24} /> : <TfiPlus fontSize={24} />
                            }
                        </div>
                        {
                            show && <>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>  "Onboarding" refers to the period of time in between when we close on a new acquisition and when the respective Here property is hosting guests for the first time.
                                </p>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>
                                    During onboarding, the Here team is hard at work transitioning the property from vacation home status to vacation rental status, and this period can vary in time based on the nature of the property and the local destination market in which the property is located.
                                </p>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>        Some responsibilities that our team must perform during this period include:
                                </p>
                            </>
                        }
                    </div>
                    <div className='my-5'>
                        <div onClick={() => setShowOne(!showOne)} className='cursor-pointer flex items-center  justify-between'>
                            <p className='font-semibold text-[1rem] w-4/5 lg:w-auto'>What does it mean when a Here property is "onboarding?"</p>
                            {
                                showOne ? <TfiMinus fontSize={24} /> : <TfiPlus fontSize={24} />
                            }
                        </div>
                        {
                            showOne && <>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>  "Onboarding" refers to the period of time in between when we close on a new acquisition and when the respective Here property is hosting guests for the first time.
                                </p>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>
                                    During onboarding, the Here team is hard at work transitioning the property from vacation home status to vacation rental status, and this period can vary in time based on the nature of the property and the local destination market in which the property is located.
                                </p>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>        Some responsibilities that our team must perform during this period include:
                                </p>
                            </>
                        }
                    </div>
                    <div className='my-5'>
                        <div onClick={() => setShowTwo(!showTwo)} className='cursor-pointer items-center flex justify-between'>
                            <p className='font-semibold text-[1rem] w-4/5 lg:w-auto'>How will rental income be distributed to investors?</p>
                            {
                                showTwo ? <TfiMinus fontSize={24} /> : <TfiPlus fontSize={24} />
                            }
                        </div>
                        {
                            showTwo && <>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>  "Onboarding" refers to the period of time in between when we close on a new acquisition and when the respective Here property is hosting guests for the first time.
                                </p>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>
                                    During onboarding, the Here team is hard at work transitioning the property from vacation home status to vacation rental status, and this period can vary in time based on the nature of the property and the local destination market in which the property is located.
                                </p>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>        Some responsibilities that our team must perform during this period include:
                                </p>
                            </>
                        }
                    </div>
                </div>
                <div>
                    <div className='lg:my-5'>
                        <div onClick={() => setShowThree(!showThree)} className='cursor-pointer flex items-center justify-between'>
                            <p className='font-semibold text-[1rem] w-4/5 lg:w-auto'>How long should I expect to hold my investment for?</p>
                            {
                                showThree ? <TfiMinus fontSize={24} /> : <TfiPlus fontSize={24} />
                            }
                        </div>
                        {
                            showThree && <>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>  "Onboarding" refers to the period of time in between when we close on a new acquisition and when the respective Here property is hosting guests for the first time.
                                </p>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>
                                    During onboarding, the Here team is hard at work transitioning the property from vacation home status to vacation rental status, and this period can vary in time based on the nature of the property and the local destination market in which the property is located.
                                </p>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>        Some responsibilities that our team must perform during this period include:
                                </p>
                            </>
                        }
                    </div>
                    <div className='my-3'>
                        <div onClick={() => setShowFour(!showFour)} className='cursor-pointer flex items-center justify-between'>
                            <p className='font-semibold text-[1rem] w-4/5 lg:w-auto'>What does it mean when a Here property is "onboarding?"</p>
                            {
                                showFour ? <TfiMinus fontSize={24} /> : <TfiPlus fontSize={24} />
                            }
                        </div>
                        {
                            showFour && <>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>  "Onboarding" refers to the period of time in between when we close on a new acquisition and when the respective Here property is hosting guests for the first time.
                                </p>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>
                                    During onboarding, the Here team is hard at work transitioning the property from vacation home status to vacation rental status, and this period can vary in time based on the nature of the property and the local destination market in which the property is located.
                                </p>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>        Some responsibilities that our team must perform during this period include:
                                </p>
                            </>
                        }
                    </div>
                    <div className='my-5'>
                        <div onClick={() => setShowFive(!showFive)} className='cursor-pointer flex items-center justify-between'>
                            <p className='font-semibold text-[1rem] w-4/5 lg:w-auto'>What am I buying?</p>
                            {
                                showFive ? <TfiMinus fontSize={24}  /> : <TfiPlus fontSize={24} />
                            }
                        </div>
                        {
                            showFive && <>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>  "Onboarding" refers to the period of time in between when we close on a new acquisition and when the respective Here property is hosting guests for the first time.
                                </p>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>
                                    During onboarding, the Here team is hard at work transitioning the property from vacation home status to vacation rental status, and this period can vary in time based on the nature of the property and the local destination market in which the property is located.
                                </p>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>        Some responsibilities that our team must perform during this period include:
                                </p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Faq