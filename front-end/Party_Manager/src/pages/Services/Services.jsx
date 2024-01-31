import React from 'react'
import './Services.css'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
        <div>
            <Navbar/>
            <div className='s-title'>
                <center>
                    <h1>EVENT SERVICES</h1>
                    <p><i>Make your Dream Event a Reality</i></p>
                </center>
            </div>
            <div className='s-card'>
            <div className="s-card1">
                <img src="https://static.wixstatic.com/media/633a16e947434f0ba419f80bb5ed32d3.jpg/v1/fill/w_820,h_600,fp_0.77_0.49,q_85,usm_0.66_1.00_0.01,enc_auto/633a16e947434f0ba419f80bb5ed32d3.jpg" alt="Avatar" style={{ width: '100%' }} />
                <div className="s-container1">
                    <center>
                    <h4><b>MUSIC SELECTION</b></h4>
                    <p><i>No Detail is Too Small</i></p>
                    </center>
                    
                </div>
            </div>
            <div className="s-card2">
                <img src="https://static.wixstatic.com/media/5ce81986aaed4a5bb39070616672f0ad.jpeg/v1/fill/w_820,h_600,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/5ce81986aaed4a5bb39070616672f0ad.jpeg" alt="Avatar" style={{ width: '100%' }} />
                <div className="s-container2">
                    <center>
                    <h4><b>CONCEPT AND DESIGN PLANNING</b></h4>
                    <p><i>Stunning and Memorable</i></p>
                    </center>
                    
                </div>
            </div>
            <div className="s-card3">
                <img src="https://static.wixstatic.com/media/6513fd4591ae4fd885f9e918aac679be.jpeg/v1/fill/w_820,h_600,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/6513fd4591ae4fd885f9e918aac679be.jpeg" alt="Avatar" style={{ width: '100%' }} />
                <div className="s-container3">
                    <center>
                    <h4><b>CATERING AND MENU SELECTION</b></h4>
                    <p><i>Perfectly Planned</i></p>
                    </center>
                    
                </div>
            </div>
        </div>
            <Link to="/booking">

            <button>Book Now</button>
            </Link>
        </div>
  )
}

export default Services
