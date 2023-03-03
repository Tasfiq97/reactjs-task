import React from 'react';
import img from "../assets/Hero/image 26.png"
import logo from "../assets/Hero/image 27.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, FreeMode, Navigation } from 'swiper';

import CareerCard from './CareerCard';

const Career = () => {
    const array=[0,1,2];
    return (
        <div className='w-full h-full md:mt-2 lg:mt-2 mt-[34px]'>
        <div className='w-full h-full ' >
            <div className='lg:w-[1000px] lg:mx-auto '>
    
                <div className='bg-[#FFFFFF] mt-[24px] '>
               <div className='p-[24px]'>
               <h2 className='flex justify-start items-center '> <img src={logo} alt="" />
                <span className='ml-[16px]  lg:text-[22px]  md:text-[22px] text-[18px] '>ক্যারিয়ার গাইডলাইন নিয়ে আরও জানতে পড়ুন</span></h2>
                <p>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
               </div>
                   <div className='lg:grid md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[24px] p-[24px] lg-[1000px]  hidden  '>
                    {array.map((data)=><CareerCard data={data}/>)}

                   </div>
                   <div>
                   <div className='h-full md:hidden lg:hidden sm:block '>
            
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
      <div className='rounded-lg lg:ml-0 md:ml-0 ml-5 border-2 border-gray-200 hover:border-[#FFC000] duration-200 '>
        <div className='rounded-lg'>
            <img className='rounded-t-lg' src={img} alt="/" />
        </div>
       <div className=' '>
        <div className=' ' >
            <p className='text-[#475467] p-2'>March 3, 2022 . 5 min read</p>
            <h4 className='text-[20px] font-bold p-2'>IELTS Reading Test</h4>
            <div className='flex justify-between items-center px-[12px] py-[16px]'>
               <div>
                 <p  className='text-[#475467] mt-[15px]'>IELTS Reading</p>
               </div>
               

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

export default Career;