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
            <nav class="navbar navbar-expand-md fixed-top navbar-light" id="mainNav">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={whiteFintechLogo} alt="" class="fundbae-logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon d-none"></span> 
                        <img class="menu" src={whiteMenuLogo} alt="logo" />
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <div class="ml-auto d-md-flex">
                            <ul class="navbar-nav mt-2 mt-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">FAQ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" target="_blank">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a  class="nav-link" href="#">Sign In</a>
                                </li> 
                            </ul>

                            <div class="navigation-btn">
                                <button class="px-4 py-2 border-0 text-white">Sign Up</button>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;