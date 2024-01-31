import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../components/Redux/actions/action';

export default function Bookings() {
    const prod=useSelector(state=>state);
    const bookings=prod.allProducts.cartProduct;
    const dispatch=useDispatch()
  return (
    <>
      {/* <button onClick={console.log(prod)}/> */}
      <div className='event-content'>
                {bookings.map(items=>{
                    return(
                        <div className={items.cName}>
                        <h2>{items.eName}</h2>
                        <p>{items.date}</p>
                        <h4>{items.location}</h4>
                        <button onClick={()=>dispatch(removeCart(items))}>Cancel</button>
                    </div>
                    )   
                })}
            </div>
    </>
  )
}
