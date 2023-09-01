import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Home  from './pages/Home'
import  Categories  from './pages/Categories'
import  Header  from './components/Header'
import All from './components/categories-page/All'
import Furnitures from "./components/categories-page/Furnitures";
import Electronics from "./components/categories-page/Electronics";
import Cosmetics from "./components/categories-page/Cosmetics";
import { ProductPage } from './pages/ProductPage'



const App = () => {

  return (
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='categories' element = {<Categories />}>
          <Route path='all' element = {<All />} />
           <Route path='furnitures' element = {<Furnitures />} />
           <Route path='cosmetics' element = {<Cosmetics />} />
           <Route path='electronics' element = {<Electronics />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
     </BrowserRouter>
  )
}

export default App