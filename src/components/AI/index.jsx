import React from 'react'
import Heading from '../Heading'
import AICard from './AICard'

import bitcoin from "../../assests/images/bitcoin.png";
import kucoin from "../../assests/images/kucoin.png";
import bybit from "../../assests/images/bybit.png";

export default function AI() {
  const list = [
    {
      name:"Binance",
      img:bitcoin,
      price:"1 EUR = 261 USD",
      arrive:"30 min",
      id:"...04efa56865ff123",
      link:"https://www.binance.com/en"
    },
    {
      name:"Kucoin",
      img:kucoin,
      price:"1 EUR = 261 USD",
      arrive:"30 min",
      id:"...04efa56865ff123",
      link:"https://www.kucoin.com/"
    },
    {
      name:"Bybit",
      img:bybit,
      price:"1 EUR = 261 USD",
      arrive:"30 min",
      id:"...04efa56865ff123",
      link:"https://www.bybit.com/en"
    }
  ]
  return (
    <div className='bg-dark px-5 sm:px-16 py-32 sm:py-64 text-white flex flex-col items-center gap-5' >
        <Heading text={"Artificial Intelligence"}/>
        <p className='frombelowanim text-base sm:text-2xl font-normalF leading-normal sm:w-3/5 text-center'>
        Sappchat’s AI allows you to use your voice to take action. Search for exchange partners, surf your contact and manage your wallet without touching the device.
        </p>

        <div className='w-full flex mt-8 gap-6 flex-wrap'>
        {list.map((item, index)=>{
          return(
            <AICard key={index} data={item} />
            )
        })}
        </div>
    </div>
  )
}
