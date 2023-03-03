import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Career from '../Career/Career';
import Community from '../Community/Community';
import Courses from '../Courses/Courses';
import Experts from '../Experts/Experts';
import Footer from '../Footer/Footer';
import Guidline from '../Guideline/Guidline';
import Navbar from '../Navbar/Navbar';
import Resources from '../Resources/Resources';
import WorkShop from '../Workshop/WorkShop';
// bg-[#F9F9FA]
const Home = () => {
    return (
        <div className=' lg:pl-10 md:pl-10'>
           <div className='bg-[#F9F9FA]'>
           <Navbar></Navbar>
          <section className='lg:pl-5 md:pl-5'> 
            <Banner></Banner>
            </section>
            <section className='lg:pl-5 md:pl-5'>
                <Guidline/>
            </section>
            <section className='bg-[#F9F9FA] lg:pl-5 md:pl-5'>
                <Courses/>
            </section>
            <section className=''>
                <WorkShop/>

            </section>
            <section className=' bg-white mt-10 p-10'>
                <Resources/>

            </section>
            <section className=''>
                <Community/>
            </section>
            <section>
                <Experts/>
            </section>
           <section className='mt-20 h-full'>
            <Brand/>
           </section>
           <section>
            <Career/>
           </section>
           <section>
            <Footer/>
           </section>

           </div>
        </div>
    );
};

export default Home;