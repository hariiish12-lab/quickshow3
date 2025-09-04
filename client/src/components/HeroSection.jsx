import React from 'react'
import { assets } from '../assets/assets'
import { CalendarIcon, ClockIcon, ArrowRight } from 'lucide-react' // ✅ import ArrowRight
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-start justify-center gap-4
      px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")]
      bg-cover bg-center h-screen'>

      {/* Marvel Logo */}
      <img 
        src={assets.marvelLogo} 
        alt="Marvel Studios Logo" 
        className='h-11 mt-20' 
      />

      {/* Movie Title */}
      <h1 className='text-4xl sm:text-5xl md:text-[70px] leading-tight font-semibold max-w-[600px]'>
        Guardians <br /> of the Galaxy
      </h1>

      {/* Details Row */}
      <div className='flex items-center gap-4 text-gray-300'>
        <span>Action | Adventure | Sci-Fi</span>

        <div className='flex items-center gap-1'>
          <CalendarIcon className="w-4 h-4" /> 2018
        </div>

        <div className='flex items-center gap-1'>
          <ClockIcon className="w-4 h-4" /> 2h 8m
        </div>
      </div>

      {/* Description + CTA */}
      <div>
        <p className='max-w-md text-gray-300'>
          The Guardians must fight to keep their newfound family together 
          as they unravel the mysteries of Peter Quill’s true parentage.
        </p> 

        <button 
          onClick={() => navigate('/movies')} 
          className='flex items-center gap-2 px-6 py-3 text-sm 
            bg-gradient-to-r from-red-600 to-pink-500 
            hover:from-red-700 hover:to-pink-600 
            transition-all duration-300 rounded-full 
            font-medium text-white shadow-lg cursor-pointer mt-4'
        >
          Explore Movies
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default HeroSection
