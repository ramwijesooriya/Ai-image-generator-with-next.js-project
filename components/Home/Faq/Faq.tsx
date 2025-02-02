import Image from 'next/image'
import React from 'react'
import FaqCard from './FaqCard'

const Faq = () => {
  return (
    <div className='pt-16 pb-16bg-gray-950 '>
      <div className='w-[80%] mx-auto mt-16 grid-cols-1 grid md:grid-cols-2 gap-10 items-center'>
        {/* image */}
        <div data-aos="zoom-out" data-aos-anchor-placement="top-center" >
          <Image src="/images/faq.png" alt='faq' width={500} height={500}/>
        </div>
        {/* faq card */}
        <div>
        <FaqCard/>
        </div>
      </div>
    </div>
  )
}

export default Faq