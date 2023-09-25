import React from 'react'
import { cartState } from '../context/Context'
import { Hero } from '../components/Hero'
import Products from '../components/Products'
import Banner from '../components/Banner'
import banner1 from '../image/banner/banner2.jpg'
import Banner2  from '../image/banner/shelf1.jpeg'
import Footer from '../components/Footer'

 const Home = ({handleClick}) => {
    const {state: {products}} = cartState()
    // console.log(state)
  return (
    <div className='mt-32'>
     <Hero />
     <Products handleClick ={handleClick} />
     <Banner
      title = "Live in a comfortable way "
      text  = " Products are manufactured with standardized dimensions, allowing you the freedom to mix and match them without constraints."
      img = {banner1}
     />
     <div className='relative'>
     <Footer />
     </div>
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

export default Home;
