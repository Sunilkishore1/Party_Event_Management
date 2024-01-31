import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'
const Button = () => {
  return (
    <Link to="/signup">
        <button className='btn'>SIGN UP</button>
    </Link>
  )
}

export default Button
