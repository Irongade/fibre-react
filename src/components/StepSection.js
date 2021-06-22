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
            id="steps">
            <div className="container-fluid pl-0">
                <div className="row">
                    <div className="col-md-6 pr-0 steps-body-bg">
                        <div className="steps-body p-4" data-aos="fade-up">
                            <div className="text-center steps-left-title my-3">Steps to Financial Freedom</div>
                            <div className="steps-image text-center my-5">
                                <img src={dashboardLogo} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 px-0 steps-description-bg">
                        <div className="steps-description px-4 py-3" data-aos="fade-up">
                            <div className="description-list my-5 mx-4">
                                <div className="d-flex">
                                    <div className="list-icon mr-4">
                                        <img src={numberLogo1} alt="" />
                                    </div>
                                    <div className="list-content mt-1">
                                        <div className="list-title">
                                            <h6 className="font-weight-bold">Create a FREE Fintech Account</h6>
                                        </div>
                                        <div className="list-description mt-3">
                                            Create a profile and confirm your identity in a few easy steps.
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex my-5">
                                    <div className="list-icon mr-4">
                                        <img src={numberLogo2} alt="" />
                                    </div>
                                    <div className="list-content mt-1">
                                        <div className="list-title">
                                            <h6 className="font-weight-bold">Set your goal</h6>
                                        </div>
                                        <div className="list-description mt-3">
                                            Choose the goal that best suits your needs. 
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="list-icon mr-4">
                                        <img src={numberLogo3} alt="" />
                                    </div>
                                    <div className="list-content">
                                        <div className="list-title">
                                            <h6 className="font-weight-bold">Earn Interests</h6>
                                        </div>
                                        <div className="list-description mt-3">
                                        Now, it's time for you to relax and let your money do all the work for you. 
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