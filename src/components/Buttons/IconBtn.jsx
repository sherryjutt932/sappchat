import React from 'react'

export default function IconBtn({theme="dark", icon, label1, label2}) {
  return (
    <button className={`inline-flex text-left text-base leading-none items-center gap-2 bg-transparent outline-none border rounded-full px-4 py-2 sm:px-6 sm:py-2 cursor-pointer ${!(theme === "dark") ? ' text-black border-black' : ' text-white border-white'}`}>
        <img src={icon} alt="" className='w-4 sm:w-6' />
        <div className='flex flex-col items-start'>
            <small className='uppercase font-normalF font-light text-xs leading-none sm:leading-normal'>{label1}</small>
            <p className='capitalize font-normalF font-normal text-base leading-none sm:leading-normal'>{label2}</p>
        </div>
    </button>
  )
}
