import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home/home'
import './App.css'
import Gallery from './pages/Gallery/Gallery'
import Services from './pages/Services/Services'
import Booked from './pages/Booked/Booked'
// import SignInSide from './pages/Signup'
import SignUp from './pages/Signup'
import SignIn from './pages/SignIn'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/booked' element={<Booked/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

