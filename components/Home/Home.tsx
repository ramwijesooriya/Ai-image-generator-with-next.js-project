import React from 'react'
import Hero from './Hero/Hero'
import RecentImage from './RecentImage/RecentImage'
import About from './About/About'
import Price from './Price/Price'

const home = () => {
  return (
    <div className='overflow-hidden' >home
    <Hero/>
    <RecentImage/>
    <About/>
    <Price/>
    </div>
  )
}

export default home