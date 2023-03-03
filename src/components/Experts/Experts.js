import React from "react";
import logo from "../assets/Hero/image 25.png";
import imageExp from "../assets/Hero/Rectangle 196.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from "swiper";
import { FaUsers } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineClockCircle } from "react-icons/ai";
import walton from "../assets/Hero/Rectangle 196 (1).png";
import misfit from "../assets/Hero/Frame 12910.png";
import CarouselExp from "./CarouselExp";

const Experts = () => {
  const array = [0, 1, 2, 3,4,5,6,7];
  return (
    <div className="w-full h-full   lg:mt-[72px] md:mt-[72px]  ">
      <div className="w-full h-full ">
        <div className="lg:w-[1000px] lg:mx-auto ">
          <div className=" mt-[24px] ">
            <div className="p-[24px]">
              <h2 className="flex justify-start items-center ">
                {" "}
                <img src={logo} alt="" />
                <span className="ml-[16px]  lg:text-[22px]  md:text-[22px] text-[18px] ">
                  ক্যারিয়ার গড়তে ইন্ডাস্ট্রি এক্সপার্টগন
                </span>
              </h2>
              <p>
                স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন
                নিচের বাটনে।
              </p>
            </div>
            <div className="h-full  mt-8 ">
               
                <CarouselExp data={array} />
               
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
