import React from 'react'
import { Route, Routes, Link} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Details from './pages/Details'
import Contact from './pages/Contact'
import Product from './pages/Product'

const ReactRouterDOM = () => {
  return (
    <div>

      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/product">Product</Link>
      <Link to="/details"> Details</Link>

      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes>

    </div>
  )
}

export default ReactRouterDOM
