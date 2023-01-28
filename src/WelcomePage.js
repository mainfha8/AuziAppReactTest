import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
import './WelcomePage.css';

class WelcomePage extends Component {
  render() {
    return (
      <div className="welcomepagemaindiv">
        
      


        <div className="welcomepagebodydiv">
          <div className="welcomepageseconddiv">
            <div className="top-right-button-container">
              <Link to="/privacy-policy" className="privacy-policy-button ">
                Privacy Policy
              </Link>
              {/* <Link to="/AboutPage" className="about-button top-right-button">About</Link> */}
              {/* <Link to="/app-ads.txt" className="about-button top-right-button">
                AdsID
              </Link> */}
            </div>
          </div>

          {/* <div className="top-right-button-container">
          <button className="home-button">Home</button>
          <button className="about-button">About</button>
          <button className="privacy-policy-button">Privacy Policy</button>
        </div> */}
          <div className="welomepagedetail">
            <h1 className="welcometitle">
              Welcome to Auzi Apps Studios <br />
              Coming Soon
            </h1>

            {/* <p className="welcome-intro">
          We are a leading IT company that specializes in software development,
          web design, and digital marketing. Our goal is to help businesses grow
          and succeed in the digital age.
        </p> */}
          </div>
          <Timer />
          <Optin />
        </div>
      </div>
    );
  }
}

export default WelcomePage;
