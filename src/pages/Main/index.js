import React from "react";
import "./main.css";
import Profile from "../../assets/images/profile.jpg";
// import Facebook from "../../assets/icon/facebook-icon.png";
import OverView from "../Overview";
import Blog from "../Blog";
import FeaturedProject from "../Feature";
import About from "../About"

function Main() {
  return (
    <div className="layout-wrapper">
      <div className="layout-nav">
        <h1 className="head-title pt-3">Neelam Latwal</h1>
        <div className="navbar">
          <div className="profile-section">
            <img
              src={Profile}
              alt="profile-image"
              className="profile-image rounded-circle mb-3"
            />
          </div>
          <div className="bio mb-3">
            Hi, my name is Neelam Latwal and I'm a senior software engineer.
            Welcome to my personal website!
          </div>
          <ul className="social-list  py-2 mx-auto">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/neelam.latwal.1/"> <i className="fa fa-facebook" ></i></a>
            </li>
            <li className="list-inline-item">
              <a href="https://x.com/NeelamLatwal">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/neelam_latwal/">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/neelamlatwal">
                <i className="fa fa-gitlab" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav flex-column text-start">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="layout-content">
        {/* about me */}
        <About />
        {/* overview section */}
        <OverView />
        {/* feature section */}
        <FeaturedProject />
        {/* Blog */}
        <Blog />
      </div >
    </div >
  );
}

export default Main;
