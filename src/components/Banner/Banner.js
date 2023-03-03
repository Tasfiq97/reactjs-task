import React from 'react';
 import logo from "../assets/Hero/Group 12285.png"
 import classImg from "../assets/Hero/Vector.png"
 import {FaUsers} from "react-icons/fa";
 import {AiOutlineArrowRight} from "react-icons/ai";
const Banner = () => {
    
    return (
        <div className='w-full md:h-[300px] lg:h-[300px] h-full'>
            <div className=' w-full h-full px-2 '>
           <div className=' bg-[url("https://images.squarespace-cdn.com/content/v1/6176fee0c924795e1be08e18/8cc91305-da33-4109-90ce-58e447316bd8/sincerely-media-HoEYgBL_Gcs-unsplash.jpg?format=2500w")] h-full w-full md:bg-fit bg-center'>
            
            <div className='md:w-[700px] sm:w-[full] lg:w-[700px] lg:mx-48 md:mx-0 md:flex justify-between'>
            <div className='md:mt-[45px] mt-[30px]'>
            <img src={logo} alt="/" />
            </div>
            <div className='md:mt-[30px] lg:mt-[40px] mt-[16px] md:ml-[24px]'>
                <h1 className='md:text-[25px] lg:text-[30px] text-[25px] '>Tech And Development</h1>
                <p className='md:mt-[24px] mt-[16px]'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে। স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
                <div className='flex justify-around items-center mt-[24px] md:w-[400px]'>
                <span className='flex justify-around items-center bg-[#E9EFFF] rounded-[4px] px-[8px] py-[4px] font-[500] '><img className='mr-2' src={classImg} alt="/" />৭টি লাইভ কোর্স</span>
                <span className='flex justify-around items-center bg-[#E9EFFF] rounded-[4px] px-[8px] py-[4px] font-[500] '> <FaUsers className='mr-2' /> ১৪২৪৫ জন Ostad গ্র্যাজুয়েট</span>
                </div>
                <div className='mt-[24px] md:flex '>
                <button className='bg-[#101828] px-[24px] py-[12px] text-white flex justify-center items-center font-[14px] md:w-[200px] md:mx-0 w-[350px] mx-auto hover:bg-[#ffd043] focus:bg-[#FFC000] duration-300'>Start Learning <AiOutlineArrowRight className='ml-[10px]' size={14}/>  </button>
                <button className='md:ml-[16px] px-[24px] py-[12px] border-2 border-[#101828] flex justify-center items-center font-[12px] text-[#101828] md:w-[200px] md:mx-0 w-[360px] mx-auto mt-[16px] md:mt-0 hover:bg-[#fcdb79]'>Assessment </button>
                </div>
            </div>
            </div>

           </div>
            </div>
            
        </div>
    );
};

export default Banner;