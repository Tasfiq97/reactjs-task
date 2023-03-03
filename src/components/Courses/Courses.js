import React from 'react';
import img from "../assets/Hero/image 16.png"
import logo from "../assets/Hero/image 19.png"
import { Swiper, SwiperSlide, } from 'swiper/react';
import {  Pagination, Scrollbar, A11y, FreeMode } from 'swiper';
import Card from './Card';
import { FaUsers } from 'react-icons/fa';
import { AiOutlineArrowRight, AiOutlineClockCircle } from 'react-icons/ai';
import smImg from "../assets/Hero/image 1 (1).png"
const Courses = () => {
   const array=[0,1,2,3,4,5];
    return (
        <div className='w-full h-full md:mt-2 lg:mt-2 mt-[34px]'>
        <div className='w-full h-full ' >
            <div className='lg:w-[1000px] lg:mx-auto '>
                <div>
            <h2 className='flex justify-start items-center '> <img className='mt-10' src={img} alt="" />
                <span className='ml-[16px] mt-10 lg:text-[36px] md:text-[36px] text-[20px] '> Ostad helps you in your career with</span></h2>
                <p className='mt-2 text-[16px]'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
                </div>

                <div className='bg-[#FFFFFF] mt-[24px] '>
               <div className='p-[24px]'>
               <h2 className='flex justify-start items-center '> <img src={logo} alt="" />
                <span className='ml-[16px]  lg:text-[22px]  md:text-[22px] text-[18px] '>লাইভ কোর্সসমূহ</span></h2>
               </div>
                   <div className='lg:grid md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[24px] p-[24px] lg-[1000px]  hidden  '>
                    {array.map((data)=><Card data={data}/>)}

                   </div>
                   <div>
                   <div className='h-full md:hidden lg:hidden sm:block '>
            
            <Swiper
             modules={[Pagination, Scrollbar, A11y,FreeMode]}
             freeMode={true}
             watchSlidesProgress={true}
             className="carousel-slider"
             breakpoints={
               {
                0:{
                    slidesPerView:1.3,
                    spaceBetween:10,
                 
                },
                480:{
                    slidesPerView:1.7,
                    spaceBetween:10,
                    
                },
                768:{
                 slidesPerView:2,
                 spaceBetween:20,
                 
             },
               }
             }

     onSlideChange={() => console.log('slide change')}
     onSwiper={(swiper) => console.log(swiper)}
   >
      {array.map((data)=><SwiperSlide   key={data.i}> 
      <div className='rounded-lg lg:ml-0 md:ml-0 ml-5'>
        <div className='rounded-lg'>
            <img className='rounded-t-lg' src={smImg} alt="/" />
        </div>
        <div className=' border-r-2 border-l-2 border-b-2'>
        <div className='flex justify-start  px-[16px] py-[8px] text-white w-full'>
            <span className='flex items-center  text-[12px] ml-2 bg-[#FFF6D9] rounded-[4px] px-[8px] py-[4px] text-black'> <FaUsers className='mr-1'/>২০ টি সিট বাকি </span>
            <span className='flex text-black  items-center  text-[12px]  ml-2 bg-[#FFF6D9] rounded-[4px] px-[8px] py-[4px]'> <AiOutlineClockCircle className='mr-1'/> ৫ দিন বাকি</span>
        </div>
        <div className=' ' >
            <h4 className='text-[20px] font-bold px-[8px] py-[16px]'>SolidWorks with Keyshot</h4>
            <div className='flex justify-between items-center px-[12px] py-[16px] bg-[#FFF6D9] '>
               <div>
               <p className='text-[#FF8C4B] text-[14px] stroke-[#FF8C4B] line-through font-[500]'>3000 TK</p>
                <p className='text-[18px] font-semibold'>2000 TK</p>
               </div>
                <button className='flex items-center px-[24px] py-[16px] bg-[#FFFBEE] border-2 border-[#FFC000] hover:bg-[#FFC000] '>বিস্তারিত দেখি <AiOutlineArrowRight className='ml-2 font-bold'/> </button>

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

export default Courses;