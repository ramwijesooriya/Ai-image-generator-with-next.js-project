import { Navlinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'

const MobileNav = () => {
  return (
    <div>
      {/* navlinks */}
      <div className='flexd text-white justify-center flex-col h-screen transform translate-all duration-1000 w-full bg-gray-950 space-y-6 z-[1050] top-0 '>
       {Navlinks.map((Link)=>{
        return( <Link key={Link.id} href={Link.url} >
        <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-shite sm:text-[30px]'>{Link.lable}</p> 
        </Link>)
       })}
      </div>
    </div>
  )
}

export default MobileNav