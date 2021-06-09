import React, {useEffect} from "react";
import '../styles/NavBar.scss'

const NavBar = () => {
    useEffect(
        () => {
            const top = document.querySelector('#mainNav');
            const logo = document.querySelector('.fundbae-logo');
            const menu = document.querySelector('.menu');
            window.addEventListener('scroll', function() {
                if(window.scrollY > 50) {
                    top.classList.add('navbar-scrolled')
                    logo.src = '/corastone/logos/Group 3 scroll.svg';
                    menu.src = '/corastone/icons/blue/menu.svg';
                } else {
                    top.classList.remove('navbar-scrolled')
                    logo.src = '/corastone/logos/Group 3.svg';
                    menu.src = '/corastone/icons/white/menu.svg';
                }
            })
        }
    )

    return (
        <div>
            <nav class="navbar navbar-expand-md fixed-top navbar-light" id="mainNav">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="/corastone/logos/Group 3.svg" alt="" class="fundbae-logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon d-none"></span> 
                        <img class="menu" src="/corastone/icons/white/menu.svg" alt="logo" />
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