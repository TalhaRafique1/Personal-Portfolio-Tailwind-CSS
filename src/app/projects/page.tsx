import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mt-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 ">
              Here are some of my Projects
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-neutral-600">
              Here are some of the projects I have built using TypeScript, showcasing my skills in developing interactive and functional applications. From a task management to-do list, an engaging number guessing game, and a fully functional calculator, to an adventure game and a currency converter, each project reflects my commitment to clean code and user-friendly interfaces. Take a look at these projects to see how I approach problem-solving and web development in TypeScript!
            </p> 
          </div>
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full p-2">
              <Image
                width={300}
                height={200}
                alt="project-1"
                className="w-full h-full object-contain rounded-lg  block hover:border-black hover:border-2"
                src="/images/To-Do.jpg"
              />
            </div>
            <div className="w-full p-2">
              <Image
                width={300}
                height={200}
                alt="project-2"
                className="w-full h-full object-contain rounded-lg  block hover:border-black hover:border-2"
                src="/images/project.jpg"
              />
            </div>
            <div className="w-full p-2">
              <Image
                width={300}
                height={200}
                alt="project-3"
                className="w-full h-full object-contain rounded-lg  block hover:border-black hover:border-2"
                src="/images/number.jpg"
              />
            </div>
            <div className="w-full p-2">
              <Image
                width={300}
                height={200}
                alt="project-4"
                className="w-full h-full object-contain rounded-lg  block hover:border-black hover:border-2"
                src="/images/game.jpg"
              />
            </div>
            <div className="w-full p-2">
              <Image
                width={300}
                height={200}
                alt="project-5"
                className="w-full h-full object-contain rounded-lg block hover:border-black hover:border-2"
                src="/images/cli.jpg"
              />
            </div>
            <div className="w-full p-2">
              <Image
                width={300}
                height={200}
                alt="project-6"
                className="w-full h-full object-contain rounded-lg  block hover:border-black hover:border-2"
                src="/images/calculator.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
