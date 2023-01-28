import React, { Component } from "react";
import { Link } from "react-router-dom";

class PrivacyPolicyPage extends Component {
  render() {
    return (
      <div className="privacypolicymaindiv">
        {/* <div>
          <h1 className="privacy-policy-title">
            Privacy Policy for Phone Clone App
          </h1>
        </div>  */}

        {/* <div className="welcome-page-className">
          <h1 className="welcometitle">Privacy Policy for Phone Clone App</h1>

          <div className="top-right-button-container">
            <Link to="/" className="home-button">Home</Link>
            <Link to="/app-ads.txt" className="about-button top-right-button">AdsID</Link>
          </div>
          
        </div> */}




        <div className="privacy-policy-page">

        <h1 className="welcometitle">Privacy Policy for Phone Clone App</h1>

          <h2 className="title">Personal information:</h2>
          <p className="privacy-policy-text">
            We May use your personal information like images provided by you
            with your consent for only showing you with different styles but we
            are not giving these images data provided by you to any third party
            library.
          </p>
          <h2 className="title">Non-personal Data::</h2>
          <p className="privacy-policy-text">
            We are using non personal information like wifi state or phone
            model, how much data you are using for only states showing.
          </p>
          <h2 className="title">Internet Access::</h2>
          <p className="privacy-policy-text">
            We are accessing internet state for checking internet speed and also
            for calculation of internet usage
          </p>
          <h2 className="title">Camera:</h2>
          <p className="privacy-policy-text">
            We need camera permission for helping the user to capture his/her
            pictures for editing it according to his needs or scanning QR code.
          </p>
          <h2 className="title">Microphone:</h2>
          <p className="privacy-policy-text">
            We do not save any recordings or user information on our own
            servers. The microphone is only used to listen only that will be
            converted into text.
          </p>

          <h2 className="title">Storage:</h2>
          <p className="privacy-policy-text">
            We need Storage permission in our application, the main purpose of
            this is to Save user’s work in the SD card or get files from mobile
            storage.
          </p>

          <h2 className="title">Third Party Services:</h2>
          <p className="privacy-policy-text">
            We are using variety of third party services like Google ads or
            Facebook ads. We are not controlling third party websites or
            services Any link to such a website or service appears in the Apps
            does not mean that we endorse them or practices relating to user
            information.
          </p>

          <h2 className="title">Changes in our privacy policy:</h2>
          <p className="privacy-policy-text">
            Our privacy policy might change with time, we would let users notify
            as any changes in privacy.
          </p>

          <h2 className="title">Contact Us:</h2>
          <p className="privacy-policy-text">
            If you have any issue regarding our apps, please feel free to
            contact us or any other information you need to know more about us.
            Contact us at awesomecreativesecureapps@gmail.com{" "}
          </p>

          {/* <p className="privacy-policy-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, magna id bibendum ornare, velit elit fringilla ligula, et
            condimentum ipsum metus euismod est. Praesent euismod, magna id
            bibendum ornare, velit elit fringilla ligula, et condimentum ipsum
            metus euismod est.
          </p> */}
        </div>

        {/* <div className="button-container">
          <Link to="/" className="home-button">Home</Link>
        </div> */}
      </div>
    );
  }
}

export default PrivacyPolicyPage;
