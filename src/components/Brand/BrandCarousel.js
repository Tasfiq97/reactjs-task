import React from 'react';

import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper';
import img1 from "../assets/Hero/Frame 12523.png"
import img2 from "../assets/Hero/Frame 12527.png"
import img3 from "../assets/Hero/Frame 12525.png"
import img4 from "../assets/Hero/Frame 12524.png"
import img5 from "../assets/Hero/Frame 12525.png"
const BrandCarousel = ({data}) => {
    return (
        <div className='h-full w-full pb-20 '>
            
        <Swiper
         modules={[Navigation,Pagination, Scrollbar, A11y,FreeMode]}
         freeMode={true}
         watchSlidesProgress={true}
         navigation
         className="carousel-slider"
         breakpoints={
           {
               0:{
                   slidesPerView:1.6,
                   spaceBetween:5,
                
               },
               480:{
                   slidesPerView:2,
                   spaceBetween:10,
                   
               },
               768:{
                   slidesPerView:3,
                   spaceBetween:60,
               },
               1024:{
                   slidesPerView:7,
                   spaceBetween:20,
               },
               1280:{
                   slidesPerView:7,
                   spaceBetween:20,
               },
               
           }
         }

 onSlideChange={() => console.log('slide change')}
 onSwiper={(swiper) => console.log(swiper)}
>
    <SwiperSlide   > 

<div className=''>
<img className='' src={img1} alt="" />
</div>
  </SwiperSlide>
  <SwiperSlide   > 

<div className=''>
<img className='' src={img2} alt="" />
</div>
  </SwiperSlide>
  <SwiperSlide   > 

<div className=''>
<img className='' src={img3} alt="" />
</div>
  </SwiperSlide>
  <SwiperSlide   > 

<div className=''>
<img className='' src={img4} alt="" />
</div>
  </SwiperSlide>
  <SwiperSlide   > 

<div className=''>
<img className='' src={img5} alt="" />
</div>
  </SwiperSlide>
  <SwiperSlide   > 

<div className=''>
<img className='' src={img1} alt="" />
</div>
  </SwiperSlide>
  <SwiperSlide   > 

<div className=''>
<img className='' src={img2} alt="" />
</div>
  </SwiperSlide>
  <SwiperSlide   > 

<div className=''>
<img className='' src={img3} alt="" />
</div>
  </SwiperSlide>
  <SwiperSlide   > 

<div className=''>
<img className='' src={img4} alt="" />
</div>
  </SwiperSlide>
  <SwiperSlide   > 

<div className=''>
<img className='' src={img5} alt="" />
</div>
  </SwiperSlide>
  
</Swiper>
       
   </div>
    );
};

export default BrandCarousel;