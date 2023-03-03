import React from 'react';
import cardImg from "../assets/Hero/image 1.png";
import {FaUsers} from "react-icons/fa";
import {AiOutlineClockCircle,AiOutlineArrowRight} from "react-icons/ai"

const Card = () => {
    return (
        <div className='rounded-lg lg:ml-0 md:ml-0 ml-5 border-2 border-gray-200 hover:border-black/70 '>
        <div className='rounded-lg'>
            <img className='rounded-t-lg md:w-[440px] lg:w-[400px]' src={cardImg} alt="/" />
        </div>
       <div className=' '>
       <div className='flex justify-start bg-[#1D2939] px-[16px] py-[8px] text-white '>
            <span className='bg-[#101828] px-[8px] py-[4px] text-[12px] md:hidden lg:block hidden'>ব্যাচ ২৬ </span>
            <span className='flex items-center  text-[12px] ml-2 bg-[#475467] rounded-[4px] px-[8px] py-[4px]'> <FaUsers className='mr-1'/>২০ টি সিট বাকি </span>
            <span className='flex  items-center  text-[12px]  ml-2 bg-[#475467] rounded-[4px] px-[8px] py-[4px]'> <AiOutlineClockCircle className='mr-1'/> ৫ দিন বাকি</span>
        </div>
        <div className='lg:w-full ' >
            <h4 className='text-[20px] font-bold px-[8px] py-[16px]'>SolidWorks with Keyshot</h4>
            <div className='flex justify-between items-center px-[12px] py-[16px]'>
               <div>
               <p className='text-[#FF8C4B] text-[14px] stroke-[#FF8C4B] line-through font-[500]'>3000 TK</p>
                <p className='text-[18px] font-semibold'>2000 TK</p>
               </div>
                <button className='flex items-center px-[24px] py-[16px] bg-[#EAECF0] hover:bg-[#d0d9eb]'>বিস্তারিত দেখি <AiOutlineArrowRight className='ml-2 font-bold'/> </button>

            </div>
        </div>
       </div>
        

        </div>
    );
};

export default Card;