import React from 'react'
import { MapPin, Clock, Phone } from "lucide-react";
import Footer from '../components/Footer';
const Contact = () => {
  return (
    <>
    <section className='m-10 p-4'>
      <div className='flex flex-col text-center space-y-4 '>
        <p className='text-amber-900 text-5xl font-bold'>Visit Us</p>
        <p className='text-gray-600 text-3xl font-bold'>We'd love to welcome you to Kuku Cafe & Restaurant</p>
      </div>
      <div className='flex  space-x-4 mt-14  justify-center text-lg text-gray-700 font-medium'>
        <div className='bg-amber-900 p-10 max-w-[500px] rounded-2xl flex flex-col space-y-4 text-white '>
          <MapPin className=' flex mx-auto w-11 h-11'></MapPin>
          <p className='text-center'>Location : 3rd street,cross-cut road-coimbatore</p></div>

        <div className='bg-amber-900 p-10 max-w-[500px] rounded-2xl flex flex-col space-y-4 text-white'>
          <Clock className=' flex mx-auto w-11 h-11'></Clock>
          <p className='text-center'>Hours : Mon-Fri: 7:00 AM - 9:00 PM | Sat-Sun: 8:00 AM - 10:00 PM | Happy Hour: 3-6 PM Daily</p></div>

        <div className='bg-amber-900 p-10  max-w-[500px] rounded-2xl flex flex-col space-y-4 text-white'>
          <Phone className=' flex mx-auto w-11 h-11'></Phone>
          <p className='text-center'>Contact Us : +91 1234567899 | call for reservation</p></div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact