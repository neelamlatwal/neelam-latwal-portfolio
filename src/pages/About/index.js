import React from 'react'
import  "./about.css"
import { Link } from 'react-router-dom'
function index() {
    return (
        <div className="about-me-section p-3 p-lg-5 theme-bg-light">
            <div className="container">
                <div className="profile-teaser row">
                    <div className="col">
                        <h2 className="name font-weight-bold mb-1">Neelam Latwal</h2>
                        <div className="tagline mb-3">Senior Software Engineer</div>
                        <div className="bio mb-4">
                            I'm a Senior Software Engineer specializing in frontend development for complex, scalable web applications.
                            I also share insights on software development through my blog.
                        </div>
                        <div className="mb-4">
                            <a className="btn btn-primary me-2 mb-3" href="portfolio.html">
                                <span className="d-none d-md-inline">View</span> Portfolio
                            </a>
                            <Link className="btn btn-secondary mb-3" to="/resume">
                                <span className="d-none d-md-inline">View</span> Resume
                            </Link>
                        </div>
                    </div>

                    {/* <div className="col-md-5 col-lg-5">
          <img
            className="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
            src="assets/images/profile-lg.jpg"
            alt=""
          />
        </div> */}
                </div>
            </div>
        </div>
    )
}

export default index