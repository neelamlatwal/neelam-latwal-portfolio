import React from "react";
import "./main.css";
import Profile from "../../assets/images/profile.jpg";
// import Facebook from "../../assets/icon/facebook-icon.png";
import OverView from "../Overview";
import Blog from "../Blog"
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
                  I'm a Senior Software Engineer specializing in frontend development for complex, scalable web applications.
                  I also share insights on software development through my blog.
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
        <OverView />
        {/* project section */}
        {/* <section class="featured-section p-3 p-lg-5">
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

        </section> */}
        {/* Blog */}
        <Blog />
      </div >
    </div >
  );
}

export default Main;
