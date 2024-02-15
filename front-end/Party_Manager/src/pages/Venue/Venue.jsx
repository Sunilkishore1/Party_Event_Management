import Navbar from '../../components/Navbar/Navbar'
import React, { useState,useEffect } from 'react'
import "./Venues.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Venue = () => {
  const [venues,setVenues]=useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/auth/venues")
    .then((r)=>{
      setVenues(r.data);
    })
  }, [])
  
  const navigate=useNavigate();
  return (
    <div>
        <Navbar/>
        <div><center><h1 id='s-title'>Venues</h1></center></div>
        <div className='venues'>
        
        {venues.map(venue=>
            <div className='venue'>
              <div>
                <img src={venue.link}/>
                <h1 id='s-name'>{venue.name}</h1>
               <p id='s-price'>₹{venue.price}</p> 
               <p id='s-price'>{venue.location}</p> 
               <button onClick={()=>{
                  localStorage.setItem('venue',JSON.stringify(venue));
                  navigate("/services")
                }}>Choose Venue</button>
              </div>
            </div>
        )}
        </div>
    </div>
  )
}

export default Venue
