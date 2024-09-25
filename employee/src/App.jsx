import React, { useState } from 'react'
import Navbar from './components/navbar'
import Addemployee from './components/Addemployee'
import { Route, Routes } from 'react-router-dom'
import Viewemployee from './components/viewemployee'
import './App.css'
const App = () => {
  const [count,setcount] = useState(0)
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
      <Route path='/A' element={<Addemployee/>}/>
      <Route path='/B' element={<Viewemployee/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
