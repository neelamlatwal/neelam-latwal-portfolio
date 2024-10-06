import React from 'react'
import "./header.css"
import Profile from "../../assets/images/profile.jpg";

function index() {
  return (
    <div className="header  text-center">
      <h1 className="blog-name pt-5">Neelam Latwal</h1>
      <nav className="navbar  navbar-expand-lg">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-column" id="navbarSupportedContent">
          <div className="profile-section">
            <img
              src={Profile}
              alt="profile-image"
              className="profile-image rounded-circle mb-3"
            />
            <div className="bio mb-3">
              Hi, my name is Neelam Latwal and I'm a senior software engineer.
              Welcome to my personal website!
            </div>
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
              <a className="nav-link " href="index.html">
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
      </nav>
    </div>
  )
}

export default index