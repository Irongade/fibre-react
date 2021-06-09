import React from "react";

// components
import BannerSection from "../components/BannerSection"
import JustificationSection from "../components/JustificationSection"
import StepSection from "../components/StepSection"
import TestimonySection from "../components/TestimonySection"
import Footer from "../components/Footer"

const LandingPage = () => {
    return (    
        <div style={{backgroundColor: "#F0F0F0"}} class="home-wrapper">
            <BannerSection />
            <JustificationSection />
            <StepSection />
            <TestimonySection />
            <Footer />
        </div>
    )
}

export default LandingPage;