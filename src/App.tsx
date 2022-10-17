import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Component/Footer'
import Home from './Component/Home'
import ContactFrom from './Component/Main/ContactFrom'
import Navbar from './Component/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactFrom/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App