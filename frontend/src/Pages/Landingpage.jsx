import React from 'react'
import hero_img from '../assets/bg_img.png';
import About from './About';
import Menu from './Menu'
import {Link} from 'react-router-dom'
import Contact from './Contact'
const Landingpage = () => {
  return (
    <>
    <div className=" relative min-h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
          style={{ backgroundImage: `url(${hero_img})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 p-4 sm:p-6 md:p-10 rounded-lg text-center h-full w-full sm:h-full sm:w-full md:h-full md:w-full lg:h-full lg:w-full xl:h-full xl:w-full flex flex-col  space-y-2 sm:space-y-3 md:space-y-4 py-8 sm:py-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[100px] font-bold mb-2 sm:mb-4 px-2">Welcome to Kuku Cafe</h1>
            
            <p className='text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-4 font-bold'>Where artisan coffee meets exceptional dining</p>
            
            <p className='text-white text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl 
            font-semibold text-center mx-auto px-4 sm:px-8 md:px-16 lg:px-32 max-w-[650px] sm:max-w-[850px] leading-snug'>Experience the perfect blend of specialty coffee, carefully crafted dishes, and warm hospitality in a cozy atmosphere</p>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl px-4 font-semibold'>Enjoy cozy vibes and delicious food!</p>
          
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 font-bold text-sm sm:text-base md:text-lg justify-center items-center px-4 pt-2'>
          <button className='bg-amber-900 p-3 sm:p-4 rounded-md w-full max-w-xs sm:w-52'><Link to='/menu'>View Menu</Link></button>
          <button className='bg-amber-200 p-3 sm:p-4 rounded-md text-amber-950 w-full max-w-xs sm:w-52'><Link to='/contact'>Visit Us</Link></button>
        </div>
          </div>
        </div>
        <About/>
        <Menu/>
        <Contact/>
    </>
  )
}

export default Landingpage