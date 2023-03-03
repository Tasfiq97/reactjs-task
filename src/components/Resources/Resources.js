import React from 'react';
 import img from "../assets/Hero/image 22.png"
import img2 from "../assets/Hero/Course Image (21).png"
import logo from "../assets/Hero/image 19.png"
import icon from "../assets/Hero/Play Icon color.png"
import Carousel from '../Guideline/Carousel';
import cardImg from "../assets/Hero/image 1.png"
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper';
import { BiPlayCircle, } from 'react-icons/bi';
import { BsCalendarRange} from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { AiOutlineArrowRight, AiOutlineClockCircle,AiFillCalendar } from 'react-icons/ai';
import smImg from "../assets/Hero/image 1 (1).png"
const Resources = () => {
     const data=[0,1,2,3,4,5,6,7]
    return (
        <div className='w-full h-full md:mt-2 lg:mt-2 mt-[34px]'>
            <div className='w-full h-full'>
                <div  className='lg:w-[1000px] lg:mx-auto '>   
             <div>
            <h2 className='flex justify-start items-center '> <img className='mt-10' src={img} alt="" />
                <span className='ml-[16px] mt-10 lg:text-[36px] md:text-[36px] text-[20px] '> Ostad helps you in your career with</span></h2>
                <p className='mt-2 text-[16px]'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
                </div>

                <div className='mt-[40px]'>
                    <div>
                    <div className='h-full '>
            
            <Swiper
             modules={[Navigation,Pagination, Scrollbar, A11y,FreeMode]}
             freeMode={true}
             watchSlidesProgress={true}
             navigation
             pagination={true}
             className="carousel-slider"
             breakpoints={
               {
                0:{
                    slidesPerView:1.3,
                    spaceBetween:10,
                 
                },
                480:{
                    slidesPerView:1.4,
                    spaceBetween:10,
                    
                },
                768:{
                 slidesPerView:2,
                 spaceBetween:20,
                 
             },
                   1024:{
                       slidesPerView:4,
                       spaceBetween:60,
                   },
                   1280:{
                       slidesPerView:4,
                       spaceBetween:60,
                   },
                   
               }
             }

     onSlideChange={() => console.log('slide change')}
     onSwiper={(swiper) => console.log(swiper)}
   >
      {data.map((data,index)=><SwiperSlide className=''   key={index}> 
     <div className='relative md:h-[300px] lg:-[300px] h-[300px] w-[250px] border-2 border-gray-200
     hover:border-[#FFC000]  '>
    <div className=''>
    <img className=' hover:scale-105 duration-300 ' src={img2} alt="" />
    </div>
    <div className='absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <img src={icon} alt="" />
        </div>
      <div className='px-[16px] py-[12px]'>
      <span className=' text-[#475467] items-center text-[15px] mt-[12px] mb-1'> Language Learning </span>
        <p className='font-[600] text-[18px]'>IELTS Listening: 15 Days Challenge</p>
        <div className='flex justify-start items-center px-[16px] py-[12px] mb-2 '>
           
           <div className='flex justify-around w-full'>
           <span className='flex font-[500] items-center text-[14px] text-[#475467]'><AiOutlineClockCircle/> <span className=' text-[12px] ml-2'>60 min</span> </span>
           <span className='flex font-[500]  text-[#475467]  items-center text-[14px]'><BsCalendarRange/> <span className=' text-[12px] ml-2'>30 march, 2022</span> </span>
           </div>
        </div>
      </div>

     </div>
      </SwiperSlide>)}
      
   </Swiper>
           
       </div>
                    </div>

                </div>
                </div>
                </div>
        </div>
    );
};

export default Resources;