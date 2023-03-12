import React from 'react'
import womanImg from '../assets/woman_hero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className=' h-full pt-24 pb-3 bg-no-repeat bg-cover bg-center bg-hero'>
      <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col pl-6 pb-[140px] justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-1 bg-red-500 mr-3'></div>New Trend
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>AUTUMN SALE STYLISH <br/>
            <span className='font-semibold'>WOMEN</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
        </div>
        <div className='hidden lg:block'>
          <img src={womanImg} alt=''/>
        </div>
      </div>
    </section>
  )
}

export default Hero