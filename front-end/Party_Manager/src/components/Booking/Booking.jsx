import React, { useState } from 'react';
import './Booking.css';
import axios from 'axios';

const Booking = () => {
    const [formData, setFormData] = useState({
        eventType: "",
        link: "",
        people: "",
        time: "",
        date: "",
        catering: "",
        music: "",
        photographer: "",
        status: "pending",
        venue:JSON.parse(localStorage.getItem("venue")).name
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    // const handleBookings=()=>{
    //     let se=localStorage.getItem("venue");
    //     let s=JSON.parse(se);

    //     if(s==null){
    //         alert("Choose a location before booking!")
    //     }
    //     else{

    //     }
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post("http://localhost:8080/api/v1/auth/events", formData)
            .then(response => {
                console.log(response.data);
                // Add further logic if needed
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className='Book-form'>
            <h2>Event Booking Form</h2>
            <div className='form-content'>
                <form>
                    <label>Event name:
                        <input id="ename" type="text" name="eventType"   onChange={handleChange} required />
                    </label>
                    <div className="form-date">
                        <label>
                            Date of Event:
                            <input id="datebox" type="date" name="date" onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Start Time:
                            <input type="time" name="time"  onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Approximate number Attending:
                            <input type='number' name="people"  onChange={handleChange} />
                        </label>
                    </div>
                    <div className='form-check'>
                        <label>
                            Setup Required:
                            <input type="text" id="Catering" name="catering"  onClick={handleChange} />
                            <label htmlFor="Catering"> Catering-Service</label>
                            <input type="text" id="Dj" name="music"   onClick={handleChange} />
                            <label htmlFor="Dj">Dj(music)</label>
                            <input type="text" id="photo" name="photographer"   onClick={handleChange} />
                            <label htmlFor="photo">Photographer</label>
                        </label>
                    </div>
                    <div className='form-btn'>
                        <button type="submit" onClick={handleSubmit}>Request</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Booking;
