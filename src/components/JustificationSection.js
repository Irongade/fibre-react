import React, {useState, useEffect} from "react";
import { useMediaQuery } from 'react-responsive'

// style
import "../styles/JustificationSection.scss"

//scroll observer
import {InView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion"

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
                <div class="shape-1"><img src="/corastone/images/Rectangle-158.svg" alt="" /></div>
                <div class="shape-2"><img src="/corastone/images/Ellipse-32.svg" alt="" /></div>
                <div class="shape-3"><img src="/corastone/images/Rectangle-158.svg" alt="" /></div>
                <div class="shape-4"><img src="/corastone/images/Ellipse-32.svg" alt="" /></div>
                <div class="justification-title" data-aos="fade-up">
                    <h3 class="text-center">Why you should have a <span class="fundbae">Fintech </span>  account</h3>
                    <div class="bar mt-3"></div>
                </div>
                <InView as="div" rootMargin={isMobile ? "-200px" : "-300px"} onChange={(inView) => inView ? SetCurrentDiv('1') : null } >
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
                    class="row">
                        <div class="col-md-6 order-2 order-md-1">
                            <div class="justification-content" data-aos="fade-up">
                                <div class="justification-content-head pt-5 pb-4">
                                    <h5>Make wise investment decisions on the go</h5>
                                </div>
                                <div class="justification-content-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis mattis eros, id volutpat arcu blandit a. Nullam purus justo, scelerisque at nisi a, convallis commodo ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 order-1 order-md-2">
                            <div class="justification-content-image pt-5" data-aos="fade-up">
                                <img src="/corastone/images/manIllustration.svg" alt="" class="img-fluid" />
                            </div>
                        </div>
                    </motion.div>
                </InView>
                <InView as="div" rootMargin={isMobile ? "-200px" : "-300px"} onChange={(inView) => inView ? SetCurrentDiv('2') : null }>
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
                    class="row pt-5">
                        <div class="col-md-6">
                            <div class="justification-content-image pt-5" data-aos="fade-up">
                                <img src="/corastone/images/manAndWomanIllustration 1.svg" alt="" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="justification-content" data-aos="fade-up">
                                <div class="justification-content-head pt-5 pb-4">
                                    <h5>Getting a loan has never been this easy</h5>
                                </div>
                                <div class="justification-content-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis mattis eros, id volutpat arcu blandit a. Nullam purus justo, scelerisque at nisi a, convallis commodo ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </InView>
                <InView as="div" rootMargin={isMobile ? "-200px" : "-300px"} onChange={(inView) => inView ? SetCurrentDiv('3') : null }>
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
                    class="row pt-5">
                        <div class="col-md-6 order-2 order-md-1">
                            <div class="justification-content" data-aos="fade-up">
                                <div class="justification-content-head pt-5 pb-4">
                                    <h5>Pay your bills, manage your expenses</h5>
                                </div>
                                <div class="justification-content-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis mattis eros, id volutpat arcu blandit a. Nullam purus justo, scelerisque at nisi a, convallis commodo ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 order-1 order-md-2">
                            <div class="justification-content-image" data-aos="fade-up">
                                <img src="/corastone/images/manArrowIllustration 4.svg" alt="" class="img-fluid" />
                            </div>
                        </div>
                    </motion.div>
                </InView>
            </div>
        </section>
    )
}

export default JustificationSection;