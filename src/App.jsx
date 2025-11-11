import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './pages/Home'
import Products from './components/Products'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import WishList from './components/WishList'
import Breadcrumbs from './components/Breadcrumbs'
import Cart from './components/Cart'
import CheckOut from './components/CheckOut'
import ProductDetail from './components/ProductDetail'
import Account from './components/Account'
import PageNotfound from './components/PageNotfound'
import AllProducts from './components/AllProducts'
import PrivateRouting from './components/PrivateRouting'

// import { BrowserRouter, Routes,Route } from 'react-router-dom'




function App() {

  return (
    <>

      <Navbar />
      <Breadcrumbs />
      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/checkout' element={<CheckOut/>}/>
      <Route path='/checkout/:id' element={<CheckOut/>}/> */}
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/checkout/:id" element={<CheckOut />} />

        <Route path='/productdetail/:id' element={<ProductDetail />} />
        <Route path='/allproducts' element={<AllProducts />} />

        {/* <Route path='/useraccount' element={<Account/>}/> */}
        <Route path='/useraccount' element={
          <PrivateRouting>
            <Account />
          </PrivateRouting>
        } />

        <Route path='/*' element={<PageNotfound />} />







      </Routes>
      <Footer />







    </>
  )
}

export default App
