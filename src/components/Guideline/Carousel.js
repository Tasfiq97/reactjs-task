import React from 'react';
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper';
import { BiPlayCircle} from "react-icons/bi";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Carousel.css"

const Carousel = ({data}) => {

    return (
        <div className='h-full '>
            
             <Swiper
              modules={[Navigation,Pagination, Scrollbar, A11y,FreeMode]}
              freeMode={true}
              watchSlidesProgress={true}
              navigation
              className="carousel-slider"
              breakpoints={
                {
                    0:{
                        slidesPerView:1.1,
                        spaceBetween:10,
                     
                    },
                    480:{
                        slidesPerView:1.1,
                        spaceBetween:10,
                        
                    },
                    768:{
                        slidesPerView:3,
                        spaceBetween:60,
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
       {data.map((data)=><SwiperSlide   key={data.id}> 
      <div className='md:h-[260px] lg:-[260px] h-[300px] w-[250px] hover:bg-black/10 hover:border-2  border-[#FFC000] group  bg-black/10 mb-10 '>
     <div className='hover:bg-black/10'>
     <img className='hover:bg-black/10 group-hover:opacity-[0.6]' src={data.img1} alt="" />
     </div>
        <span className='flex justify-center items-center text-[14px] mt-[12px] mb-1'><BiPlayCircle className='mr-2'/> ক্যারিয়ার করুন ওয়েব ডিজাইনে </span>
         <hr  className=''/>
         <div className='flex justify-start items-center px-[16px] py-[12px] mb-2 '>
            <div>
                <img className='mr-2' src={data.img2} alt="" />
            </div>
            <div>
            <span className=' text-[14px]'> Instructor Name</span>
             <p className=' text-[12px]'>Expertise field name</p>
            </div>
         </div>

      </div>
       </SwiperSlide>)}
       
    </Swiper>
            
        </div>
    );
};

export default Carousel;