import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import ImageSlider from './ImageSlider'

const RecentImage = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-950'>
        {/* Heading */}
        <SectionHeading heading='explor our recent imagek'/>

        {/* Slider */}
        <div className='w-[80%] md:w-[90%] mx-auto mt-16'>
<ImageSlider/>
        </div>
    </div>
  )
}

export default RecentImage