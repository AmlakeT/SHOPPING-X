import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Cart } from '../pages/Cart'
import { FaShoppingCart } from 'react-icons/fa'

export const Header = () => {
  return (
    <div>
      <nav className='flex  justify-around  items-center text-center border-b-2 py-10'>
        <div className='text-indigo-500 text-3xl  font-serif'>
          <NavLink to = "/">SHOPING X</NavLink>
        </div>

        <div className='text-xl  flex items-center space-x-5 md:space-x-32  text-indigo-500'>
          <NavLink to = "/catagories">Catagories</NavLink>
          <i> 
           <FaShoppingCart />
          </i>
        </div>
        <div> 
        </div>
      </nav>
      <div>
         <form className='flex items-center md:justify-center px-3 space-x-3 md:space-x-10 mr-auto my-5'>
             <label>Search Products:</label>
             <input className='border w-52 md:w-fit border-indigo-500 px-10 outline-indigo-500  text-indigo-500 py-2 rounded' type="text" placeholder='Search Itmes...' />
          </form>
        </div>
    </div>
  )
}
