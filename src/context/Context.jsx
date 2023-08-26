import React, { createContext, useContext, useReducer } from 'react'
import { products } from '../../data/data'
import { cartReducer } from './Reducer'

 const Cart = createContext()

export const Context = ({children}) => {
  // console.log(products)
  const [state, dispatch] = useReducer(cartReducer, {
    products:products,
    cart:[]
  })

  return (
    <Cart.Provider value={{state, dispatch}} >
        {children}
    </Cart.Provider>
  )
}

export const cartState = () => {
  return useContext(Cart)
}
