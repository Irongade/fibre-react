import React, {useState, useEffect} from "react";
import { useMediaQuery } from 'react-responsive'

//scroll observer
import {InView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion"

// styles
import "../styles/JustificationSection.scss"

// assets
import shape1 from "../assets/images/Rectangle-158.svg"
import shape2 from "../assets/images/Ellipse-32.svg"
import manIllustration from "../assets/images/manIllustration.svg"
import manAndWomanIllustration from "../assets/images/manAndWomanIllustration 1.svg"
import manArrowIllustration from "../assets/images/manArrowIllustration 4.svg"


const JustificationSection = () => {
    const [currentDiv, SetCurrentDiv] = useState("");
    const animation = useAnimation();
    const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

    useEffect(() => {
        if(currentDiv === '1') {
            animation.start("visible1")
        }
        if(currentDiv === '2') {
            animation.start("visible2")
        }
        if(currentDiv === '3') {
            animation.start("visible3")
        } 
    }, [animation, currentDiv])


    return (
        <section id="justifications">
            <div className="container">
                <div className="shape-1"><img src={shape1} alt="" /></div>
                <div className="shape-2"><img src={shape2} alt="" /></div>
                <div className="shape-3"><img src={shape1} alt="" /></div>
                <div className="shape-4"><img src={shape2} alt="" /></div>
                <div className="justification-title" data-aos="fade-up">
                    <h3 className="text-center">Why you should have a <span className="fundbae">Fintech </span>  account</h3>
                    <div className="bar mt-3"></div>
                </div>
                <InView as="div" rootMargin={isMobile ? "-150px" : "-300px"} onChange={(inView) => inView ? SetCurrentDiv('1') : null } >
                    <motion.div
                    animate={animation}
                    initial="hidden"
                    variants={{
                        visible1: {
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
                    className="row">
                        <div className="col-md-6 order-2 order-md-1">
                            <div className="justification-content" data-aos="fade-up">
                                <div className="justification-content-head pt-5 pb-4">
                                    <h5>Make wise investment decisions on the go</h5>
                                </div>
                                <div className="justification-content-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis mattis eros, id volutpat arcu blandit a. Nullam purus justo, scelerisque at nisi a, convallis commodo ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-md-2">
                            <div className="justification-content-image pt-5" data-aos="fade-up">
                                <img src={manIllustration} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </motion.div>
                </InView>
                <InView as="div" rootMargin={isMobile ? "-150px" : "-300px"} onChange={(inView) => inView ? SetCurrentDiv('2') : null }>
                    <motion.div 

                       animate={animation}
                       initial="hidden"
                       variants={{
                           visible2: {
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
                    className="row pt-5">
                        <div className="col-md-6">
                            <div className="justification-content-image pt-5" data-aos="fade-up">
                                <img src={manAndWomanIllustration} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="justification-content" data-aos="fade-up">
                                <div className="justification-content-head pt-5 pb-4">
                                    <h5>Getting a loan has never been this easy</h5>
                                </div>
                                <div className="justification-content-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis mattis eros, id volutpat arcu blandit a. Nullam purus justo, scelerisque at nisi a, convallis commodo ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </InView>
                <InView as="div" rootMargin={isMobile ? "-150px" : "-300px"} onChange={(inView) => inView ? SetCurrentDiv('3') : null }>
                    <motion.div 
                    animate={animation}
                    initial="hidden"
                    variants={{
                        visible3: {
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
                    className="row pt-5">
                        <div className="col-md-6 order-2 order-md-1">
                            <div className="justification-content" data-aos="fade-up">
                                <div className="justification-content-head pt-5 pb-4">
                                    <h5>Pay your bills, manage your expenses</h5>
                                </div>
                                <div className="justification-content-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis mattis eros, id volutpat arcu blandit a. Nullam purus justo, scelerisque at nisi a, convallis commodo ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-md-2">
                            <div className="justification-content-image" data-aos="fade-up">
                                <img src={manArrowIllustration} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </motion.div>
                </InView>
            </div>
        </section>
    )
}

export default JustificationSection;