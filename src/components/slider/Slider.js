import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Imge from "../../../assets/property-img.jpeg";
import Image from 'next/image';
import SwiperCore, { Navigation } from 'swiper';
import { FiArrowDown } from 'react-icons/fi';
import { MdArrowBackIosNew } from 'react-icons/md';
import Arrow from "../../../assets/arrow.svg";
import ArrowLeft from "../../../assets/arrow-left.svg";
SwiperCore.use([Navigation]);

const Slider = () => {

    return (
        <div className='relative rounded-t-[5px]'>
            <Swiper
                slidesPerView={1}
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                loop
                className="custom-navigation lg:h-auto h-72  lg:w-[350px] rounded-t-[5px]"

            >
          
                <SwiperSlide>
                    <Image src={Imge}  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Imge}  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Imge}  />
                </SwiperSlide>

                <div className="custom-swiper-button-next absolute cursor-pointer left-2 top-[25%] lg:top-[40%]  rounded-full z-10 w-14 h-14 p-3">
                    {/* Insert your custom next arrow icon or element here */}
                    <Image src={ArrowLeft} /> {/* <MdArrowBackIosNew    /> */}
                </div>
                <div className="custom-swiper-button-prev absolute cursor-pointer right-2 top-[25%] lg:top-[40%]  rounded-full z-10 w-14 h-14 p-3">
                    <Image src={Arrow} />  {/* Insert your custom previus arrow icon or element here */}

                </div>
            </Swiper>
        </div>
    );
};

export default Slider;
