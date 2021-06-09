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
        rootMargin: isMobile ? "-100px" : "-300px"
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
            id="testimonies" class=""
        >
            <div class="container">
                <div class="testimonies-title pt-5 pb-3 d-none" data-aos="fade-up">
                    <h4>All the praises from save2B users</h4>
                </div>

                <div class="row cta-card pt-3">
                    <div class="col-md-6">
                        <div class="testimony-jumbotron">
                            <h4 class="convinced">Join Us Today</h4>
                            <div class="body-text mb-3">Download FundBae mobile app on</div>
                            <div class="testimony-jumbotron-button d-flex">
                                <a href="#" target="_blank" class="border-0">
                                    <img src={googlePlayLogo} alt="google Play Badge" class="img-fluid" />
                                </a>
                                <a href="#" target="_blank" class="ml-3 border-0">
                                    <img src={appleStoreLogo} alt="Apple Store Badge" class="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mobile-img-wrapper">
                            <img src={mobileAppLogo} alt="fundbae App" class="img-fluid" />
                        </div>
                    </div>
                </div>

                <div class="partners">
                    <h4>Our Partners</h4>
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="partner-logo-wrapper">
                                <img src={flutterwaveLogo} alt="" />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="partner-logo-wrapper">
                                <img src={interswitchLogo} alt="" />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="partner-logo-wrapper">
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