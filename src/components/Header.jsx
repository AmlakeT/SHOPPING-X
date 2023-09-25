import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

 const Header = ({size}) => {
  return (
    <header>
      <nav className="flex justify-around items-center text-center border-b-2 py-10 fixed top-0 left-0 right-0 z-10 bg-white">
        <div className="text-indigo-500 text-3xl font-serif">
          <NavLink to="/">SHOPPING X</NavLink>
        </div>

        <div className="text-xl flex items-center space-x-5 md:space-x-32 text-indigo-500">
          <NavLink to="/categories">Categories</NavLink>
          {/* <NavLink to="/categories/product/19">Products</NavLink> */}

        </div>
        <div className='flex items-center'>
          <span className='relative'>
            <FaShoppingCart size={25} />
            <span className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center text-xs'>
              {size}
            </span>
          </span>
        </div>
      </nav>


    </header>
  );
};

export default Header;