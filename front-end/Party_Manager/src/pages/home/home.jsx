import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import bg1 from '../../assets/background-1.jpg'
import './home.css';
import { Link } from 'react-router-dom';
import Event from '../../components/Event/Event';
import eside from '../../assets/events-side.jpg'
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div>
      <Navbar/> 
      <div className='outter-wrap'>
        <div className="img-wrap">
            <img src={bg1} id="back-img"/>
            <div className='home-para'>
              <h1>JUBLIX</h1>
              <p>The Bay's Prime Event Organisers</p>
              <Link to='/services' id="para-link">Book Now</Link>
            </div>
        </div>
      </div>
      <div className='home-events'>
        <div className='events-events'>
          <Event/>
        </div>
        <div className='event-img'>
          <img src={eside}></img>
        </div>
      </div>
      <div className='home-footer'>
            <Contact/>
      </div>
    </div>
  )
}

export default Home
