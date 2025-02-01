"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import RecentImage from './RecentImage/RecentImage'
import About from './About/About'
import Price from './Price/Price'
import Review from './Review/Review'
import Faq from './Faq/Faq'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const home = () => {
useEffect(()=>{
const initAOS = async()=>{
  await import ('aos');
  AOS.init({
    
  })
}
},[])

  return (
    <div className='overflow-hidden' >home
    <Hero/>
    <RecentImage/>
    <About/>
    <Price/>
    <Review/>
    <Faq/>
    </div>
  )
}

export default home