import React from "react";
import '../styles/Footer.scss';

const Footer = () => {
    return (
        <section id="footer">
        <div class="container">
            <div class="row pt-5 pb-3">
                <div class="col-md-6 col-lg-3 order-md-3 order-lg-0 mt-3">
                    <div class="logo-col">
                        <div class="white-logo">
                            <img src="/corastone/logos/Group 3.svg" alt="" />
                        </div>
                        <form class="newsletter-form mb-4">
                            <h6 class="text-white pt-3 pr-2">Save better, Invest wisely, Loan easy</h6>
                        </form>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-3 order-md-1 order-lg-0 mt-3">
                    <div class="footer-links">
                        <div class="footer-header text-white">Quick Link</div>
                        <div class="footer-link mt-4">
                            <ul>
                                <li><a href="#">Our story</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#" target="_blank">Product Brief</a></li>
                                <li><a href="#">Media</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 order-md-2 order-lg-0 mt-3">
                    <div class="footer-links">
                        <div class="footer-header text-white">Legals</div>
                        <div class="footer-link mt-4">
                            <ul>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 order-md-4 order-lg-0 mt-3">
                    <div class="footer-links">
                        <div class="footer-header text-white">Contact Us</div>
                        <div class="footer-link mt-4">
                            <ul>
                                <li>
                                    <div class="d-flex">
                                        <div class="mr-2">
                                            <img src="/corastone/icons/white/Home.svg" alt="" />
                                        </div>
                                        <div class="contact-description">No 8 Omoniyi St, Magodo, Lagos</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="mr-2">
                                            <img src="/corastone/icons/white/mail.svg" alt="" />
                                        </div>
                                        <div class="contact-description">+2347067984583</div>
                                    </div> 
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="mr-2">
                                            <img src="/corastone/icons/white/telephone.svg" alt="" />
                                        </div>
                                        <div class="contact-description">hello@fintech.ng</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="">
                                            <a href="#" target="_blank">
                                                <img src="/corastone/icons/white/linkedin-square.svg" alt="" />
                                            </a>
                                        </div> 
                                        <div class="px-1">
                                            <a href="#" target="_blank">
                                                <img src="/corastone/icons/white/whatsapp-square.svg" alt="" />
                                            </a>
                                        </div>
                                        <div class="px-1">
                                            <a href="#" target="_blank">
                                                <img src="/corastone/icons/white/facebook-square.svg" alt="" />
                                            </a>
                                        </div>
                                        <div class="px-1">
                                            <a href="#" target="_blank">
                                                <img src="/corastone/icons/white/instagram-alt.svg" alt="" />
                                            </a>
                                        </div>
                                        <div class="px-1">
                                            <a href="#" target="_blank">
                                                <img src="/corastone/icons/white/twitter.svg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="copy-right mt-5">© 2021 powered by Zuga Nation lol.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Footer;