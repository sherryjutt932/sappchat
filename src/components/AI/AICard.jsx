import React from 'react'

export default function AICard({data}) {
  return (
    <div className='frombelowanim flex-1 sm:min-w-[420px] font-normalF p-4 sm:p-6 rounded-2xl' style={{background:`linear-gradient(135deg, #00000080 , #00000000)`}}>
        <div className='flex gap-4 items-center'>
            <a href={data.link} target='_blank' rel="noreferrer" className='cursor-pointer'>
            <img src={data.img} alt="" className='rounded-full block w-10 sm:w-20' />
            </a>
            <div>
                <h1 className='text-xl sm:text-3xl'>{data.name}</h1>
                <p className='text-base sm:text-xl'>{data.id}</p>
            </div>
            <button className='bg-sec rounded-full px-4 sm:px-6 py-1 sm:py-2 ml-auto'>
                Select
            </button>
        </div>
        <div className='flex justify-between gap-4 mt-6 text-sm sm:text-base'>
            <div className=''>
                <p>Sale Price</p>
                <p className='mt-2'>{data.price}</p>
            </div>
            <div className=''>
                <p>Sale Price</p>
                <p className='mt-2'>{data.price}</p>
            </div>
            <div className=''>
                <p>Arrive in</p>
                <p className='mt-2'>{data.arrive}</p>
            </div>
        </div>
    </div>
  )
}
