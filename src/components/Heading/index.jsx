import React from 'react'

export default function Heading({text}) {
  return (
    <div className="frombelowanim font-libre text-[max(3vw,30px)] text-center">
          {text}
          <span className="inline-block w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-sec ml-2"></span>
        </div>
  )
}
