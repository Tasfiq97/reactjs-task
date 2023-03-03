import React, { useState } from "react";
import img from "../assets/logo/logo ostad.png";
import country from "../assets/logo/Rectangle 201.png";
import country2 from "../assets/logo/flag.png";
import { BiChevronDown } from "react-icons/bi";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [change, setChange] = useState(false);
  const [nav,setNav]=useState(false);

  const handleNav=()=>{
    setNav(!nav);
  }
  const handleChange = () => {
    setChange(!change);
  };
  return (
    <div className="  w-full h-[72px] z-[100] ">
      <div className="flex justify-between md:justify-around xl:justify-around items-center w-full h-full  px-2 ">
        <img src={img} alt="/" />
        <div>
          <ul className="hidden md:flex">
            <li
              className='ml-10 text-sm uppercase flex justify-center items-center font-bold  duration-400  relative cursor-pointer transition-all before:content-[""] before:absolute before:bottom-1 before:left-0 before:top-[34px] before:w-0 before:h-[3px] before:rounded-full before:opacity-0 
                    before:transition-all 
                    before:mt-[20px] before:duration-100 before:bg-[#FFC000] hover:before:w-full hover:before:opacity-100'
            >
              সেট ইয়োর গোল <BiChevronDown />{" "}
            </li>
            <li
              className='ml-10 text-sm uppercase flex justify-center items-center font-bold duration-400  relative cursor-pointer transition-all before:content-[""] before:absolute before:bottom-1 before:left-0 before:top-[34px] before:w-0 before:h-[3px] before:rounded-full before:opacity-0 
                    before:transition-all 
                    before:mt-[20px] before:duration-100 before:bg-[#FFC000] hover:before:w-full hover:before:opacity-100'
            >
              {" "}
              আপকামিং লাইভ ব্যাচ{" "}
            </li>
            <li
              onClick={handleChange}
              className=' w-[100px] ml-10 text-sm uppercase flex justify-center items-center font-bold duration-400  relative cursor-pointer transition-all before:content-[""] before:absolute before:bottom-1 before:left-0 before:top-[54px] before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-100 before:bg-[#FFC000] hover:before:w-full hover:before:opacity-100'
            >
              {change ? (
                <div className="flex transition-all ease-in-out duration-300">
                <img className="w-[24px] h-[24px]" src={country2} alt="" />{" "}
                <span className="ml-2"> বাংলা</span>
              </div>

              ) : (
                <div className="flex justify-center items-center transition-all ">
                  <img src={country} alt="" />{" "}
                  <span className="ml-2">English</span>
                </div>
              )}
            </li>
            <button className=" ml-10 border-2 py-[8px] px-[24px] bg-[#FFFBEE]  border-[#FFC000] hover:bg-[#fad873] duration-300">
              Login
            </button>
          </ul>
          <div className="flex justify-between items-center" >
          <button className="md:hidden mr-5 py-[8px] px-[13px]  bg-[#FFC000]  duration-300">
              Login
            </button>
            <div onClick={handleNav} className='md:hidden'>
                <RiMenu3Fill size={25}/>
                </div>
          </div>
        </div>
      </div>
      <div className={nav?"md:hidden fixed left-0 top-0 w-full h-screen":""}>
        <div className={nav?"fixed left-0 top-0 w-[70%] sm:w-[60%]md:w-[45%] h-screen bg-[#FAF9F6] p-10 ease-in duration-500":"fixed left-[-100%] top-0 w-[75%] p-10 ease-in duration-500"}>
   <div>
   <div className='flex w-full items-center justify-between '>
       <img src={img} alt="" />
    <div onClick={handleNav} className='rounded-full shadow-lg  p-3 cursor-pointer'>
    <AiOutlineClose/>
 </div>
 </div>
   </div>
   <div className="py-3 flex flex-col items-center">
   <ul className="uppercase">
   <li
              className='mt-10 ml-10 py-4 text-sm uppercase flex justify-center items-center font-bold  duration-400  relative cursor-pointer transition-all before:content-[""] before:absolute before:bottom-1 before:left-0 before:top-[34px] before:w-0 before:h-[3px] before:rounded-full before:opacity-0 
                    before:transition-all 
                    before:mt-[20px] before:duration-100 before:bg-[#FFC000] hover:before:w-full hover:before:opacity-100'
            >
              সেট ইয়োর গোল <BiChevronDown />{" "}
            </li>
            <li
              className='mt-10 ml-10 py-4 text-sm uppercase flex justify-center items-center font-bold duration-400  relative cursor-pointer transition-all before:content-[""] before:absolute before:bottom-1 before:left-0 before:top-[34px] before:w-0 before:h-[3px] before:rounded-full before:opacity-0 
                    before:transition-all 
                    before:mt-[20px] before:duration-100 before:bg-[#FFC000] hover:before:w-full hover:before:opacity-100'
            >
              {" "}
              আপকামিং লাইভ ব্যাচ{" "}
            </li>
            <li
              onClick={handleChange}
              className=' mt-10 py-4 ml-10 text-sm uppercase flex justify-center items-center font-bold duration-400  relative cursor-pointer transition-all before:content-[""] before:absolute before:bottom-1 before:left-0 before:top-[54px] before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-100 before:bg-[#FFC000] hover:before:w-full hover:before:opacity-100'
            >
              {change ? (
                <div className="flex transition-all ease-in-out duration-300">
                <img className="w-[24px] h-[24px]" src={country2} alt="" />{" "}
                <span className="ml-2"> বাংলা</span>
              </div>

              ) : (
                <div className="flex justify-center items-center transition-all ">
                  <img src={country} alt="" />{" "}
                  <span className="ml-2">English</span>
                </div>
              )}
            </li>
   </ul>
   </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
