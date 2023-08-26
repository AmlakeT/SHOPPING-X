import React from 'react'
import ProductsItem from './ProductsItem'

function Products() {
  return (
    <div className='px-14 py-20'>
      <div className=''>
        <p className='text-2xl'>Products We Are Proud Of</p>
        <ProductsItem />
      </div>
    </div>
  )
}

export default Products