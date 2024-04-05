import { useState } from 'react'
import './App.css'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
