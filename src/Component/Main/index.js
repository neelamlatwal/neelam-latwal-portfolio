import React from "react";
import "./main.css";
import Profile from "../../assets/images/profile.jpg";
import Facebook from "../../assets/icon/facebook-icon.png";
function Main() {
  return (
    <div className="layout-wrapper">
      <div className="layout-nav">
        <h1 className="head-title pt-3">Neelam Latwal</h1>
        <div className="navbar">
          <div className="profile-section">
            <img
              src={Profile}
              alt="image"
              className="profile-image rounded-circle mb-3"
            />
          </div>
          <div class="bio mb-3">
            Hi, my name is Neelam Latwal and I'm a senior software engineer.
            Welcome to my personal website!
          </div>
          <ul class="social-list  py-2 mx-auto">
            <li class="list-inline-item">
              <a href="#"> <i class="fa fa-facebook" ></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#">
              <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
              <i class="fa fa-gitlab" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <ul class="navbar-nav flex-column text-start">
            <li class="nav-item">
              <a class="nav-link active" href="index.html">
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="portfolio.html">
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="portfolio.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="layout-content">
        {/* about me */}
        <section class="about-me-section p-5 theme-bg-light">
          <div class="container">
            <div class="profile-teaser row">
              <div class="col-7">
                <h2 class="name font-weight-bold mb-1">Neelam Latwal</h2>
                <div class="tagline mb-3">Senior Software Engineer</div>
                <div class="bio mb-4">
                  I'm a software engineer specialised in frontend development
                  for complex scalable web apps. .
                </div>
                <div class="mb-4">
                  <a class="btn btn-custom me-2 mb-3" href="portfolio.html">
                    <span class="d-none d-md-inline">View</span> Portfolio
                  </a>
                  <a class="btn btn-secondary mb-3" href="resume.html">
                    <span class="d-none d-md-inline">View</span> Resume
                  </a>
                </div>
              </div>

              {/* <div class="col-md-5 col-lg-5">
                <img
                  class="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
                  src="assets/images/profile-lg.jpg"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </section>
        {/* overview section */}
        <section class="overview-section p-5 ">
          <div class="container">
            <h2 class="section-title font-weight-bold mb-3">What I do</h2>
            <div class="section-intro mb-5">
              I have more than 10 years' experience building software for
              clients all over the world. Below is a quick overview of my main
              technical skill sets and technologies I use. Want to find out more
              about my experience? Check out my{" "}
              <a class="text-link" href="resume.html">
                online resume
              </a>{" "}
              and{" "}
              <a class="text-link" href="portfolio.html">
                project portfolio
              </a>
              .
            </div>
            <div class="row">
              <div class="item col-6 col-lg-4">
                <div class="item-inner">
                  <div class="item-icon"></div>
                  <h3 class="item-title">Vanilla JavaScript</h3>
                  <div class="item-desc">
                    List skills/technologies here. You can change the icon above
                    to any of the 1500+{" "}
                    <a
                      class="theme-link"
                      href="https://fontawesome.com/"
                      target="_blank"
                    >
                      FontAwesome 5 free icons
                    </a>{" "}
                    available. Aenean commodo ligula eget dolor.
                  </div>
                </div>
              </div>
              <div class="item col-6 col-lg-4">
                <div class="item-inner">
                  <div class="item-icon"></div>
                  <h3 class="item-title">Angular, React &amp; Vue</h3>
                  <div class="item-desc">
                    List skills/technologies here. You can change the icon above
                    to any of the 1500+{" "}
                    <a
                      class="theme-link"
                      href="https://fontawesome.com/"
                      target="_blank"
                    >
                      FontAwesome 5 free icons
                    </a>{" "}
                    available. Aenean commodo ligula eget dolor.{" "}
                  </div>
                </div>
              </div>

              <div class="item col-6 col-lg-4">
                <div class="item-inner">
                  <div class="item-icon"></div>
                  <h3 class="item-title">Node.js</h3>
                  <div class="item-desc">
                    List skills/technologies here. You can change the icon above
                    to any of the 1500+{" "}
                    <a
                      class="theme-link"
                      href="https://fontawesome.com/"
                      target="_blank"
                    >
                      FontAwesome 5 free icons
                    </a>{" "}
                    available. Aenean commodo ligula eget dolor.{" "}
                  </div>
                </div>
              </div>

              <div class="item col-6 col-lg-4">
                <div class="item-inner">
                  <div class="item-icon"></div>
                  <h3 class="item-title">HTML &amp; CSS</h3>
                  <div class="item-desc">
                    List skills/technologies here. You can change the icon above
                    to any of the 1500+{" "}
                    <a
                      class="theme-link"
                      href="https://fontawesome.com/"
                      target="_blank"
                    >
                      FontAwesome 5 free icons
                    </a>{" "}
                    available. Aenean commodo ligula eget dolor.{" "}
                  </div>
                </div>
              </div>
              <div class="item col-6 col-lg-3">
                <div class="item-inner">
                  <div class="item-icon"></div>
                  <h3 class="item-title">Sass &amp; LESS</h3>
                  <div class="item-desc">
                    List skills/technologies here. You can change the icon above
                    to any of the 1500+{" "}
                    <a
                      class="theme-link"
                      href="https://fontawesome.com/"
                      target="_blank"
                    >
                      FontAwesome 5 free icons
                    </a>{" "}
                    available. Aenean commodo ligula eget dolor.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* project section */}
        <section class="featured-section p-3 p-lg-5">
          <div class="container">
            <h2 class="section-title font-weight-bold mb-5">
              Featured Projects
            </h2>
            <div class="row">
              <div class="col-md-6 mb-5">
                <div class="card project-card">
                  <div class="row no-gutters">
                    <div class="col-12 col-xl-5 card-img-holder">
                      <img
                        src="assets/images/project/project-1.jpg"
                        class="card-img"
                        alt="image"
                      />
                    </div>
                    <div class="col-12 col-xl-7">
                      <div class="card-body">
                        <h5 class="card-title">
                          <a href="project.html" class="theme-link">
                            Project Heading
                          </a>
                        </h5>
                        <p class="card-text">
                          Project intro lorem ipsum dolor sit amet, consectetuer
                          adipiscing elit. Cum sociis natoque penatibus et
                          magnis dis parturient montes.
                        </p>
                        <p class="card-text">
                          <small class="text-muted">Client: Google</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="col-md-6 mb-5">
                <div class="card project-card">
                  <div class="row no-gutters">
                    <div class="col-12 col-xl-5 card-img-holder">
                      <img
                        src="assets/images/project/project-2.jpg"
                        class="card-img"
                        alt="image"
                      />
                    </div>
                    <div class="col-12 col-xl-7">
                      <div class="card-body">
                        <h5 class="card-title">
                          <a href="project.html" class="theme-link">
                            Project Heading
                          </a>
                        </h5>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Cum sociis natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus.{" "}
                        </p>
                        <p class="card-text">
                          <small class="text-muted">Client: Dropbox</small>
                        </p>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
              <div class="col-md-6 mb-5">
                <div class="card project-card">
                  <div class="row no-gutters">
                    <div class="col-12 col-xl-5 card-img-holder">
                      <img
                        src="assets/images/project/project-3.jpg"
                        class="card-img"
                        alt="image"
                      />
                    </div>
                    <div class="col-12 col-xl-7">
                      <div class="card-body">
                        <h5 class="card-title">
                          <a href="project.html" class="theme-link">
                            Project Heading
                          </a>
                        </h5>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Cum sociis natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus.{" "}
                        </p>
                        <p class="card-text">
                          <small class="text-muted">Client: Google</small>
                        </p>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
              <div class="col-md-6 mb-5">
                <div class="card project-card">
                  <div class="row no-gutters">
                    <div class="col-12 col-xl-5 card-img-holder">
                      <img
                        src="assets/images/project/project-4.jpg"
                        class="card-img"
                        alt="image"
                      />
                    </div>
                    <div class="col-12 col-xl-7">
                      <div class="card-body">
                        <h5 class="card-title">
                          <a href="project.html" class="theme-link">
                            Project Heading
                          </a>
                        </h5>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Cum sociis natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus.{" "}
                        </p>
                        <p class="card-text">
                          <small class="text-muted">Client: Uber</small>
                        </p>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>

          </div>

        </section>
      </div >
    </div >
  );
}

export default Main;
