import React, {useEffect} from "react";
import { useMediaQuery } from 'react-responsive'

// style
import '../styles/TestimonySection.scss'

//scroll observer
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion"


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
                                    <img src="/corastone/images/google-play-badge.svg" alt="google Play Badge" class="img-fluid" />
                                </a>
                                <a href="#" target="_blank" class="ml-3 border-0">
                                    <img src="/corastone/images/apple-store-badge.svg" alt="Apple Store Badge" class="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mobile-img-wrapper">
                            <img src="/corastone/images/mobileApp.png" alt="fundbae App" class="img-fluid" />
                        </div>
                    </div>
                </div>

                <div class="partners">
                    <h4>Our Partners</h4>
                    <div class="row">
                        <div class="col-md-6 col-lg-3">
                            <div class="partner-logo-wrapper">
                                <img src="/corastone/logos/flutterwave-logo.svg" alt="" />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="partner-logo-wrapper">
                                <img src="/corastone/logos/monnify-logo.svg" alt="" />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="partner-logo-wrapper">
                                <img src="/corastone/logos/interswitch-logo.svg" alt="" />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="partner-logo-wrapper">
                                <img src="/corastone/logos/paystack-logo.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default TestimonySection;