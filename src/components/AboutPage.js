import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends Component {
    render() {
      return (
        <div className="about-page">
          <h1 className="about-title">About Us</h1>
          <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, magna id bibendum ornare, velit elit fringilla ligula, et condimentum ipsum metus euismod est. Praesent euismod, magna id bibendum ornare, velit elit fringilla ligula, et condimentum ipsum metus euismod est.
          </p>
          <div className="button-container">
            <Link to="/" className="home-button">Home</Link>
          </div>
        </div>
      );
    }
  }

export default AboutPage;
