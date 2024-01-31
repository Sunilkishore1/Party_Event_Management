import React,{useState} from 'react'
import { serviceDropdown } from './NavItems'
import { Link } from 'react-router-dom'
import './Dropdown.css'

const Dropdown = () => {
    const [dropdown,setDropdown]=useState(false);
  return (
    <>
        <ul className={dropdown?"services-submenu clicked":"services-submenu"} onClick={()=>setDropdown(!dropdown)}>
            {serviceDropdown.map(items=>{
                return(
                    <li key={items.key}>
                        <Link to={items.path} className={items.cName} onClick={()=>setDropdown(false)}>{items.title}</Link>   
                    </li>
                );
            })}
        </ul>
    </>
  )
}

export default Dropdown
