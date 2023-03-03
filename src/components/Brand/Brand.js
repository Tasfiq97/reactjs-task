import React from 'react';
import BrandCarousel from './BrandCarousel';

const Brand = () => {
    const data=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    return (
        <div  className='w-full h-full md:mt-0 lg:mt-0 mt-[54px] bg-[#101828]'>
            <div className='w-full h-full ' >
                <div className=' text-center  text-white'>
                <div>
                <h2 className='text-center py-[30px]  '> 
                    <span className='lg:text-[20px] md:text-[16px] text-[20px]  '>Top companies trust Ostad
                    </span>
                    </h2>
                </div>
 
                    <div className=''>
                    <div className='  h-full  mt-8'>
                        <BrandCarousel data={data}/>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Brand;