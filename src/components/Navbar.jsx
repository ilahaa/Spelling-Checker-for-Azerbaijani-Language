import React, { useState, useEffect } from 'react';
import "../assests/style/navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavbarActive, setNavbarActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setNavbarActive(true); 
            } else {
                setNavbarActive(false);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={isNavbarActive ? 'myNavbar customActive' : 'myNavbar'}>
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1" />
                        <span className="line line2" />
                        <span className="line line3" />
                    </div>
                    {/* <ul className="menu-items">
                        <li className='myAccount'><Link to="/signIn">Hesabım</Link></li>
                    </ul> */}
                    <h3 className='logo'>
                        <span className='first-word'>Doğru</span>
                        <span className='second-word'>Düzgün</span>
                    </h3>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
