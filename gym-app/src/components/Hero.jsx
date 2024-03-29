import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
      <p>IT'S TIME...</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>ACHIEVE YOUR FITNESS<span className='text-blue-400'> DREAMS</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>Plan your path to glory with our<span className='text-blue-400'> no-nonsense</span> training app</p>
      <button className='px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'><p>Get Started</p></button>
    </div>
  )
}
