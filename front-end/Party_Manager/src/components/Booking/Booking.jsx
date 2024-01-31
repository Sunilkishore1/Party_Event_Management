import React from 'react'
import'./Booking.css'

const Booking = () => {
  return (
    <div className='Book-form'>
        <h2>Event Booking Form</h2>
        <div className='form-content'>

            <form>
                <label>Event name:
                    <input id="ename" type="text" />
                </label>
                <div className="form-date">
                    <label>
                        Date of Event:
                        <input id="datebox" type="date"/>
                    </label>
                </div>
                <div>
                    <label>
                        Start Time:
                        <input type="time" defaultValue="04:20"/>
                    </label>
                    <label>
                        Finish Time:
                        <input type="time" defaultValue="04:20"/>
                    </label>
                </div>
                <div>
                    <label>
                        Approximate number Attending:
                        <input type='number'></input>
                    </label>
                </div>
                <div className='form-check'>
                    <label>
                        Setup Required:
                        <input type="checkbox" id="Catering" name="Catering" value="Catering"/>
                        <label for="Catering"> Catering-Service</label>
                        <input type="checkbox" id="Dj" name="Dj" value="Dj"/>
                        <label for="Dj">Dj(music)</label>
                        <input type="checkbox" id="photo" name="photo" value="photo"/>
                        <label for="photot">Photographer</label>
                    </label>
                </div>
                <div>
                <label>Event Venue:
                    <input id="ename" type="text" />
                </label>
                </div>
                <div className='form-btn'>
                    <button>Request</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Booking
