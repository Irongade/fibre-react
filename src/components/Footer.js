import React from "react";

// assets
import homeIcon from "../assets/icons/white/Home.svg"
import mailIcon from "../assets/icons/white/mail.svg"
import telephoneIcon from "../assets/icons/white/telephone.svg"
import linkedinIcon from "../assets/icons/white/linkedin-square.svg"
import whatsappIcon from "../assets/icons/white/whatsapp-square.svg"
import facebookIcon from "../assets/icons/white/facebook-square.svg"
import instagramIcon from "../assets/icons/white/instagram-alt.svg"
import twitterIcon from "../assets/icons/white/twitter.svg"

// styles
import '../styles/Footer.scss';


const Footer = () => {
    return (
        <section id="footer">
        <div className="container">
            <div className="row pt-5 pb-3">
                <div className="col-md-6 col-lg-3 order-md-3 order-lg-0 mt-3">
                    <div className="logo-col">
                        <div className="white-logo">
                            <img src="/corastone/logos/Group 3.svg" alt="" />
                        </div>
                        <form className="newsletter-form mb-4">
                            <h6 className="text-white pt-3 pr-2">Save better, Invest wisely, Loan easy</h6>
                        </form>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-3 order-md-1 order-lg-0 mt-3">
                    <div className="footer-links">
                        <div className="footer-header text-white">Quick Link</div>
                        <div className="footer-link mt-4">
                            <ul>
                                <li><a href="#">Our story</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#" target="_blank">Product Brief</a></li>
                                <li><a href="#">Media</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 order-md-2 order-lg-0 mt-3">
                    <div className="footer-links">
                        <div className="footer-header text-white">Legals</div>
                        <div className="footer-link mt-4">
                            <ul>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 order-md-4 order-lg-0 mt-3">
                    <div className="footer-links">
                        <div className="footer-header text-white">Contact Us</div>
                        <div className="footer-link mt-4">
                            <ul>
                                <li>
                                    <div className="d-flex">
                                        <div className="mr-2">
                                            <img src={homeIcon} alt="" />
                                        </div>
                                        <div className="contact-description">No 8 Omoniyi St, Magodo, Lagos</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <div className="mr-2">
                                            <img src={telephoneIcon} alt="" />
                                        </div>
                                        <div className="contact-description">+2347067984583</div>
                                    </div> 
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <div className="mr-2">
                                            <img src={mailIcon} alt="" />
                                        </div>
                                        <div className="contact-description">hello@fintech.ng</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <div className="">
                                            <a href="#" target="_blank">
                                                <img src={linkedinIcon} alt="" />
                                            </a>
                                        </div> 
                                        <div className="px-1">
                                            <a href="#" target="_blank">
                                                <img src={whatsappIcon} alt="" />
                                            </a>
                                        </div>
                                        <div className="px-1">
                                            <a href="#" target="_blank">
                                                <img src={facebookIcon} alt="" />
                                            </a>
                                        </div>
                                        <div className="px-1">
                                            <a href="#" target="_blank">
                                                <img src={instagramIcon} alt="" />
                                            </a>
                                        </div>
                                        <div className="px-1">
                                            <a href="#" target="_blank">
                                                <img src={twitterIcon} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="copy-right mt-5">© 2021 powered by Zuga Nation lol.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Footer;