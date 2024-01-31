import './navbar.css';
import { Link } from 'react-router-dom';
import { navItems } from '../NavItems';
import Button from '../Button/Button';
import Dropdown from '../Dropdown';
import React,{useState} from 'react';

function Navbar() {
    const[dropdown,setDropdown]=useState(false);
    return ( 
        <>
            <nav className='navbar'>
                <Link to="/" className='navbar-logo'>
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
                    <Button/>
                </div>
            </nav>
        </>
    );
}

export default Navbar;