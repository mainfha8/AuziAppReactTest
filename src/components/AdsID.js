import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdsID extends Component {
  render() {
    return (
      <div className="maindiv">
        <div className="welcome-page-className">
          <h1 className="welcometitle">Ads ID of Auzi Apps Studios</h1>

          <div className="top-right-button-container">
            <Link to="/PrivacyPolicyPage" className="privacy-policy-button ">
              Privacy Policy
            </Link>
            <Link to="/" className="about-button top-right-button">
              Home
            </Link>
          </div>
        </div>

        <div className="privacy-policy-page">
          <h2 className="title">Google ADs ID:</h2>
          <p className="privacy-policy-text">
            google.com, pub-2227737204422905, DIRECT, f08c47fec0942fa0
          </p>
        </div>
      </div>
    );
  }
}

export default AdsID;
