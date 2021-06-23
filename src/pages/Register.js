import React from 'react';
import '../styles/Register.scss'

import Footer from "../components/Footer"


//assets
import shape1 from "../assets/images/Rectangle-158.svg"
import shape2 from "../assets/images/Ellipse-32.svg"

const Register = () => {
    return (
        <>
           <div className="shape-1"><img src={shape1} alt="" /></div>
                <div className="shape-2"><img src={shape2} alt="" /></div>
                <div className="shape-3"><img src={shape1} alt="" /></div>
                <div className="shape-4"><img src={shape2} alt="" /></div>
        <div class="rootContainer">
        <div class="image">
          <img
            src="https://dashboard.piggyvest.com/static/media/piggyvest-logo.0b78a8fa.svg"
            alt="pic"
          />
        </div>
        <div class="mainBody">
          <header class="header">
            <h1>Create a Secure Account</h1>
            <p>Welcome to the future of savings and investement</p>
          </header>
          <div class="form">
            <form action="" id="reg">
              <div class="containers">
                <label for=""> Full Name </label>
                <input
                    id="input"
                  type="text"
                  placeholder="Full Name"
                  name="Full Name"
                />
              </div>
              <div class="containers">
                <label for="Email"> Email Address </label>
                <input type="text" placeholder="Email" name="Email" id="input" />
              </div>
              <div class="containers">
                <label for="Phone Number"> Phone Number </label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="Phone Number"
                  id="input"
                />
              </div>
              <div class="containers">
                <label for="Password"> Password </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="Password"
                  id="input"
                />
              </div>
              <div class="containers">
                <label for="Referrer">
                  Referrer Phone or Promo Code (Optional)
                </label>
                <input type="text" placeholder="Referrer Phone Or Code" id="input" />
              </div>
              <div class="containers">
                <label for=""> How Did You Hear About Us? (Optional) </label>
                <form action="">
                  <input
                    list="browsers"
                    placeholder="Click To Select"
                    class="line"
                    id="input"
                  />
                  <datalist id="browsers">
                    <option value="Click To Select"> Click To Select</option>
                    <option value="Facebook"> Facebook </option>
                    <option value="Twitter"> Twitter</option>
                    <option value="Instagram"> Instagram</option>
                    <option value="Friend/Family/Coworker Referral"
                      >Friend/Family/Coworker Referral</option
                    >
                    <option value="Google Search"> Google Search</option>
                    <option value="Google Playstore">Google Playstore</option>
                    <option value="Online Blog">Online Blog</option>
                    <option value="Local Newspaper">Local Newspaper</option>
                    <option value="At an Event">At an Event</option>
                    <option value="Other">Other</option>
                  </datalist>
                </form>
              </div>
              <div class="button">
                <button class="btn">CREATE ACCOUNT</button>
              </div>
            </form>
          </div>
        </div>
        <a id="link" href="#"> Already have an account? Log In </a>
      </div>
      <Footer />
      </>
    )
}

export default Register;
