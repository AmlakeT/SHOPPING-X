import React from 'react'
import { cartState } from '../context/Context'
import { Hero } from '../components/Hero'
import Products from '../components/Products'

export const Home = () => {
    const {state: {products}} = cartState()
    // console.log(state)
  return (
    <div className=''>
     <Hero />
     <Products />
    {/* {products.map((product) => (
      <div key={product.id}>
        <h3>{product.productName}</h3>
        <p>Price: ${product.price}</p>
        <img src={product.image} alt={product.productName} />
      </div>
    ))} */}
  </div>
  )
}
