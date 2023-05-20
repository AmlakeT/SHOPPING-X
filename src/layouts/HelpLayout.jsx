import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div className='px-5 mt-14'>
      <div className='flex flex-col  '> 
      <h2 className='text-2xl m-auto mb-8'>Website Help</h2>
      <p className='text-sm m-auto mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae adipisci molestias animi.</p>
      </div>
      <nav className='flex justify-center gap-5'>
        <NavLink to="faq" className="border p-2 rounded-md hover:bg-gray-200 outline outline-1"  >View the FAQ</NavLink>
        <NavLink to="contact" className="border p-2 rounded-md hover:bg-gray-200 outline outline-1"  >Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default HelpLayout