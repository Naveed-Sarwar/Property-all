import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';
import Img from "../../../assets/one.jpg";
import ImgTwo from "../../../assets/two.jpg";
import ImgThree from "../../../assets/three.jpg";
import ImgFour from "../../../assets/four.jpg";
import ImgFive from "../../../assets/five.jpg";
import ImgSix from "../../../assets/six.jpg";
import ImgSeven from "../../../assets/seven.jpg";
import ImgEight from "../../../assets/eight.jpg";
import ImgNine from "../../../assets/nine.jpg";
import ImgTen from "../../../assets/ten.jpg";
import ImgEleven from "../../../assets/eleven.jpg";
import ImgTwelve from "../../../assets/twelve.jpg";
import ImgThirtheen from "../../../assets/thirtheen.jpg";
import ImgFourtheen from "../../../assets/fourtheen.jpg";
import ImgFiftheen from "../../../assets/fiftheen.jpg";
import ImgSixtheen from "../../../assets/sixtheen.jpg";
import ImgSeventheen from "../../../assets/seventheen.jpg";
import ImgEighteen from "../../../assets/eighteen.jpg";
import ImgNinetheen from "../../../assets/ninetheen.jpg";
import ImgTwenty from "../../../assets/twenty.jpg";
import ImgTwentyOne from "../../../assets/twentyOne.jpg";
import ImgTwentyTwo from "../../../assets/twentyTwo.jpg";
import ImgTwentyThree from "../../../assets/twentyThree.jpg";
import ImgTwentyFour from "../../../assets/twentyFour.jpg";
import ImgTwentyFive from "../../../assets/twentyFive.jpg";
import ImgTwentySix from "../../../assets/twentySix.jpg";
import ImgTwentySeven from "../../../assets/twentySeven.jpg";
import ImgTwentyEight from "../../../assets/twentyEight.jpg";
import ImgTwentyNine from "../../../assets/twentyNine.jpg";
import ImgThirty from "../../../assets/thirty.jpg";
import ImgThirtyOne from "../../../assets/thirtyOne.jpg";
import ImgThirtyTwo from "../../../assets/thirtyTwo.jpg";
import ImgThirtyThree from "../../../assets/thirtyThree.jpg";
import ImgThirtyFour from "../../../assets/thirtyFour.jpg";
import ImgThirtyFive from "../../../assets/thirtyFive.jpg";
import ImgThirtySix from "../../../assets/thirtySix.jpg";
import ImgThirtySeven from "../../../assets/thirtySeven.jpg";
import ImgThirtyEight from "../../../assets/thirtyEight.jpg";
import ImgThirtyNine from "../../../assets/thirtyNine.jpg";

const ImgPopup = ({ open, setOpen }) => {

  const images = [
    { img: Img },
    { img: ImgTwo },
    { img: ImgThree },
    { img: ImgFour },
    { img: ImgFive },
    { img: ImgSix },
    { img: ImgSeven },
    { img: ImgEight },
    { img: ImgNine },
    { img: ImgTen },
    { img: ImgEleven },
    { img: ImgTwelve },
    { img: ImgThirtheen },
    { img: ImgFourtheen },
    { img: ImgFiftheen },
    { img: ImgSixtheen },
    { img: ImgSeventheen },
    { img: ImgEighteen },
    { img: ImgNinetheen },
    { img: ImgTwenty },
    { img: ImgTwentyOne },
    { img: ImgTwentyTwo },
    { img: ImgTwentyThree },
    { img: ImgTwentyFour },
    { img: ImgTwentyFive },
    { img: ImgTwentySix },
    { img: ImgTwentySeven },
    { img: ImgTwentyEight },
    { img: ImgTwentyNine },
    { img: ImgThirty },
    { img: ImgThirtyOne },
    { img: ImgThirtyTwo },
    { img: ImgThirtyThree },
    { img: ImgThirtyFour },
    { img: ImgThirtyFive },
    { img: ImgThirtySix },
    { img: ImgThirtySeven },
    { img: ImgThirtyEight },
    { img: ImgThirtyNine },
  ]

  return (
    <div className='fixed inset-0 bg-white z-[100]  h-[auto] overflow-y-scroll '>

      <div className='absolute right-6 top-4'>
        <RxCross2 fontSize={28} onClick={() => setOpen(!open)} claassName="cursor-pointer border-[1px] border-gray" />
      </div>

      <div className='w-9/12 pt-28 flex justify-center flex-col mx-auto overflow-scroll'>
        {/* <Image onClick={() => setOpen(!open)} src={Img} className="cursor-pointer rounded-[1rem]" /> */}
        {/* <br /> */}
        {/* <Image src={ImgTwo} className="cursor-pointer rounded-[1rem]" /> */}
        {/* <br /> */}
        {/* <Image src={ImgThree} className="cursor-pointer  rounded-[1rem]" /> */}

        {
          images?.map((item) => {
            return <>
              <br />
              <Image src={item.img} className="cursor-pointer  rounded-[1rem]" />
            </>
          })
        }
        <br />
        {/* <br />
<Image src={ImgFour} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgFive} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgSix} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgSeven} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgEight} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgNine} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgTen} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgEleven} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgTwelve} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgThirtheen} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgFourtheen} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgFiftheen} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgSixtheen} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgSeventheen} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgEighteen} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgNinetheen} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgTwenty} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgTwentyOne} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgTwentyTwo} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgTwentyThree} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgTwentyFour} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgTwentyFive} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgTwentyFive} className="cursor-pointer  rounded-[1rem]" />
<br />
<Image src={ImgTwentyFive} className="cursor-pointer  rounded-[1rem]" /> */}

      </div>
    </div>
  )
}

export default ImgPopup;
