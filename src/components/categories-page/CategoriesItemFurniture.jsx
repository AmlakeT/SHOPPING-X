import React from 'react'
import { products } from '../../../data/data'
import { Link } from 'react-router-dom'

const CategoriesItemFurniture = () => {
  const filteredItems = products.filter((product) => product.catagory === "furniture")
  return (
    <div>
       <div className='grid  place-items-center grid-cols-1 sm:grid-cols-2 gap-4 mt-10 md:grid-cols-3  md:mx-auto'>
         {filteredItems.map((product) => (
          <div key={product.id} className=''> 
            <Link to={`/categories/product/${product.id}`}>
               <div>
                <img src={product.image} alt="product" />
               </div>
               <div className='flex flex-col items-center mt-5'>
                <p>{product.productName}</p>
                <p>{product.price}</p>
                <button className='bg-indigo-500 px-5 py-2 rounded text-white mt-3  hover:scale-110 duration-300'>Add To Cart</button>

               </div>
            </Link>

          </div>
         ))}
       </div>
    </div>
  )
}

export default CategoriesItemFurniture