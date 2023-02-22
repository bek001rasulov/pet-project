import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {SiJavascript} from 'react-icons/si'
import {FaBars, FaTimes} from "react-icons/fa";
import Button from "./Button";
import './Navbar.css'
import {IconContext} from "react-icons";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <SiJavascript className="navbar-icon"/>
                            JavaScript
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={() => {
                                    closeMobileMenu();
                                    window.scrollTo(0, 0)
                                }}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-links" onClick={() => {
                                    closeMobileMenu();
                                    window.scrollTo(0, 0)
                                }}>
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-links" onClick={() => {
                                    closeMobileMenu();
                                    window.scrollTo(0, 0)
                                }}>
                                    Products
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to="/sign-up" className="btn-link" onClick={() => {
                                        window.scrollTo(0, 0)
                                    }}>
                                        <Button buttonStyle="btn--outline">SIGN UP</Button>
                                    </Link>
                                ) : (
                                    <Link to="/sign-up" className="btn-link" onClick={() => {
                                        closeMobileMenu();
                                        window.scrollTo(0, 0)
                                    }}>
                                        <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                                            SIGN UP
                                        </Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
