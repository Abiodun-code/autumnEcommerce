import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className="overflow-hidden">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProductDetails/>} />
      </Routes>
      <SideBar/>
      <Footer/>
    </div>
  )
}

export default App
