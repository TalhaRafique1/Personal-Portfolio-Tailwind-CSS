import React from 'react'
import Image from 'next/image'
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="flex justify-center mb-10 mt-20"> 
            <Image
              className="object-cover object-center rounded-full"
              alt="hero"
              src="/images/Profile1.jpg"
              width={400}
              height={400}
            />
          </div>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi, I am Talha Rafique – A Frontend Developer Passionate About Crafting Interactive Web Experiences
            </h1>
            <p className="mb-8 leading-relaxed">
            Hello! I’m Talha Rafique, a dedicated frontend developer with a passion for crafting engaging and functional web applications. With a strong foundation in TypeScript and experience in developing projects like a to-do list app, number guessing game, calculator, adventure game, and currency converter, I enjoy transforming creative ideas into dynamic, interactive user experiences. I believe in clean, efficient code and am committed to continuous learning to keep up with the latest trends in web development. When I am not coding, I love exploring new tech innovations and honing my design skills.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-[50px] text-black border-0 py-2 px-6 rounded text-lg">
                <ImLinkedin />
              </button>
              <button className="inline-flex text-[50px] text-black border-0 py-2 px-6 rounded text-lg">
              <FaGithubSquare />
              </button>
              <button className="inline-flex text-[50px] text-black border-0 py-2 px-6 rounded text-lg">
              <FaSquareXTwitter />
              </button>
              <button className="inline-flex text-[50px] text-black border-0 py-2 px-6 rounded text-lg">
              <FaFacebook />
              </button>
            
             
            </div>
          </div>
        </div>
      </section>
      <Skills/>
    </div>
  )
}

export default page





export const Skills = () => {
  return (
    <div>
      <h2 className='mt-18 text-center text-4xl font-bold underline text-black'>My Skills</h2>
      <ul>
        <li className='mb-3 text-2xl text-white font-semibold ml-16'>HTML</li><div className='w-[25%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
        <li className='mb-3 text-2xl text-white font-semibold ml-16'>CSS</li><div className='w-[20%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
        <li className='mb-3 text-2xl text-white font-semibold ml-16'>JavaScript</li><div className='w-[10%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
        <li className='mb-3 text-2xl text-white font-semibold ml-16'>TypeScript</li><div className='w-[20%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
        <li className='mb-3 text-2xl text-white font-semibold ml-16'>React</li><div className='w-[10%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
        <li className='mb-3 text-2xl text-white font-semibold ml-16'>Nextjs</li><div className='w-[30%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
      </ul>
    </div>
  )
}
