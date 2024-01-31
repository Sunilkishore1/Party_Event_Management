import React from 'react'
import './Booked.css'
import Navbar from '../../components/Navbar/Navbar'
import Event from '../../components/Event/Event'

const Booked = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Event/>
      </div>
    </div>
  )
}

export default Booked
