import React from 'react'
import './Gallery.css'
import Navbar from '../../components/Navbar/Navbar'
import pic1 from '../../assets/gallery-1.jpg'
import pic2 from '../../assets/gallery-2.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Gallery = () => {
    const picture=[pic1,pic2];
  return (
    <div>
      <Navbar/>
      <div className='gallery-head'>
        <h1>Gallery</h1>
        <p>Your World Through Our Eyes</p>
      </div>
      <div className='gallery-img'>
        {
            picture.map(item=>{
                return(
                    <div className='gallery-pic'>
                     <img src={item}></img>
                     <button><FavoriteBorderIcon/></button>
                    </div>
                )
            })
        }
        
      </div>
    </div>
  )
}

export default Gallery
