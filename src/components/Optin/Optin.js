import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
  modal() {
    console.log("Sdsad")
    const modal = document.getElementById("modal");
    modal.classList.toggle("is_open");
    // modal.style.display = "block";

  }

  render() {
    return (
      <div className="optin">
        <p>Want to be the first to know when we launch?</p>
        <button onClick={() => this.modal()}>Click Me</button>
        <div id="modal" className="modal">
          <div className="wrapper">
            <h3>Enter Your Email</h3>
            <div className="clearfix">
              <div className="col-8" />
              <div className="col-3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Optin;
