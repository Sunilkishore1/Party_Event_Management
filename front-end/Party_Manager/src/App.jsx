import React, { createContext, useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home/home'
import './App.css'
import Gallery from './pages/Gallery/Gallery'
import Services from './pages/Services/Services'
import Booked from './pages/Booked/Booked'
// import SignInSide from './pages/Signup'
import SignUp from './pages/Signup'
// import SignIn from './pages/SignIn'
import Booking from './components/Booking/Booking'
import { Provider } from 'react-redux'
import {store} from './components/Redux/reducer/store'
import Bookings from './user/Bookings'
import { userContext } from './components/context/context'
import Venue from './pages/Venue/Venue'
import Login from './Login'
import VenueAddForm from './Admin/Venueaddform'
import Party from './Admin/Party'
import Dashboard from './Admin/Dashboard'



const App = () => {
  const[log,setLog]=useState(false);

  return (
    <Provider store={store}>
      <userContext.Provider value={[log,setLog]}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/booked' element={<Booked/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
        <Route path='/bookings' element={<Bookings/>}></Route>
        {/* <Route path='/dashboard' element={<Dashboard/>}></Route> */}
        <Route path='/booking' element={<Venue/>}></Route>
        {/* <Route path="/user" element={<User/>} /> */}
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/venueaddform" element={<VenueAddForm/>} />
        <Route path="/partyaddform" element={<Party/>} />
        <Route path="/venues" element={<Venue/>} />
      
        
      </Routes>
    </BrowserRouter>
    </userContext.Provider> 
    </Provider>
  )
}

export default App

