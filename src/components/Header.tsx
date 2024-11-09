// Header.js
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 p-4 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-300 mb-4 md:mb-0">
          <h2 className="text-3xl font-bold hover:text-lime-500">RTR</h2>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 text-white hover:text-gray-300">Home</Link>
          <Link href="/about" className="mr-5 text-white hover:text-gray-300">About</Link>
          <Link href="/projects" className="mr-5 text-white hover:text-gray-300">Projects</Link>
          <Link href="/contact" className="mr-5 text-white hover:text-gray-300">Contact</Link>
        </nav>
        <button className="inline-flex items-center text-black bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Download Portfolio
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
