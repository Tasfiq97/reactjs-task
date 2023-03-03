import React from 'react';
import imageExp from "../assets/Hero/Rectangle 196.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from "swiper";
import { FaUsers } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineClockCircle } from "react-icons/ai";
import walton from "../assets/Hero/Rectangle 196 (1).png";
import misfit from "../assets/Hero/Frame 12910.png";

const CarouselExp = ({data}) => {
    return (
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
                   slidesPerView:1.5,
                   spaceBetween:10,
                   
               },
               768:{
                   slidesPerView:3,
                   spaceBetween:30,
               },
               1024:{
                   slidesPerView:4,
                   spaceBetween:30,
               },
               1280:{
                   slidesPerView:4,
                   spaceBetween:30,
               },
               
           }
         }

 onSlideChange={() => console.log('slide change')}
 onSwiper={(swiper) => console.log(swiper)}
>
  {data.map((data)=><SwiperSlide   key={data.id}> 
    
  <div className="relative rounded-lg lg:ml-0 md:ml-0 ml-5 hover:scale-105 ">
<div className="rounded-lg">
  <img
    className="rounded-t-lg md:w-[440px] lg:w-[400px]"
    src={imageExp}
    alt="/"
  />
</div>
<div className=" lg:w-full md:w-full absolute top-[200px] w-[240px] rounded-lg bg-black/60 px-[8px] py-[16px]  ">
  <div className="  text-white">
    <h4 className="text-[16px] font-bold mb-[8px]">
    Kazi Ahad Islam (Erfan)
    </h4>
    <p className='text-[11px] mb-[8px]'>Country HR Manager, Amann Group</p>
    <div className="flex justify-around items-center">
    <img src={walton} alt="" />
      <img src={misfit} alt="" />
      <img src={walton} alt="" />
    </div>
     
  </div>
</div>
</div>
  </SwiperSlide>)}
  
</Swiper>
       
   </div>
    );
};

export default CarouselExp;






{/* <div className="relative rounded-lg lg:ml-0 md:ml-0 ml-5 border-2 border-gray-200 hover:border-black/70 ">
<div className="rounded-lg">
  <img
    className="rounded-t-lg md:w-[440px] lg:w-[400px]"
    src={imageExp}
    alt="/"
  />
</div>
<div className=" w-full absolute top-[300px] rounded-lg bg-black/60  ">
  <div className="  text-white">
    <h4 className="text-[20px] font-bold px-[8px] py-[16px]">
    Kazi Ahad Islam (Erfan)
    </h4>
    <p>Country HR Manager, Amann Group</p>
    <div className="flex justify-around items-center">
    <img src={walton} alt="" />
      <img src={misfit} alt="" />
      <img src={walton} alt="" />
    </div>
     
  </div>
</div>
</div> */}