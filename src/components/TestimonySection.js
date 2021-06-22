import React, {useEffect} from "react";
import { useMediaQuery } from 'react-responsive'

//scroll observer
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion"

// style
import '../styles/TestimonySection.scss'

// assets 
import googlePlayLogo from "../assets/images/google-play-badge.svg"
import appleStoreLogo from "../assets/images/apple-store-badge.svg";
import mobileAppLogo from "../assets/images/mobileApp.png";
import interswitchLogo from "../assets/logos/interswitch-logo.svg";
import paystackLogo from "../assets/logos/paystack-logo.svg";
import flutterwaveLogo from "../assets/logos/flutterwave-logo.svg";

const TestimonySection = () => {

    const isMobile = useMediaQuery({ query: `(max-width: 600px)` });
    const animation = useAnimation();
    const [featuredRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: isMobile ? "-150px" : "-300px"
    });

    useEffect(() => {
        if(inView) {
            animation.start("visible")
        }
        
    }, [animation, inView])

    return (
        <motion.section 
            ref={featuredRef}
            animate={animation}
            initial="hidden"
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: [.6,.05,-.01, .9]
                    }
                },
                hidden: {
                    opacity: 0,
                    y: 72
                }

            }}
            id="testimonies"
        >
            <div className="container">
                <div className="testimonies-title pt-5 pb-3 d-none" data-aos="fade-up">
                    <h4>All the praises from save2B users</h4>
                </div>

                <div className="row cta-card pt-3">
                    <div className="col-md-6">
                        <div className="testimony-jumbotron">
                            <h4 className="convinced">Join Us Today</h4>
                            <div className="body-text mb-3">Download Fintech mobile app on</div>
                            <div className="testimony-jumbotron-button d-flex">
                                <a href="#" target="_blank" className="border-0">
                                    <img src={googlePlayLogo} alt="google Play Badge" className="img-fluid" />
                                </a>
                                <a href="#" target="_blank" className="ml-3 border-0">
                                    <img src={appleStoreLogo} alt="Apple Store Badge" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mobile-img-wrapper">
                            <img src={mobileAppLogo} alt="fundbae App" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div data-testid="partner-logos" className="partners">
                    <h4 >Our Partners</h4>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="partner-logo-wrapper">
                                <img src={flutterwaveLogo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="partner-logo-wrapper">
                                <img src={interswitchLogo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="partner-logo-wrapper">
                                <img src={paystackLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default TestimonySection;