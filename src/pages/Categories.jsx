import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';
import ProductsItem from '../components/ProductsItem';
import Footer from '../components/Footer';

const Categories = () => {
//  const { id }    = useParams()
  return (
    <div  >
     <div className= ' mt-36  flex flex-col md:flex-row md:justify-between items-center'>
     <div className="flex items-center mb-4">
        <NavLink className="flex items-center text-lg ml-4" to="/">
          <IoChevronBackOutline className="mr-2" /> Home
        </NavLink>
      </div>
      <div className="flex md:px-32  md:space-x-10">
        <NavLink
          className="px-4 py-2 rounded-md hover:bg-gray-200"
          to="/categories/all"
        >
          All
        </NavLink>
        <NavLink
          className="px-4 py-2 rounded-md hover:bg-gray-200"
          to="/categories/electronics"
        >
          Electronics
        </NavLink>
        <NavLink
          className="px-4 py-2 rounded-md hover:bg-gray-200"
          to="/categories/furnitures"
        >
          Furnitures
        </NavLink>
        <NavLink
          className="px-4 py-2 rounded-md hover:bg-gray-200"
          to="/categories/cosmetics"
        >
          Cosmetics
        </NavLink>
      
      </div>
     </div>
      <Outlet />
      <ProductsItem /> 
     <Footer />
    </div>
  );
};

export default Categories;