import React from 'react'

type Props={
    price:string;
    type:string;
    user:string;
}

const PriceCard = ( {price,type,user}:Props) => {
  return (
    <div className='bg-black p-8 rounded-lg text-center'>
        <p className='mt-12 mb-2 text-3xl text-white font-semibold k'> {type}</p>
    </div>
  )
}

export default PriceCard