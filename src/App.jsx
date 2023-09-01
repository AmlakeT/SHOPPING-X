import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Catagories } from './pages/Catagories'
import { ProductPage } from './pages/ProductPage'
import { Header } from './components/Header'

const App = () => {

  return (
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='cart' element = {<ProductPage/>} />
        <Route path='catagories' element = {<Catagories />} />
      </Routes>
     </BrowserRouter>
  )
}

export default App