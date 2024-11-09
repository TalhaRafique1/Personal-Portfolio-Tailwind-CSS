import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Skills from '../skills/page';

const About = () => (
  <div>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="flex justify-center mb-10 mt-20">
          <Image
            className="object-cover object-center rounded-full"
            alt="hero"
            src="/images/Profile1.jpg"
            width={400}
            height={400} />
        </div>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi, I am Talha Rafique – A Frontend Developer Passionate About Crafting Interactive Web Experiences
          </h1>
          <p className="mb-8 leading-relaxed">
            Hello! I’m Talha Rafique, Link dedicated frontend developer with Link passion for crafting engaging and functional web applications. With Link strong foundation in TypeScript and experience in developing projects like Link to-do list app, number guessing game, calculator, adventure game, and currency converter, I enjoy transforming creative ideas into dynamic, interactive user experiences. I believe in clean, efficient code and am committed to continuous learning to keep up with the latest trends in web development. When I am not coding, I love exploring new tech innovations and honing my design skills.
          </p>
          <div className="flex justify-center">
            <Link href="https://www.linkedin.com/in/talha-rafique-1a70ab2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" passHref>
              <Link target="_blank" className="inline-flex text-[50px] text-black border-0 py-2 px-6 rounded text-lg" href={''}>
                <ImLinkedin />
              </Link>
            </Link>
            <Link href="https://github.com/TalhaRafique1" passHref>
              <Link target="_blank" className="inline-flex text-[50px] text-black border-0 py-2 px-6 rounded text-lg" href={''}>
                <FaGithubSquare />
              </Link>
            </Link>
            <Link href="https://x.com/Taha63796324?t=qS5S2ipD2UHTQNfpnIHdMA&s=09" passHref>
              <Link target="_blank" className="inline-flex text-[50px] text-black border-0 py-2 px-6 rounded text-lg" href={''}>
                <FaSquareXTwitter />
              </Link>
            </Link>
            <Link href="https://www.facebook.com/TalhaRafique" passHref>
              <Link target="_blank" className="inline-flex text-[50px] text-black border-0 py-2 px-6 rounded text-lg" href={''}>
                <FaFacebook />
              </Link>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <Skills />
  </div>
)

export default About
