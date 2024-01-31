import React from 'react'
import './Event.css'

const Event = () => {
    const events=[
        {
            id:1,
            eName:"Birthday",
            date:"12/2/2024",
            location:"Coimbatore",
            cName:"event-item"
        },
        {
            id:2,
            eName:"Wedding",
            date:"15/2/2024",
            location:"Ooty",
            cName:"event-item"
        },
    ];

  return (
    <div>
        <div className='event-container'>
            <div className='event-header'>
                <h2>UPCOMING EVENTS</h2>
                <p>VIP tables available upon inquiry.</p>
            </div>
            <div className='event-content'>
                {events.map(items=>{
                    return(
                        <div className={items.cName}>
                        <h2>{items.eName}</h2>
                        <p>{items.date}</p>
                        <h4>{items.location}</h4>
                        <button>Book</button>
                    </div>
                    )   
                })}
            </div>
        </div>
        
      
    </div>
  )
}

export default Event
