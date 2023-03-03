import React from 'react';
import img from "../assets/Hero/image 16.png"
import logo from "../assets/Hero/image 23.png"
import Carousel from '../Guideline/Carousel';
import cardImg from "../assets/Hero/image 1.png"
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper';
import { BiPlayCircle } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { AiOutlineArrowRight, AiOutlineClockCircle } from 'react-icons/ai';
import smImg from "../assets/Hero/image 1 (1).png"
import Card from '../Courses/Card';

const WorkShop = () => {
    const array=[0,1,2];
    return (
        <div className='w-full h-full   lg:mt-[72px] md:mt-[72px]  '>
        <div className='w-full h-full ' >
            <div className='lg:w-[1000px] lg:mx-auto '>
        
                <div className='bg-[#FFFFFF] mt-[24px] '>
               <div className='p-[24px]'>
               <h2 className='flex justify-start items-center '> <img src={logo} alt="" />
                <span className='ml-[16px]  lg:text-[22px]  md:text-[22px] text-[18px] '>ওয়ার্কশপ</span></h2>
               </div>
                   <div className='lg:grid md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[24px] p-[24px]  hidden  '>
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
        <div className=' border-r-2 border-l-2 border-b-2  '>
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
                <button className='flex items-center px-[24px] py-[16px] bg-[#FFFBEE] border-2-[#FFC000] hover:bg-[#d0d9eb]'>বিস্তারিত দেখি <AiOutlineArrowRight className='ml-2 font-bold'/> </button>

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

export default WorkShop;