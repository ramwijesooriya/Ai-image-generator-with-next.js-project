"use client";
import { Button } from '@/components/ui/button'
import axios from 'axios';
import { Loader } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'sonner';


const Hero = () => {
    const [promt,setPromt]=useState('');
    const [image,setImage]=useState('');
    const [loading,setLoading]=useState(false);


    const handleImageGeneration = async()=>{
        setLoading(true)
        const options = {
            method: 'POST',
            url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/realistic',
            headers: {
              'x-rapidapi-key': '16f0c001ccmshe9d86f99d10365fp1e1ca7jsn5f761abd0ee0',
              'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
              'Content-Type': 'application/json'
            },
            data: {
              inputs: promt,
            }
          };
          try {
            const response =await axios.request(options);
            setImage(response?.data.url);
            toast.success('image generate successfully')
          } catch (error:unknown) {
            if(axios.isAxiosError(error) && error.response){
                toast.error(error.response.data.message)
                
            }
            else{
                toast.error("unexpected error occurred")
            }
          }
          finally{
            setLoading(false)
          }
    };
    const handleDownloadImage=()=>{
        const link=document.createElement("a");
        link.target="_blank";
        link.href=image;
        link.download="generated-img.jpg";
        link.click();

    }
    
    
  return (
    <div className='w-[95%] min-h-screen realative mx-auto mt-[20vh] '>Hero
    
    <div className='relative z-10 text-white flex flex-col items-center justify-center'>
        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent'>
            Create Image With Beautiful <br />Artificial intelligence {" "}
        </h1>
        {/* // context */}
<p className='mt-3 text-sm md:text-base font-semibold text-center text-gray-300 '>Get started with our AI-powered image generator tools </p>
{/* promt input box */}
<div className='h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between '>
    <input type="text" placeholder='Generate your dream image' className='h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base   '
    value={promt}
    onChange={(e)=>setPromt(e.target.value)}
    />
    <Button variant={"default"}size={"lg"} onClick={handleImageGeneration}    >Generate</Button>
    
</div>
{/* Tags */}
<div className='flex items-center mt-6 space-x-4  flex-wrap  space-y-3  '>
<p>Popular Tag :</p>
<Button variant={"secondary"}>Creative</Button>
<Button variant={"secondary"}>Hyperreality</Button>
<Button variant={"secondary"}>Steampunk</Button>
<Button variant={"secondary"}>Animation</Button>
<Button variant={"secondary"}>business</Button>
</div>
{/* show loarding and image */}
{loading && (<div > <Loader className='animate-spin mt-6 ' />  </div>
    )}
    {
        image && <div className='mt-8 flex flex-col items-center k'>
            <img src={image} alt='ai image' className='max-w-full h-[500px] rounded-lg shadow-lg ' loading='lazy'/>
            <Button onClick={handleDownloadImage} className='mt-4 mb-4 bg-orange-500 hover:orange--800'>
                Download
            </Button>
        </div>
    }
    </div>
    </div>
    
    
  )
}

export default Hero