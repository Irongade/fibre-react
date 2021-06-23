import React, {useEffect} from "react";

// styles
import '../styles/NavBar.scss'

// assets 
import whiteMenuLogo from "../assets/icons/white/menu.svg";
import blueMenuLogo from "../assets/icons/blue/menu.svg";
import whiteFintechLogo from "../assets/logos/Group 3.svg";
import blueFintechLogo from "../assets/logos/Group 3 scroll.svg";

const NavBar = () => {
    useEffect(
        () => {
            const top = document.querySelector('#mainNav');
            const logo = document.querySelector('.fundbae-logo');
            const menu = document.querySelector('.menu');
            window.addEventListener('scroll', function() {
                if(window.scrollY > 50) {
                    top.classList.add('navbar-scrolled')
                    logo.src = blueFintechLogo;
                    menu.src = blueMenuLogo;
                } else {
                    top.classList.remove('navbar-scrolled')
                    logo.src = whiteFintechLogo;
                    menu.src = whiteMenuLogo;
                }
            })
        }
    )

    return (
        <div>
            <nav className="navbar navbar-expand-md fixed-top navbar-light" id="mainNav">
                <div data-testid="navbar-container" className="container">
                    <a className="navbar-brand" href="#">
                        <img src={whiteFintechLogo} alt="" className="fundbae-logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon d-none"></span> 
                        <img className="menu" src={whiteMenuLogo} alt="logo" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <div className="ml-auto d-md-flex">
                            <ul className="navbar-nav mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" target="_blank">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a  className="nav-link" href="/register">Sign Up</a>
                                </li> 
                            </ul>

                            {/* <div className="navigation-btn">
                                <button className="px-4 py-2 border-0 text-white">Sign Up</button>
                            </div> */}
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;