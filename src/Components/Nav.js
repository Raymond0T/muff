import React, { useState } from 'react';
import './Nav.css';
import logo from '../Images/hero-img-200.png';
import MobileMenu from './MobileMenu';
import {FaBars} from 'react-icons/fa';





function Nav(){

    const [menu, setMenu] = useState(false);

    const toggleMenu = ()=>{
        setMenu(!menu);
        console.log(menu);
    };

    return(
        <div className="Nav">
            {menu && <MobileMenu toggle={toggleMenu} style={{display: menu ? "flex" : "none" }}/> }
            
                <img src={logo} height="50" width="50"/>
                <FaBars className="Nav_Hamburger" onClick={toggleMenu}/>
                
                <ul className="Nav_Tab_Container">
                    <li>Home</li>
                    <li>About</li>
                    <li>My Wallet</li>
                    <li>Documentation</li>
                </ul>
            </div>
       
    );
}

export default Nav;