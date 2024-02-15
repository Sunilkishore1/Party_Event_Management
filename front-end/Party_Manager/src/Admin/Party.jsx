import React, { useEffect, useState } from 'react'
import './Party.css';
import axios from 'axios'


function Party() {
  const[bookings,setBookings]=useState([]);
  useEffect(() => {
      axios.get("http://localhost:8080/api/v1/auth/events")
      .then((r)=>{
        setBookings(r.data);
      })
  })

return (
  <>
    {/* <Navbar/> */}
    <div className='event-content'>
              {bookings.map(items=>{
                  return(

                    <div className="content-containers">
                      <h2>{items.eventType}</h2>
                      <h4>location:{items.venue}</h4>
                      <p>Attending:{items.people}</p>
                      <p>Time:{items.time}</p>
                      <p>Date:{items.date}</p>
                      <p>Status:{items.status}</p>
                      {/* <button onClick={()=>dispatch(removeCart(items))}>Cancel</button> */}
                    </div>
                  )   
              })}
          </div>
  </>
          
    );
    }

export default Party;