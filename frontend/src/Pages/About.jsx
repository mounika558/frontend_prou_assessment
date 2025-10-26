import React from 'react'
import { Coffee, Utensils, Heart } from "lucide-react";

const About = () => {
  return (
    <>
      <div className="space-y-10 px-4 sm:px-8 md:px-12 lg:px-20 py-10">
        {/* --- Title Section --- */}
        <div className="text-center space-y-3">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-amber-900">Our Story</p>
          <p className="font-bold text-lg sm:text-2xl md:text-3xl text-amber-900">
            A passion for coffee and cuisine, crafted with love
          </p>
        </div>

        {/* --- Icons and Description Section --- */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 p-4 sm:p-6">
          {/* Card 1 */}
          <div className="p-6 sm:p-8 bg-amber-100 rounded-2xl text-center flex flex-col items-center justify-center space-y-4 hover:scale-95 transition-transform ease-in-out max-w-sm w-full">
            <Coffee className="w-10 h-10 sm:w-12 sm:h-12 text-amber-700" />
            <p className="text-2xl sm:text-3xl font-semibold text-black">Premium Coffee</p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We source the finest beans from sustainable farms around the world, roasted to 
              perfection for that perfect cup every time.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-8 bg-amber-100 rounded-2xl text-center flex flex-col items-center justify-center space-y-4 hover:scale-95 transition-transform ease-in-out max-w-sm w-full">
            <Utensils className="w-10 h-10 sm:w-12 sm:h-12 text-amber-700" />
            <p className="text-2xl sm:text-3xl font-semibold text-black">Fresh Cuisine</p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our chef-driven menu features seasonal ingredients and innovative dishes that 
              complement your coffee experience beautifully.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-8 bg-amber-100 rounded-2xl text-center flex flex-col items-center justify-center space-y-4 hover:scale-95 transition-transform ease-in-out max-w-sm w-full">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-amber-700" />
            <p className="text-2xl sm:text-3xl font-semibold text-black">Made with Love</p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Every dish and drink is prepared with care and attention to detail,
               ensuring an unforgettable experience for our guests.
            </p>
          </div>
        </div>

        {/* --- Bottom Paragraph --- */}
        <div className="text-center text-base sm:text-lg md:text-xl leading-7 text-gray-700 font-normal p-6 sm:p-8 max-w-4xl mx-auto">
          Founded in 2020, Kuku Cafe & Restaurant has become a beloved gathering 
          place for coffee enthusiasts and food lovers alike. Our mission is simple: to create a warm, welcoming space where
          exceptional coffee meets outstanding cuisine, bringing people together over great food and even better conversation.
        </div>
      </div>
    </>
  )
}

export default About
