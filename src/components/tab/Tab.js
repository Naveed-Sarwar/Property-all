import React, { useState } from 'react'
import { FiAlertCircle } from "react-icons/fi";

const Tab = () => {
    const [tab, setTab] = useState(0);

    return (
        <div>
            <div className='flex gap-8'>
                <p className={`cursor-pointer  text-[1.2rem] ${tab === 0 ? "border-b-4 border-[#200955] font-bold text-[#200955]" : "text-[#c2c2c2]"}`} onClick={() => setTab(0)}>ZIP Code</p>
                <p className={`cursor-pointer   text-[1.2rem] ${tab === 1 ? "border-b-4 border-[#200955] font-bold text-[#200955]" : "text-[#c2c2c2]"}`} onClick={() => setTab(1)}>City</p>
                <p className={`cursor-pointer   text-[1.2rem] ${tab === 2 ? "border-b-4 border-[#200955] font-bold text-[#200955]" : "text-[#c2c2c2]"}`} onClick={() => setTab(2)}>County</p>
            </div>
            <hr />

            {
                tab == 0 ?
                    <>
                        <br />
                        <p className='font-bold text-[1.8rem] leading-[2rem] text-[#200955]'>16803</p>
                        <div className='grid md:grid-cols-3 gap-4 mt-4'>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Avg. ADR Next 30 Days</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>$510</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Avg. Occupancy Next 30 Days</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>51%</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5.5 cursor-pointer' />
                                </div>      <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Seasonalized RevPAN</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>$287</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div> </div>


                            <div className='grid  md:grid-cols-4 gap-4 mt-4'>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Seasonalized Monthly Revenue</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>$8,617</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Seasonalized Annual Revenue</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>$104,835</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Active Listing</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>103</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Active Hosts</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>94</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5.5 cursor-pointer' />
                                </div>         </div>
                    </> : tab == 1 ? <> <br />
                        <p className='font-bold text-[1.8rem] leading-[2rem] text-[#200955]'>State College</p>
                        <div className='grid md:grid-cols-3 gap-4 mt-4'>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Avg. ADR Next 30 Days</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>$496</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Avg. Occupancy Next 30 Days</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>51%</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5.5 cursor-pointer' />
                                </div>      <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Seasonalized RevPAN</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>$279</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div> </div>


                            <div className='grid md:grid-cols-4 gap-4 mt-4'>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Seasonalized Monthly Revenue</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>$8,372</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Seasonalized Annual Revenue</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>$101,861</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Active Listing</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>237</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Active Hosts</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>212</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5.5 cursor-pointer' />
                                </div>         </div>
                                 </> :

                        tab == 2 ? <> <br /> <p className='font-bold text-[1.8rem] leading-[2rem] text-[#200955]'>Centre</p>
                            <div className='grid md:grid-cols-3 gap-4 mt-4'>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Avg. ADR Next 30 Days</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>$407</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Avg. Occupancy Next 30 Days</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>46%</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5.5 cursor-pointer' />
                                </div>      <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Seasonalized RevPAN</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>$207</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div> </div>


                            <div className='grid md:grid-cols-4 gap-4 mt-4'>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Seasonalized Monthly Revenue</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>$6,208</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Seasonalized Annual Revenue</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>$75,526</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Active Listing</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>514</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5 cursor-pointer' />
                                </div>
                                <div className='flex cursor-pointer justify-between border-[1px] border-[#bdbdbd] rounded-[5px] px-4 py-3'>
                                    <div>
                                        <p className='text-[1rem] leading-[1.75rem] text-[#a0a0a0]'>Active Hosts</p>
                                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[1.4rem]'>437</p>
                                    </div>
                                    <FiAlertCircle className='text-[#a0a0a0] mt-1.5.5 cursor-pointer' />
                                </div>         </div>
                        </> : null


            }
        </div>
    )
}

export default Tab