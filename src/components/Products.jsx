import React from 'react'
import ProductsItem from './ProductsItem'

function Products( {handleClick} ) {
  return (
    <div className='px-10 py-20'>
      <div className=''>
        <p className='text-2xl '>Products We Are Proud Of</p>
        <ProductsItem handleClick={{handleClick}} />
      </div>
    </div>
  )
}

export default Products