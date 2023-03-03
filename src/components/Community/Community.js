import React, { useState } from 'react';
import img from "../assets/Hero/image 24.png"
import SingleCard from './SingleCard';
import image1 from "../assets/Hero/Rectangle 207.png"
import image2 from "../assets/Hero/Rectangle 207 (1).png"
import image3 from "../assets/Hero/Rectangle 207 (2).png"
import image4 from "../assets/Hero/Rectangle 207 (3).png"
import {RiFacebookCircleLine} from "react-icons/ri"
import {FaUsers} from "react-icons/fa"
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper';

const Community = () => {
    const data=[1,2,3,4,5,6,7,8]
    const [image,setImage]=useState(image1)

    const handleHover=()=>{
        setImage(image1);
    }
    return (
        <div className='w-full h-full md:mt-2 lg:mt-2 mt-[34px]'>
           <div className='w-full h-full'>
            <div className='lg:w-[1000px] lg:mx-auto'>
            <div className='lg:ml-0 ml-4'>
            <h2 className='flex justify-start items-center '> <img className='mt-10' src={img} alt="" />
                <span className='ml-[16px] mt-10 lg:text-[36px] md:text-[36px] text-[20px] '> জয়েন করুন আমাদের কমিউনিটিতে</span></h2>
                <p className='mt-2 text-[16px]'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
                </div> 
            </div>

            <div className='lg:grid md:hidden lg:grid-cols-2 hidden gap-8 mt-[24px] p-10 '>
               <div className=' hover:border-blue-700 p-2 h-full flex items-center border-2 bg-[#FFFFFF]'>
                <div>
                    <img src={image1} alt="" />
                </div>
                <div className='ml-[16px]'>
                     <span className='flex bg-[#E9EFFF] px-[8px] py-[4px] w-[150px] items-center'> <FaUsers className='mr-2'/> 698 members</span>
               <h1 className='text-[20px]'> Flutter Developers Community </h1>
               <span className='text-[20px] font-[700]'>@Bangladesh</span>
               <button className='flex mt-4 justify-center items-center  hover:bg-[#d7dce6] bg-[#EAECF0] w-[400px] mx-auto px-[24px] py-[8px]'>ফেসবুক গ্রুপে জয়েন করুন <RiFacebookCircleLine className='ml-2 text-[26px]'/></button>
                </div>
               </div>
               <div  className=' hover:border-blue-700 border-2 h-full flex p-2 items-center'>
                <div>
                     <img src={image2} alt="" />
                </div>
                <div className='ml-[16px]'>
                <span className='flex bg-[#E9EFFF] px-[8px] py-[4px] w-[150px] items-center'> <FaUsers className='mr-2'/> 698 members</span>
                <h1 className='text-[20px]'> Flutter Developers Community </h1>
               <span className='text-[20px] font-[700]'>@Bangladesh</span>
               <button className='flex mt-4 justify-center items-center  hover:bg-[#d7dce6] bg-[#EAECF0] w-[400px] mx-auto px-[24px] py-[8px]'>ফেসবুক গ্রুপে জয়েন করুন <RiFacebookCircleLine className='ml-2 text-[26px]'/></button>
                </div>
               </div>
               <div className='hover:border-blue-700 border-2 h-full flex p-[2] items-center ' >
                <div>
                    <img src={image3} alt="" />
                </div>
                <div className='ml-[16px]'>
                <span className='flex bg-[#E9EFFF] px-[8px] py-[4px] w-[150px] items-center'> <FaUsers className='mr-2'/> 698 members</span>
                <h1 className='text-[20px]'> Content Creator Community </h1>
               <span className='text-[20px] font-[700]'>@Bangladesh</span>
               <button className='flex mt-4 justify-center items-center  hover:bg-[#d7dce6] bg-[#EAECF0] w-[400px] mx-auto px-[24px] py-[8px]'>ফেসবুক গ্রুপে জয়েন করুন <RiFacebookCircleLine className='ml-2 text-[26px]'/></button>
                </div>
               </div>
               <div className=' hover:border-blue-700 border-2 h-full flex  p-2 items-center '>
                <div>
                    <img src={image4} alt="" />
                </div>
                <div className='ml-[16px]'>
                <span className='flex bg-[#E9EFFF] px-[8px] py-[4px] w-[150px] items-center'> <FaUsers className='mr-2'/> 698 members</span>
                <h1 className='text-[20px]'> UI/UX Designer Community </h1>
               <span className='text-[20px] font-[700]'>@Bangladesh</span>
               <button className='flex mt-4 justify-center items-center  hover:bg-[#d7dce6] bg-[#EAECF0] w-[400px] mx-auto px-[24px] py-[8px]'>ফেসবুক গ্রুপে জয়েন করুন <RiFacebookCircleLine className='ml-2 text-[26px]'/></button>
                </div>
               </div>
            </div>
   <div>
   <div>
                   <div className='h-full lg:hidden sm:block md:block '>
            
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
      {data.map((data)=><SwiperSlide   key={data.i}> 
      <div className='rounded-lg lg:ml-0 md:ml-0 ml-5 mt-10'>
      <div  className=' hover:border-blue-700 border-2 h-full flex flex-shrink-0 flex-col p-2 items-center'>
                <div >
                     <img src={image2} alt="" />
                </div>
                <div className='ml-[16px]'>
                <span className='flex bg-[#E9EFFF] px-[8px] py-[4px] w-[150px] items-center'> <FaUsers className='mr-2'/> 698 members</span>
                <h1 className='text-[16px]'> Flutter Developers Community </h1>
               <span className='text-[16px] font-[700]'>@Bangladesh</span>
               <button className='flex mt-4 justify-center items-center  hover:bg-[#d7dce6] bg-[#EAECF0]  mx-auto px-[24px] py-[8px]'>ফেসবুক গ্রুপে জয়েন করুন <RiFacebookCircleLine className='ml-2 text-[26px]'/></button>
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
    );
};

export default Community;