import React from 'react';
import img from "../assets/Hero/image 26.png"

const CareerCard = () => {
    return (
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
    );
};

export default CareerCard;