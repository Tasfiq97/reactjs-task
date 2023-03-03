import React from 'react';
import img from "../assets/Hero/image 17.png";
import Carousel from './Carousel';
import {data} from "../Data/Data"

const Guidline = () => {
    return (
        <div className='w-full h-full md:mt-0 lg:mt-0 mt-[34px] bg-[#101828]'>
            <div className='w-full h-full ' >
                <div className='lg:w-[1000px] lg:mx-auto text-white'>
                <h2 className='flex justify-start items-center '> <img className='mt-10' src={img} alt="" />
                    <span className='ml-[16px] mt-10 lg:text-[26px] md:text-[26px] text-[20px] '> এক্সপার্টদের ক্যারিয়ার গাইডলাইন</span></h2>

                    <div className=''>
                    <div className='h-full  mt-8'>
                        <Carousel data={data}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guidline;