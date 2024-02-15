import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Bookings.css'
import Navbar from '../components/Navbar/Navbar';
// import { useDispatch, useSelector } from 'react-redux'
// import { removeCart } from '../components/Redux/actions/action';

export default function Bookings() {
    // const prod=useSelector(state=>state);
    // const bookings=prod.allProducts.cartProduct;
    // const dispatch=useDispatch()

    const[bookings,setBookings]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/auth/events")
        .then((r)=>{
          setBookings(r.data);
        })
    })

  return (
    <>
      <Navbar/>
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
  )
}
