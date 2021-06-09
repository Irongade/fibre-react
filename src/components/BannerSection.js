import React from "react";

// style
import '../styles/BannerSection.scss'

const BannerSection = () => {
    return (
        <section id="hero-section" class="bg-deep-blue">
            <div class="shape1"><img src="/corastone/images/polygon.svg" alt="" /></div>
            <div class="shape2"><img src="/corastone/images/mask-group.svg" alt="" /></div>
            <div class="container">
                <div class="row mtop">
                    <div class="col-md-6">
                        <div class="header-description">
                            <h1>Save better, Invest wisely, Loan easy</h1>
                            <h6 class="text-white my-4">Earn up to 15% interest on savings</h6>
                            <h6 class="text-white my-4 d-none">Earn higher interest, better yields on your investment</h6>
                            <div class="d-flex align-items-center pt-3">
                                 <a href="#" target="_blank" class="border-0">
                                    <img src="/corastone/images/google-play-badge.svg" alt="Google Play Badge" class="img-fluid" />
                                </a>
                                 <a href="#" target="_blank" class="ml-3 border-0">
                                    <img src="/corastone/images/apple-store-badge.svg" alt="Apple Store Badge" class="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-none d-md-block">
                        <div class="header-image mt-5">
                            <img src="/corastone/images/manSittingOnCoins.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSection;