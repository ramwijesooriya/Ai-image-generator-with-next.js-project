import { Check } from 'lucide-react'
import React from 'react'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-950'>
        <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
         {/* content */}
         <div>
            <h1 className='uppercase text-white mb-6 font-bold k'>Flexible and Affortable</h1>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white '>Our Pricing Plan</h1>
            <p className='text-white font-medium text-opacity-70'>Loram ipsem dolar sit apet </p>
            <div className='mt-8'>
                <div className='flex items-center space-x-3 '>
                    <Check className='w-6 h-6 text-green-500' />
                    <p className='text-lg text-white font-semibold text-opasity-60'>High Quality Service</p>
                </div>
                <div className='flex items-center space-x-3 '>
                    <Check className='w-6 h-6 text-green-500' />
                    <p className='text-lg text-white font-semibold text-opasity-60'>24/7 Customer support</p>
                </div>
                <div className='flex items-center space-x-3 '>
                    <Check className='w-6 h-6 text-green-500' />
                    <p className='text-lg text-white font-semibold text-opasity-60'>Affordable Ratesk</p>
                </div>
            </div>
         </div>
         {/* Price card content */}
         <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" >
                <PriceCard price="4" user="1" type="silver pack"  />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <PriceCard price="8" user="3" type="Golden pack"  />
            </div>

         </div>
        </div>
    </div>
  )
}

export default Price