import React from 'react';
import { products } from '../../data/data';

const ProductsItem = ({handleClick}) => {
  const filteredItems = products.filter((product) => product.id >= 13);
  

  return (
    <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
      {filteredItems.map((product) => (
        <div key={product.id} className=' border py-10'>
          <div>
            <img className='h-72 px-3' src={product.image} alt={product.productName} />
          </div>
          <div className='flex flex-col items-center mt-5'>
            <p>{product.productName}</p>
            <p>{product.price}</p>
            <button  onClick={() => handleClick(product)} className='bg-indigo-500 px-5 py-2 rounded text-white mt-3  hover:scale-110 duration-300'>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsItem;