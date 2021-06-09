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
        <section id="hero-section" class="bg-deep-blue">
            <div class="shape1"><img src={bannerShape1} alt="" /></div>
            <div class="shape2"><img src={bannerShape2} alt="" /></div>
            <div class="container">
                <div class="row mtop">
                    <div class="col-md-6">
                        <div class="header-description">
                            <h1>Save better, Invest wisely, Loan easy</h1>
                            <h6 class="text-white my-4">Earn up to 15% interest on savings</h6>
                            <h6 class="text-white my-4 d-none">Earn higher interest, better yields on your investment</h6>
                            <div class="d-flex align-items-center pt-3">
                                 <a href="#" target="_blank" class="border-0">
                                    <img src={googlePlayLogo} alt="Google Play Badge" class="img-fluid" />
                                </a>
                                 <a href="#" target="_blank" class="ml-3 border-0">
                                    <img src={appleStoreLogo} alt="Apple Store Badge" class="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-none d-md-block">
                        <div class="header-image mt-5">
                            <img src={manSittingOnCoins} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSection;