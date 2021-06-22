import React from "react";

// assets
import bannerShape1 from "../assets/images/polygon.svg"
import bannerShape2 from "../assets/images/mask-group.svg"
import googlePlayLogo from "../assets/images/google-play-badge.svg"
import appleStoreLogo from "../assets/images/apple-store-badge.svg";
import manSittingOnCoins from "../assets/images/manSittingOnCoins.svg";

// style
import '../styles/BannerSection.scss'

const BannerSection = () => {
    return (
        <section id="hero-section" className="bg-deep-blue">
            <div className="shape1"><img src={bannerShape1} alt="" /></div>
            <div className="shape2"><img src={bannerShape2} alt="" /></div>
            <div className="container">
                <div className="row mtop">
                    <div className="col-md-6">
                        <div data-testid="banner-header" className="header-description">
                            <h1>Save better, Invest wisely, Loan easy</h1>
                            <h6 className="text-white my-4">Earn up to 15% interest on savings</h6>
                            <h6 className="text-white my-4 d-none">Earn higher interest, better yields on your investment</h6>
                            <div className="d-flex align-items-center pt-3">
                                 <a href="#" target="_blank" className="border-0">
                                    <img src={googlePlayLogo} alt="Google Play Badge" className="img-fluid" />
                                </a>
                                 <a href="#" target="_blank" className="ml-3 border-0">
                                    <img src={appleStoreLogo} alt="Apple Store Badge" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <div className="header-image mt-5">
                            <img src={manSittingOnCoins} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSection;