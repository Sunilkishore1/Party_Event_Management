import React, { useState } from 'react'
import './Drop.css'

const Drop = () => {
    const [dropdown,setDropdown]=useState(false);
  return (
    <div>
        <div className={dropdown?"drop-outter clicked":"drop-outter"}>
            <button onClick={()=>setDropdown(!dropdown)}>
                {localStorage.getItem("name")}</button>
        </div>
        <div className={dropdown?"drop-submenu clicked":"drop-submenu"} >
            <ul>
                <li>Booking</li>
                <li>Booked</li>
                <li>Log out</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Drop
