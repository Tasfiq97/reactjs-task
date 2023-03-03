import React from 'react';
import img from "../assets/Hero/google-play 1.png"
import logo1 from "../assets/Hero/image 5 (1).png"
import logo2 from "../assets/Hero/image 12.png"
import logo3 from "../assets/Hero/image 13.png"
import logo4 from "../assets/Hero/image 14.png"
import logo5 from "../assets/Hero/image 11.png"
const Footer = () => {
    return (
        <div className='w-full h-full mt-10 bg-[#FFFBEE] lg:grid lg:grid-cols-4 gap-4 md:grid md:grid-cols-4 p-10 '>
            <div>
                <img src={img} alt="/" />
                <p className='p-4'>কমিউনিটি -এর সাথে কানেক্টেড থাকতে</p>
                  <div className='flex items-center p-4 ml-4'>
        <img className='hover:border-2 border-[#FFC000] duration-200 p-2 rounded-xl' src={logo1}alt="" />
        <img className=' hover:border-2 border-[#FFC000] duration-200 p-2 rounded-xl' src={logo2} alt="" />
        <img className=' hover:border-2 border-[#FFC000] duration-200 p-2 rounded-xl' src={logo3} alt="" />
        <img className=' hover:border-2 border-[#FFC000] duration-200 p-2 rounded-xl' src={logo4} alt="" />
        <img className=' hover:border-2 border-[#FFC000] duration-200 p-2 rounded-xl' src={logo5} alt="" />
                  </div>
            </div>
            <div className='p-2'>
           <p className='hover:underline text-[16px] hover:text-red-400 cursor-pointer duration-300'>জয়েন করুন এক্সপার্টদের টিমে</p>
           <p>ব্লগ</p>
            </div>
            <div className='p-2'>
           <span className='hover:underline hover:text-red-400 cursor-pointer duration-300 text-[16px]'>Ka-6/a, Navana Sylvania,Baridhara Road,Nadda <br />
           <span> Gulshan-2, Dhaka-1212</span>
           </span>
            </div>

            <div className='p-2'>
           <p className='text-[16px] hover:underline hover:text-red-400 cursor-pointer duration-300'>Terms & Conditions</p>
         
            </div>
            
            
        </div>
    );
};

export default Footer;