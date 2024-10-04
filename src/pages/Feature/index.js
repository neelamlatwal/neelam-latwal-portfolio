import React from 'react'
import "./featured.css"

function index() {
  return (
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
                  <img src={require('../../assets/images/project-1.png')} alt="blog-1" />
                </div>
                <div class="col-12 col-xl-7">
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="project.html" class="theme-link">
                        Javascript Kingdom
                      </a>
                    </h5>
                    <p class="card-text">
                      JavaScript Kingdom is your haven in the realm of coding, welcoming JavaScript developers of all stripes. Whether you're taking your first steps or have a tapestry of experience, our platform is crafted to elevate your JavaScript prowess.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Client: Javascript Kingdom</small>
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
                  <img src={require('../../assets/images/project-2.png')} alt="blog-1" />
                </div>
                <div class="col-12 col-xl-7">
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="project.html" class="theme-link">
                        Online Coupon Marketplace Portal
                      </a>
                    </h5>
                    <p class="card-text">
                    Developed and launched an innovative online platform that allows users to buy and sell unused or underutilised coupons at negotiable prices, providing a solution for reducing coupon waste. The portal offers users a seamless experience to list their coupons and negotiate deals with buyers directly.

                    </p>
                    <p class="card-text">
                      <small class="text-muted">Client: Javascript Kingdom</small>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default index