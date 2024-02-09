import './navbar.css';
import { Link } from 'react-router-dom';
import { navItems } from '../NavItems';
import Button from '../Button/Button';
import Dropdown from '../Dropdown';
import React,{useContext, useState} from 'react';
import { userContext } from '../context/context';
import Drop from '../Dropdown/Drop';
import Drop1 from '../Dropdown/Drop1';

function Navbar() {
    const [log,setLog]=useContext(userContext);
    const[dropdown,setDropdown]=useState(false);
    return ( 
        <>
            <nav className='navbar'>
                <Link to="/bookings" className='navbar-logo'>
                    JUBLIX
                </Link>
                <ul className='nav-item'>
                    {navItems.map(items=>{
                        if(items.title==="SERVICES"){
                            return(
                                <li key={items.id} className={items.cName} onMouseEnter={()=> setDropdown(true)} onMouseLeave={()=> setDropdown(false)}>
                                    <Link to={items.path} >{items.title}</Link>
                                    {dropdown && <Dropdown/>}
                                </li>
                                );
                        }
                        return(
                        <li key={items.id} className={items.cName}>
                            <Link to={items.path}>{items.title}</Link>
                        </li>
                        );
                    })}
                </ul>
                    <div className='navbar-sign'>
                        {
                            log?
                            // <p>
                            //     hi {localStorage.getItem("name").split("@")[0]}
                            // </p>
                            <Drop1/>

                        :
                        
                        <Button/>
                        }
                    </div>
            </nav>
        </>
    );
}

export default Navbar;