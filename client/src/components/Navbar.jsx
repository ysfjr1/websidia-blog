import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
            <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="/">
                Websidia Blog
            </a>
            <p className="text-lg text-gray-600">
                Lorem Ipsum Dolor Sit Amet
            </p>
        </div>
    </header>
  )
}

export default Navbar