"use client";
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'


const ResponsiveNav = () => {

  const  [showNav,setShowNav]=useState(false);
  const openNavHandler=()=>setShowNav(true);
  const closeNavHandller =()=>setShowNav(false);
  
  return (
   
    <div>

        <Nav openNav={openNavHandler}/>
        <MobileNav showNav={showNav} closeNav={closeNavHandller}/>
       

    </div>
  )
}

export default ResponsiveNav