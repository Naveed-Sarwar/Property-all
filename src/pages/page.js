import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// // import styles from '@/styles/Home.module.css'
import { FiAlertCircle } from "react-icons/fi";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import PropertyCard from '@/components/propertyCard/PropertyCard';
import Property from '@/components/property/Property';
import ImgPopup from '@/components/imgPopup/ImgPopup';
import Img from "../../assets/one.jpg";
import ImgTwo from "../../assets/two.jpg";
import ImgThree from "../../assets/three.jpg";
import Tab from '@/components/tab/Tab'
import Chart from '@/components/chart/BarChart'
import BarChart from '@/components/chart/BarChart'
import Map from '@/components/map/Map'
import Link from 'next/link';
import One from "../../assets/1.jpeg";
import Two from "../../assets/2.jpg";
import Three from "../../assets/3.jpg";
import Four from "../../assets/4.jpeg";
// import styles from "../styles/swiper-custom.css";
import PropertyOne from "../../assets/soldOne.webp";
import PropertyTwo from "../../assets/soldTwo.webp";
import PropertyThree from "../../assets/soldThree.webp";
const inter = Inter({ subsets: ['latin'] })

export default function Page() {
    const [open, setOpen] = useState(false);
    const [totalInvestment, setTotalInvestment] = useState(false);
    const [financing, setFinancing] = useState(false);
    const [loan, setLoan] = useState(false);
    const [amortization, setAmortization] = useState(true);
    const [revenue, setRevenue] = useState(false);
    const [expenses, setExpenses] = useState(false);
    const [pricePurchaseFactor, setPricePurchaseFactor] = useState("0");
    const [purchasePrice, setPurchasePrice] = useState("350,000");
    const [closingCosts, setClosingCosts] = useState("2.75");
    const [immediateRepairs, setImmediateRepairs] = useState("0");
    const [furnishingCost, setFurnishingCost] = useState("17,500");
    const [initialExpenses, setInitialExpenses] = useState("7000");
    const [interestRate, setInterestRate] = useState("7.75");
    const [amortizationTerm, setAmortizationTerm] = useState("30");

    const [downPaymentMin, setDownPaymentMin] = useState("70,000");
    const [downPaymentMax, setDownPaymentMax] = useState("20");
    const [loanClosingCost, setLoanClosingCost] = useState("1.5");
    const [revpan, setRevpan] = useState("474");
    const [otherIncome, setOtherIncome] = useState("0");
    const [channelFess, setChanneleFees] = useState("3");
    const [projectManagementFee, setProjectManagementFee] = useState("0");
    const [supplyFee, setSupplyFee] = useState("144");
    const [propertyTaxes, setPropertyTaxes] = useState("292");
    const [insurance, setInsurance] = useState("146");
    const [hoa, setHoa] = useState("0");
    const [utilityOne, setUtilityOne] = useState("721");
    const [utilityTwo, setUtilityTwo] = useState("5");
    const [maintenance, setMaintenance] = useState("721");
    const [otherExpensesMin, setOtherExpensesMin] = useState("0");
    const [otherExpensesMax, setOtherExpensesMax] = useState("0");
    const [show, setShow] = useState(false);
    const [showCap, setShowCap] = useState(false);
    const [showGross, setShowGross] = useState(false);
    const [showCash, setShowCash] = useState(false);
    const [showClosing, setShowClosing] = useState(false);
    const [showFurnishing, setShowFurnishing] = useState(false);
    const [showInitial, setShowInitial] = useState(false);
    const [showInterest, setShowInerest] = useState(false);
    const [showAmortization, setShowAmortization] = useState(false);
    const [showDown, setShowDown] = useState(false);
    const [showLoan, setShowLoan] = useState(false);
    const [showType, setShowType] = useState(false);
    const [showRev, setShowRev] = useState(false);
    const [showMonthly, setShowMonthly] = useState(false);
    const [showOther, setShowOther] = useState(false);
    const [showAnnual, setShowAnnual] = useState(false);
    const [showChannel, setShowChannel] = useState(false);
    const [showProperty, setShowProperty] = useState(false);
    const [showSupply, setShowSupply] = useState(false);
    const [showTaxes, setShowTaxes] = useState(false);
    const [showInsurance, setShowInsurance] = useState(false);
    const [showHoa, setShowHoa] = useState(false);
    const [showUtility, setShowUtility] = useState(false);
    const [showMaintainance, setShowMaintainance] = useState(false);
    const [showExpenses, setShowExpenses] = useState(false);
    const tooltipRef = useRef(null);

    const handleShow = () => {
        setShow(!show);
    }

    const handleClickOutside = (event) => {
        if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
            setShow(false);
            setShowCap(false);
            setShowGross(false);
            setShowCash(false);
            setShowClosing(false);
            setShowFurnishing(false);
            setShowInitial(false);
            setShowInerest(false);
            setShowAmortization(false);
            setShowDown(false);
            setShowLoan(false);
            setShowType(false);
            setShowRev(false);
            setShowMonthly(false);
            setShowOther(false);
            setShowAnnual(false);
            setShowChannel(false);
            setShowProperty(false);
            setShowSupply(false);
            setShowTaxes(false);
            setShowInsurance(false);
            setShowHoa(false);
            setShowUtility(false);
            setShowMaintainance(false);
            setShowExpenses(false);
        }
    };

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener('mousedown', handleClickOutside);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <p className="py-3 text-center text-4xl font-semibold text-[#DEBD6D] ">A A S T H I</p>
            <div className='mx-4  md:w-9/12 md:mx-auto'>
                <div className='grid gap-4 mt-6 grid-cols-2 md:grid-cols-12'>
                    <div className="md:col-span-7">
                        <Image onClick={() => setOpen(!open)} src={Img} className="cursor-pointer h-full rounded-[1rem]" />
                    </div>
                    <div className="md:col-span-5">
                        <Image onClick={() => setOpen(!open)} src={ImgTwo} className="cursor-pointer md:h-64  rounded-[1rem]" />
                        <br />
                        <Image onClick={() => setOpen(!open)} src={ImgThree} className="cursor-pointer md:h-64 rounded-[1rem]" />
                    </div>


                </div>
                {
                    open && <ImgPopup open={open} setOpen={setOpen} />

                }


                <div className='flex items-center justify-between'>
                    <div>
                        <div className='flex gap-2 mt-3 items-center'>
                            <p className='font-bold text-[#333333] text-[1.5rem] md:text-[2.25rem]'>$350,000</p>
                            <p className='bg-[#5FC65F] font-bold text-[0.875rem] h-6 px-2 rounded-xl text-white'>For Sale</p>
                        </div>
                        <p><span className='font-bold'>
                            367 W Clearview Ave,
                            State College, </span> PA 16803</p>
                    </div>
                    <div>
                        <FiHeart className='text-[#959595] h-6 w-6 md:h-9 md:w-9 ' />
                    </div>
                </div>
                <br />
                <hr />
                <div className='flex gap-3 md:gap-14  w-full justify-center py-4 items-center pr-4'>
                    <p><span className='font-extrabold'>5</span><span className='pl-1 text-[12px]'>bd</span></p>
                    <div className='h-6 w-[2px] bg-[#ececec]'></div>
                    <p><span className='font-extrabold'>2.5</span><span className='pl-1 text-[12px]'>ba</span></p>
                    <div className='h-6 w-[2px] bg-[#ececec]'></div>   <p><span className='font-extrabold'>2,544</span><span className='pl-1 text-[12px]'>sqft</span></p>
                    <div className='h-6 w-[2px] bg-[#ececec]'></div> <p className='text-[1rem]'>Townhome</p>
                </div>
                <hr />



                {/* <button className='mt-8 w-full text-center border-[1px] rounded-[0.375rem] font-medium text-[1.125rem] text-[#200955] leading-[1.75rem] hover:bg-slate-50 py-1 my-4'>Connnect with a local agent to learn about regulations</button> */}
                <br />
                <div className='flex gap-4'>

                    <p className='text-[#2e2e2e] pt-2 pb-5'>View property on</p>
                    <div className='flex gap-2'>
                        <Link target="_blank" href="https://www.redfin.com/PA/State-College/367-W-Clearview-Ave-16803/home/119393987">
                            <div className='bg-[red] border-[0.5px] border-black text-white h-10 font-bold text-[1.2rem] w-10 rounded-full  flex items-center justify-center'>R</div>
                        </Link>
                        <Link target="_blank" href="https://www.zillow.com/homes/For-Sale-367-W-Clearview-Ave,-State-College,-PA-16803_rb/75205491_zpid/">

                            <div className='bg-[purple] border-[0.5px] border-black text-white h-10 font-bold text-[1.2rem] w-10 rounded-full  flex items-center justify-center'>Z</div>
                        </Link>     </div>
                </div>
                <br />
                <p className='font-bold text-[1.5rem] leading-[2rem] text-[#200955]'>Revenue Projection</p>
                <BarChart />
                <p className='text-center text-[#a9a9a9]'>Seasonalized based on a market RevPAN of $474</p>
                <br />
                <br />
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                    <div className='border-l-[4px] pl-3'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Revenue</p>
                            <FiAlertCircle onClick={handleShow} className='text-[#a0a0a0] cursor-pointer -mt-1' />
                            {
                                show && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-36 border-[1px] p-2 rounded-md bg-white'>This is the Seasonalized Monthly Revenue based on projections from our Airbnb Calculator.</p>
                            }   </div>
                        <p className='text-[#200955]'><span className='font-bold text-[1.5rem] leading-[2rem]'>$14,414</span>/mo</p>
                    </div>
                    <div className='border-l-[4px] pl-3'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Cap Rate</p>
                            <FiAlertCircle onClick={() => setShowCap(!showCap)} className='text-[#a0a0a0] cursor-pointer -mt-1' />
                            {
                                showCap && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[17rem] border-[1px] p-2 rounded-md bg-white'>The capitalization rate indicates the rate of return of a property and is calculated by dividing net income by property asset value. These rates can be used to compare similar investments within the market.</p>
                            }
                        </div>

                        <p className='text-[#200955]'><span className='font-bold text-[1.5rem] leading-[2rem]'>41%</span></p>
                    </div>
                    <div className='border-l-[4px] pl-3'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Gross Yeild</p>
                            <FiAlertCircle onClick={() => setShowGross(!showGross)} className='text-[#a0a0a0] cursor-pointer -mt-1' />
                            {
                                showGross && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[17rem] border-[1px] p-2 rounded-md bg-white'>The gross yield rate indicates overall rate of return and is calculated by dividing annual revenue by property asset value. These rates can be used to compare similar investments across multiple asset markets.</p>
                            }
                        </div>

                        <p className='text-[#200955]'><span className='font-bold text-[1.5rem] leading-[2rem]'>49.4%</span></p>
                    </div>
                    <div className='border-l-[4px] ]  pl-3'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Cash on Cash</p>
                            <FiAlertCircle onClick={() => setShowCash(!showCash)} className='text-[#a0a0a0] cursor-pointer -mt-1' />
                            {
                                showCash && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[21rem] border-[1px] p-2 rounded-md bg-white'>The Cash-on-Cash rate indicates rate of return based on the cash investment used to secure financing and is calculated by dividing net income by upfront cash investment. These rates can be used to compare the investment opportunity of available cash.</p>
                            }
                        </div>


                        <p className='text-[#200955]'><span className='font-bold text-[1.5rem] leading-[2rem]'>110.1%</span></p>
                    </div>
                </div>


                <br /> <br />
                <br />  <div className='border-[1px] rounded-[5px] ' >
                    <div className='flex px-4 py-4 justify-between'>
                        <p className='font-bold text-[1.5rem] leading-[2rem] text-[#200955]'>Calculator</p>
                    </div>
                    <hr />
                    <br />
                    <div className='flex justify-evenly'>
                        <div className='flex flex-col items-center'>
                            <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Cap Rate</p>
                            <p className='text-[#200955]'><span className='font-bold text-[1.1rem] leading-[2rem]'>41%</span></p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Gross Yield</p>
                            <p className='text-[#200955]'><span className='font-bold text-[1.1rem] leading-[2rem]'>49.4%</span></p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Cash-on-cash</p>
                            <p className='text-[#200955]'><span className='font-bold text-[1.1rem] leading-[2rem]'>110.1%</span></p>
                        </div>
                    </div>
                    <br />
                    <hr />

                    <div onClick={() => setTotalInvestment(!totalInvestment)} className='flex cursor-pointer justify-between items-center px-4 py-2'>
                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[2rem]'>Total Investment</p>
                        <div className='flex gap-0 text-[#232323] font-bold items-center'>
                            <p>$379,750</p>
                            {
                                totalInvestment ? <MdKeyboardArrowDown fontSize={20} /> : <MdKeyboardArrowRight fontSize={20} />
                            }
                        </div>
                    </div>
                    {
                        totalInvestment && <>
                            <hr /><div className='px-4'>

                                <div className='grid md:grid-cols-2 gap-x-8 pb-3'>
                                    {/* <div className='flex w-full flex-col pt-4'>
                                        <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Asking Price</label>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5 text-[#200955] text-[1.2rem]'>$</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div> */}
                                    <div className='flex w-full flex-col pt-4'>
                                        <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Purchase Price Factor</label>
                                        <div className='relative '>
                                            <p className='absolute right-2 top-1.5 text-[#200955] text-[1.2rem]'>%</p>
                                            <input value={pricePurchaseFactor} onChange={(e) => setPricePurchaseFactor(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-3'>
                                        <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Purchase Price</label>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5 text-[#200955] text-[1.2rem]'>$</p>
                                            <input value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>            <div className='flex w-full flex-col pt-3'>
                                        <div className='flex gap-1 items-center'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Closing Costs</label>
                                            <FiAlertCircle onClick={() => setShowClosing(!showClosing)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />     </div>
                                        {
                                            showClosing && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-7 border-[1px] p-2 rounded-md bg-white'>Closing Costs are the fees and charges in excess of the purchase price of the property due at the closing of a real estate transaction. On average, this is 1.5% of Purchase Price.</p>
                                        }   <div className='relative '>
                                            <p className='absolute right-2 top-1.5 text-[#200955] text-[1.2rem]'>%</p>
                                            <input value={closingCosts} onChange={(e) => setClosingCosts(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-3'>
                                        <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Immediate Repairs</label>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5 text-[#200955] text-[1.2rem]'>$</p>
                                            <input value={immediateRepairs} onChange={(e) => setImmediateRepairs(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>            <div className='flex w-full flex-col pt-3'>
                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Furnishing Costs</label>
                                            <FiAlertCircle onClick={() => setShowFurnishing(!showFurnishing)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showFurnishing && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-48 border-[1px] p-2 rounded-md bg-white'>Furnishing Costs are the average costs to fully furnish a Short Term Rental property based on the property’s bedroom count.</p>
                                            }   </div>

                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5 text-[#200955] text-[1.2rem]'>$</p>
                                            <input value={furnishingCost} onChange={(e) => setFurnishingCost(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>            <div className='flex w-full flex-col pt-3'>

                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Initial Expenses</label>
                                            <FiAlertCircle onClick={() => setShowInitial(!showInitial)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showInitial && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[13rem] border-[1px] p-2 rounded-md bg-white'>Initial Expenses are the costs to prepare the property to be a Short Term Rental, including tech set up and consumables that will be used by guests.</p>
                                            }    </div>

                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input value={initialExpenses} onChange={(e) => setInitialExpenses(e.target.value)} className='border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}
                    <hr />

                    <div onClick={() => setFinancing(!financing)} className='flex cursor-pointer justify-between items-center px-4 py-2'>
                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[2rem]'>Financing</p>
                        <div className='flex gap-0 text-[#232323] font-bold items-center'>
                            <p>$2,024/mo</p>
                            {
                                financing ? <MdKeyboardArrowDown fontSize={20} /> : <MdKeyboardArrowRight fontSize={20} />
                            }
                        </div>
                    </div>
                    <hr />
                    {financing && <><div className='px-4'>

                        <div className='grid md:grid-cols-2 gap-x-8 pb-3'>
                            <div>
                                <p className='text-[1.125rem] leading-[1.75rem] mt-3 text-[#a0a0a0]'>Financing Method</p>
                                <div className='grid grid-cols-2 gap-4'>
                                    <button onClick={() => setLoan(0)} className={`h-10 border-[1px] rounded-[5px] text-[1.125rem] leading-[1.75rem] border-solid   ${loan == 0 ? "bg-[#200955] text-white" : "bg-white hover:bg-[#f7f7f7] text-[#200955]"}`}>Loan</button>
                                    <button onClick={() => setLoan(1)} className={`h-10 border-[1px] rounded-[5px] text-[1.125rem] leading-[1.75rem] border-solid   ${loan == 1 ? "bg-[#200955] text-white" : "bg-white hover:bg-[#f7f7f7] text-[#200955]"}`}>Cash Only</button>
                                </div>
                                {
                                    loan == 0 && <>
                                        <p className='text-[1.125rem] leading-[1.75rem] mt-3 text-[#a0a0a0] pb-[0.5px]'>Loan Amount</p>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input disabled placeholder='280,000' className='placeholder:text-[#200955] bg-[#f2f2f3] border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                        <div className='flex items-center gap-1 pt-3'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Interest Rate</label>
                                            <FiAlertCircle onClick={() => setShowInerest(!showInterest)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showInterest && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[22rem] border-[1px] p-2 rounded-md bg-white'>A mortgage rate is the rate of interest charged on a mortgage. Mortgage rates are determined by the lender and can be either fixed, staying the same for the term of the mortgage, or variable, fluctuating with a benchmark interest rate. Mortgage rates vary for borrowers based on their credit profile.</p>
                                            }
                                        </div>

                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                        {
                                            amortization ? <> <div className='flex items-center gap-1 pt-3'>
                                                <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Amortization Term</label>
                                                <FiAlertCircle onClick={() => setShowAmortization(!showAmortization)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                                {
                                                    showAmortization && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[13rem] border-[1px] p-2 rounded-md bg-white'>
                                                        The number of years over which a loan will be completely paid by regular monthly payments of principal and interest. Terms of 20, 25, and 30 years are common.
                                                    </p>}
                                            </div>
                                                <div className='relative '>
                                                    <input value={amortizationTerm} onChange={(e) => setAmortization(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                                </div>
                                            </> : <>
                                                <button className='border-[#e5e7eb] border-[1px] rounded-[5px] h-10 text-center w-full mt-6 hover:bg-[#f7f7f7]'>Get a free landing quote</button>
                                            </>}
                                    </>
                                }
                            </div>
                            <div>

                                {
                                    loan == 0 ? <>
                                        <div className='flex items-center gap-1 pt-3'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Down Payment</label>
                                            <FiAlertCircle onClick={() => setShowDown(!showDown)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showDown && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[21rem] border-[1px] p-2 rounded-md bg-white'>
                                                    A down payment on a house is the sum of money that the buyer pays upfront in a real estate transaction. The amount paid is usually a percentage of the purchase price and can range from as little as 15% to as much as 50% for a property being used as a rental investment.                                                    </p>}  </div>

                                        <div className='flex justify-between'>
                                            <div className='relative w-full '>
                                                <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                                <input value={downPaymentMin} onChange={(e) => setDownPaymentMin(e.target.value)} className='border-[#e5e7eb] border-[1px] rounded-l-[5px] h-10 outline-none pl-6 w-full' />
                                            </div>
                                            <div className='relative w-full '>
                                                <p className='absolute right-2 top-1.5  text-[1.2rem]'>%</p>
                                                <input value={downPaymentMax} onChange={(e) => setDownPaymentMax(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-r-[5px] h-10 outline-none pl-6 w-full' />
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-1 pt-3'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Loan Closing Costs</label>
                                            <FiAlertCircle onClick={() => setShowLoan(!showLoan)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showLoan && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[13rem] border-[1px] p-2 rounded-md bg-white'>
                                                    Loan Closing Costs are the fees and charges in excess of the loan amount to secure the financing to invest in the property. On average, this is 2.75% of the Loan Amount.</p>
                                            }  </div>

                                        <div className='relative '>
                                            <p className='absolute right-2 top-1.5  text-[1.2rem]'>%</p>
                                            <input value={loanClosingCost} onChange={(e) => setLoanClosingCost(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                        <div className='flex items-center gap-1 pt-3'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Interest Type</label>
                                            <FiAlertCircle onClick={() => setShowType(!showType)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showType && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[19rem] border-[1px] p-2 rounded-md bg-white'>
                                                    An interest-only mortgage is a type of mortgage in which the mortgagor (the borrower) is required to pay only the interest on the loan for a certain period. The principal is repaid either in a lump sum at a specified date, or in subsequent payments.</p>
                                            }    </div>
                                        <div className='grid grid-cols-2 gap-4'>
                                            <button onClick={() => setAmortization(!amortization)} className={`h-10 border-[1px] rounded-[5px] text-[1.125rem] leading-[1.75rem] border-solid   ${amortization ? "bg-[#200955] text-white" : "bg-white hover:bg-[#f7f7f7] text-[#200955]"}`}>Amortization</button>
                                            <button onClick={() => setAmortization(!amortization)} className={`h-10 border-[1px] rounded-[5px] text-[1.125rem] leading-[1.75rem] border-solid   ${amortization ? "bg-white hover:bg-[#f7f7f7] text-[#200955]" : "bg-[#200955] text-white "}`}>Interest Only</button>
                                        </div>

                                    </> : <div className='mt-4'>
                                        <button className='border-[#e5e7eb] border-[1px] rounded-[5px] h-10 text-center w-full mt-6 hover:bg-[#f7f7f7]'>Get a free landing quote</button>
                                    </div>
                                }
                            </div>

                        </div>

                    </div>
                        <hr />
                    </>}

                    <div onClick={() => setRevenue(!revenue)} className='flex cursor-pointer justify-between items-center px-4 py-2'>
                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[2rem]'>Revenue</p>
                        <div className='flex gap-0 text-[#232323] font-bold items-center'>
                            <p>$14,414/mo</p>
                            {
                                revenue ? <MdKeyboardArrowDown fontSize={20} /> : <MdKeyboardArrowRight fontSize={20} />
                            }
                        </div>
                    </div>
                    {
                        revenue && <> <hr />
                            <div className='px-4 pb-3'>
                                <div className='grid md:grid-cols-2 gap-x-8 '>
                                    <div>
                                        <div className='flex items-center gap-1 pt-3 '>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>RevPAN</label>
                                            <FiAlertCircle onClick={() => setShowRev(!showRev)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showRev && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[16rem] border-[1px] p-2 rounded-md bg-white'>
                                                    Revenue per Available Night (RevPAN) is the average revenue of each night that the property is available to rent out over an entire year. RevPAN is calculated by multiplying Average Daily Rate (ADR) and Occupancy.</p>
                                            }     </div>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input value={revpan} onChange={(e) => setRevpan(e.target.value)} className='placeholder:text-[#200955] border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                        <p className='text-[#a0a0a0] pt-3 text-[0.9rem]'>$230 is the projected RevPan based on comparable Airbnbs for this specific property, according to our Airbnb Calculator.</p>
                                        <div className='flex items-center gap-1 pt-3 '>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Monthly Revenue</label>
                                            <FiAlertCircle onClick={() => setShowMonthly(!showMonthly)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showMonthly && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[13rem] border-[1px] p-2 rounded-md bg-white'>
                                                    This is the seasonalized average monthly revenue calculated by multiplying RevPAN by 365 days and dividing that by 12 months, and then adding the Other Income.                                                    </p>
                                            }     </div>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input disabled placeholder='14,414' className='placeholder:text-[#200955] bg-[#f2f2f3] border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>

                                    </div>
                                    <div>
                                        <div className='flex items-center gap-1 pt-3 '>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Other Income</label>
                                            <FiAlertCircle onClick={() => setShowOther(!showOther)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showOther && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[9rem] border-[1px] p-2 rounded-md bg-white'>
                                                    This can include any other forms of revenue that this property can generate monthly.           </p>
                                            }     </div>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input placeholder='' value={otherIncome} onChange={(e) => setOtherIncome(e.target.value)} className='placeholder:text-[#200955]  border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                        <p className='text-[#a0a0a0] pt-3 text-[0.9rem]'>$230 is the projected RevPan based on comparable Airbnbs for this specific property, according to our Airbnb Calculator.</p>
                                        <div className='flex items-center gap-1 pt-3 '>
                                            <label className='text-[1.125rem] leading-[1.75rem]  text-[#a0a0a0] pb-[0.5px]'>Annual Revenue</label>
                                            <FiAlertCircle onClick={() => setShowAnnual(!showAnnual)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showAnnual && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[13rem] border-[1px] p-2 rounded-md bg-white'>
                                                    This is the seasonalized average annual revenue calculated by multiplying RevPAN by 365 days and then adding the Other Income multiplied by 12 months.           </p>
                                            }      </div>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input disabled placeholder='172,970' className='placeholder:text-[#200955] bg-[#f2f2f3]  border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    <hr />
                    <div onClick={() => setExpenses(!expenses)} className='flex cursor-pointer justify-between items-center px-4 py-2'>
                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[2rem]'>Expenses</p>
                        <div className='flex gap-0 text-[#232323] font-bold items-center'>
                            <p>$2,455/mo</p>
                            {
                                expenses ? <MdKeyboardArrowDown fontSize={20} /> : <MdKeyboardArrowRight fontSize={20} />
                            }                        </div>
                    </div>

                    {
                        expenses && <>
                            <hr />  <div className='px-4'>

                                <div className='grid md:grid-cols-2 gap-x-8 pb-3'>
                                    <div className='flex w-full flex-col pt-4'>

                                        <div className='flex items-center gap-1  '>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Channel Fees</label>
                                            <FiAlertCircle onClick={() => setShowChannel(!showChannel)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showChannel && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[13rem] border-[1px] p-2 rounded-md bg-white'>
                                                    Channel Fee is the fees and charges associated with listing your property on booking platforms like Airbnb and Vrbo. On average, this is 3% of Revenue  </p>
                                            }      </div>
                                        <div className='relative '>
                                            <p className='absolute right-2 top-1.5 text-[#200955] text-[1.2rem]'>%</p>
                                            <input value={channelFess} onChange={(e) => setChanneleFees} className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-4'>
                                        <div className='flex items-center gap-1 '>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Project Management Fee</label>
                                            <FiAlertCircle onClick={() => setShowProperty(!showProperty)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showProperty && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[15rem] border-[1px] p-2 rounded-md bg-white'>
                                                    Property Management Fee is the fees associated to a 3rd party property manager managing the property on your behalf. On average, this is 25% of Revenue after channel fees are deducted.</p>
                                            }
                                        </div>
                                        <div className='relative '>
                                            <p className='absolute right-2 top-1.5 text-[#200955] text-[1.2rem]'>%</p>
                                            <input value={projectManagementFee} onChange={(e) => setProjectManagementFee(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-3'>
                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Supply Fees</label>
                                            <FiAlertCircle onClick={() => setShowSupply(!showSupply)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showSupply && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[7rem] border-[1px] p-2 rounded-md bg-white'>
                                                    Supply Fees are costs to cover the consumables by the guests.</p>
                                            }       </div>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5 text-[#200955] text-[1.2rem]'>$</p>
                                            <input value={supplyFee} onChange={(e) => setSupplyFee(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>            <div className='flex w-full flex-col pt-3'>
                                        <div className='flex gap-1 items-center'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Property Taxes</label>
                                            <FiAlertCircle onClick={() => setShowTaxes(!showTaxes)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />     </div>
                                        {
                                            showTaxes && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[26px] border-[1px] p-2 rounded-md bg-white'>
                                                This estimate is based on the home value, property type, and an estimated local tax rate. Actual rate or taxes assessed may vary.</p>
                                        }         <div className='relative '>
                                            <p className='absolute right-2 top-1.5 text-[#200955] text-[1.2rem]'>%</p>
                                            <input value={propertyTaxes} onChange={(e) => setPropertyTaxes(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-3'>
                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Insurance</label>
                                            <FiAlertCircle onClick={() => setShowInsurance(!showInsurance)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showInsurance && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[12rem] border-[1px] p-2 rounded-md bg-white'>
                                                    Most lenders require homeowners insurance, which protects your home and property. This is an estimate, and actual rate may vary.</p>
                                            }     </div>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5 text-[#200955] text-[1.2rem]'>$</p>
                                            <input value={insurance} onChange={(e) => setInsurance(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>            <div className='flex w-full flex-col pt-3'>
                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>HOA Fees</label>
                                            <FiAlertCircle onClick={() => setShowHoa(!showHoa)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showHoa && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[15rem] border-[1px] p-2 rounded-md bg-white'>
                                                    Some properties require monthly HOA dues to cover common amenities or services. This is an estimate based on provided information in the MLS, and actual rate may vary.</p>
                                            }
                                        </div>

                                        <div className='relative '>
                                            <input value={hoa} onChange={(e) => setHoa(e.target.value)} className='border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-3'>
                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Utilities</label>
                                            <FiAlertCircle onClick={() => setShowUtility(!showUtility)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {
                                                showUtility && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[7rem] border-[1px] p-2 rounded-md bg-white'>
                                                    Utilities are a monthly expense calculated as percentage of revenue.</p>
                                            }     </div>
                                        <div className='flex justify-between'>
                                            <div className='relative w-full '>
                                                <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                                <input value={utilityOne} onChange={(e) => setUtilityOne(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-l-[5px] h-10 outline-none pl-6 w-full' />
                                            </div>
                                            <div className='relative w-full '>
                                                <p className='absolute right-2 top-1.5  text-[1.2rem]'>%</p>
                                                <input value={utilityTwo} onChange={(e) => setUtilityTwo(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-r-[5px] h-10 outline-none pl-6 w-full' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-3'>
                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Maintenance</label>
                                            <FiAlertCircle onClick={() => setShowMaintainance(!showMaintainance)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {showMaintainance
                                                && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[9rem] border-[1px] p-2 rounded-md bg-white'>
                                                    Maintenance costs are a monthly expense calculated as percentage of revenue.</p>
                                            }     </div>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input value={maintenance} onChange={(e) => setMaintenance(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>     <div className='flex w-full flex-col pt-3'>
                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Other Expenses</label>
                                            <FiAlertCircle onClick={() => setShowExpenses(!showExpenses)} className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            {showExpenses
                                                && <p ref={tooltipRef} className='absolute w-52 border-[#DEBD6D] z-20 mt-[9rem] border-[1px] p-2 rounded-md bg-white'>
                                                    Other Expenses are a monthly expense calculated as percentage of revenue.</p>
                                            }     </div>
                                        <div className='flex justify-between'>
                                            <div className='relative w-full '>
                                                <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                                <input value={otherExpensesMin} onChange={(e) => setOtherExpensesMin(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-l-[5px] h-10 outline-none pl-6 w-full' />
                                            </div>
                                            <div className='relative w-full '>
                                                <p className='absolute right-2 top-1.5  text-[1.2rem]'>%</p>
                                                <input value={otherExpensesMax} onChange={(e) => setOtherExpensesMax(e.target.value)} className=' border-[#e5e7eb] border-[1px] rounded-r-[5px] h-10 outline-none pl-6 w-full' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}
                    <hr />
                    <br />
                    <div className='flex justify-between items-center px-4 py-2'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[#200955] font-bold text-[1.1rem] leading-[2rem]'>Upfront Equity</p>
                            <FiAlertCircle className='text-[#a0a0a0] -mt-1' />     </div>
                        <div className='flex gap-0 text-[#232323] font-bold items-center'>
                            <p>$108,325</p>
                            <MdKeyboardArrowRight fontSize={20} />
                        </div>
                    </div>

                    <div className='flex justify-between items-center px-4 py-2'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[#200955] font-bold text-[1.1rem] leading-[2rem]'>Net Operating Income</p>
                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                        </div>

                        <div className='flex gap-0 text-[#232323] font-bold items-center'>
                            <p>$143,504/yr - $11,959/mor</p>
                            <MdKeyboardArrowRight fontSize={20} />
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-4 pt-2 pb-4'>

                        <div className='flex gap-1 items-center'>
                            <p className='text-[#200955] font-bold text-[1.1rem] leading-[2rem]'>Leveraged Net Cash Flow</p>
                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                        </div>

                        <div className='flex gap-0 text-[#232323] font-bold items-center'>
                            <p>$119,217/yr - $9,935/mo</p>
                            <MdKeyboardArrowRight fontSize={20} />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <p className='font-bold text-[1.5rem] leading-[2rem] text-[#200955]'>Location</p>
                <br />

                <Map />
                <br />
                <br />
                {/* <p className='font-bold text-[1.5rem] leading-[2rem] text-[#200955]'>Market Data</p> */}
                {/* <p className='text-[#2e2e2e] pt-2 pb-5'>Performance of Airbnbs in the overall market for State College, PA 16803. Data displayed is not impacted by filters in this search.</p> */}
                <Tab />
                <button className=' w-full text-center border-[1px] rounded-[0.375rem] font-medium text-[1.125rem] text-[#200955] leading-[1.75rem] hover:bg-slate-50 py-1 my-4'>View more market data for State College</button>
                <p className='font-bold text-[1.5rem] leading-[2rem] text-[#200955] py-8'>Explore recent offers and recently sold homes in State College</p>

                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                    <Link href={"https://airbnb.com/rooms/15986683"} target="_blank">
                        <Property img={One} price={"2,372"} />
                    </Link>
                    <Link href={"https://airbnb.com/rooms/53296055"} target="_blank">
                        <Property img={Two} price={"25,550"} />
                    </Link>
                    <Link href={"https://airbnb.com/rooms/4279441"} target="_blank">
                        <Property img={Three} price="1,825" />
                    </Link>
                    <Link href={"https://airbnb.com/rooms/37485559"} target="_blank">
                        <Property img={Four} price={"27,253"} />
                    </Link>
                </div>
                <br />
                <p className='font-bold text-[1.5rem] leading-[2rem] text-[#200955]'>Recently Sold in State College,PA</p>
                <p className='text-[#2e2e2e] pt-2 pb-5'>Nearby properties for sale with positive cash-on-cash returns</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <Link target='_blank' href={"https://buy.rabbu.com/airbnb-for-sale/2280-bristol-ave-state-college-pa-16801-dnx"}>
                        <PropertyCard img={PropertyOne} price={"407,000"} beds={"3"} description={"716 Tanager Dr"} location={"State College, PA 16803"} bath={"2"} area={"1,544"} revenue={"10,132"} capRate={"25.7"} gross={"31.6"} cash={"60.5"} />
                    </Link>  <Link href={"https://buy.rabbu.com/airbnb-for-sale/101-timber-ln-state-college-pa-16801-wmg"} target='_blank'>

                        <PropertyCard img={PropertyTwo} price={"389,900"} beds={"3"} description={"738 Teal Ln"} location={"State College, PA 16803"} bath={"2.5"} area={"2,051"} revenue={"9,310"} capRate={"13.3"} gross={"17.2"} cash={"20.5"} />
                    </Link>  <Link href={"https://buy.rabbu.com/airbnb-for-sale/190-sussex-dr-state-college-pa-16801-mdj"} target="_blank">
                        <PropertyCard img={PropertyThree} price={"630,000"} description={"133 Southview Cir"} location={"State College, PA 16801"} beds={"5"} bath={"4"} area={"3,724"} revenue={"7,920"} gross={"14.4"} capRate={"10.9"} cash={"12.8"} />
                    </Link>    </div>
                <br /><br />
                {/* <iframe
src="https://www.chatbase.co/chatbot-iframe/uDPj-GB8jN5jChfqXV6R_"
width="100%"
style={{height: '100%', minheight: '700px'}}
frameborder="0"
></iframe> */}
                <div className='bg-[#f8f7f7] rounded-[0.75rem] p-[1rem] md:p-[5rem]'>
                    <p className='font-bold text-[1.5rem] leading-[2rem] text-center text-[#200955] pb-10 md:pb-24'>Explore recent offers and recently sold homes in State College</p>

                    <p className='text-[1.125rem] leading-[1.75rem] cursor-pointer hover:underline'><Link href={"https://www.redfin.com/PA/State-College/116-Abbott-Ln-16801/home/119492827"} target='_blank'>116 Abbott Ln</Link></p>
                    <p className='text-[1.125rem] leading-[1.75rem] cursor-pointer hover:underline'><Link href={"https://www.redfin.com/PA/State-College/343-Oakwood-Ave-16803/home/119338864"} target='_blank'>343 Oakwood Ave</Link> </p>
                    <p className='text-[1.125rem] leading-[1.75rem] cursor-pointer hover:underline'><Link href={"https://www.redfin.com/PA/State-College/194-Sycamore-Dr-16801/home/178419006"} target='_blank'>194 Sycamore Dr</Link></p>
                    <p className='text-[1.125rem] leading-[1.75rem] cursor-pointer hover:underline'><Link href={"https://www.redfin.com/PA/State-College/1716-Woodledge-Cir-16803/home/119316708"} target='_blank'>1716 Woodledge Sir</Link></p>
                    <p className='text-[1.125rem] leading-[1.75rem] cursor-pointer hover:underline'><Link href={"https://www.redfin.com/PA/State-College/2012-Fairwood-Ln-16803/home/119315002"} target='_blank'>2012 Fairwood Ln</Link></p>
                </div>
            </div>
        </div>
    )
}
