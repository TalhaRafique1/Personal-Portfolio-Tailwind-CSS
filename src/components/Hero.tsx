// Hero.js
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="Hero bg-yellow-500 pt-32 pb-16 lg:flex lg:items-center lg:justify-center lg:gap-16">
      <div className="flex justify-center lg:justify-end lg:w-1/2 ">
        <Image 
          src="/images/Profile1.jpg" 
          alt="Talha Rafique, a frontend developer" 
          width={300} 
          height={300} 
          className="rounded-full" 
          sizes="(max-width: 640px) 200px, 300px"
        />
      </div>
      <div className="lg:w-1/2 mt-16 text-center lg:text-left">
        <h2 className="text-6xl font-bold text-indigo-900">
          Hello <br /> I am <br /> Talha Rafique
        </h2>
        <div className="flex gap-10 mt-12 justify-center lg:justify-start">
          <button className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700 transition-all ease-in-out duration-300"><Link href="/about">About Me</Link></button>
          <button className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700 transition-all ease-in-out duration-300"><Link href="/contact">Contact Me</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
