import React,{useEffect} from "react";
import { useMediaQuery } from 'react-responsive'

//scroll observer
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion"

// style
import "../styles/StepSection.scss"

// assets 
import dashboardLogo from "../assets/images/dashboard 1.svg";
import numberLogo1 from "../assets/images/number1white.svg";
import numberLogo2 from "../assets/images/number2white.svg";
import numberLogo3 from "../assets/images/number3white.svg";

const StepSection = () => {

    const isMobile = useMediaQuery({ query: `(max-width: 600px)` });
    const animation = useAnimation();
    const [featuredRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: isMobile ? "-200px" : "-300px"
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
            id="steps">
            <div class="container-fluid pl-0">
                <div class="row">
                    <div class="col-md-6 pr-0 steps-body-bg">
                        <div class="steps-body p-4" data-aos="fade-up">
                            <div class="text-center steps-left-title my-3">Steps to Financial Freedom</div>
                            <div class="steps-image text-center my-5">
                                <img src={dashboardLogo} alt="" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 px-0 steps-description-bg">
                        <div class="steps-description px-4 py-3" data-aos="fade-up">
                            <div class="description-list my-5 mx-4">
                                <div class="d-flex">
                                    <div class="list-icon mr-4">
                                        <img src={numberLogo1} alt="" />
                                    </div>
                                    <div class="list-content mt-1">
                                        <div class="list-title">
                                            <h6 class="font-weight-bold">Create a FREE Fintech Account</h6>
                                        </div>
                                        <div class="list-description mt-3">
                                            Create a profile and confirm your identity in a few easy steps.
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex my-5">
                                    <div class="list-icon mr-4">
                                        <img src={numberLogo2} alt="" />
                                    </div>
                                    <div class="list-content mt-1">
                                        <div class="list-title">
                                            <h6 class="font-weight-bold">Set your goal</h6>
                                        </div>
                                        <div class="list-description mt-3">
                                            Between Safelock and ExpressSavings, choose the goal that best suits your needs. 
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex">
                                    <div class="list-icon mr-4">
                                        <img src={numberLogo3} alt="" />
                                    </div>
                                    <div class="list-content">
                                        <div class="list-title">
                                            <h6 class="font-weight-bold">Earn Interests</h6>
                                        </div>
                                        <div class="list-description mt-3">
                                        Now, it's time for you to relax and let your money do the heavy lifting. 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default StepSection;