import React from 'react';
import "./blog.css"

function index() {
    return (
        <section class="blog-section p-5 p-lg-5">
            <div class="container">
                <h2 class="section-title font-weight-bold mb-5">
                    Latest Blog Posts
                </h2>
                <div class="row">
                    <div className='col-md-4'>
                        <div className='card blog-post-card'>
                            <img className="card-img-top" src="assets/images/blog/blog-post-thumb-card-1.jpg" alt="image" />

                        </div>
                        <div className='card-body'>
                            <h5 className="card-title">
                                <a class="theme-link" href="blog-post.html">Top 3 JavaScript Frameworks
                                </a></h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...</p>

                            <p className="mb-0"><a className="text-link" href="blog-post.html">Read more →</a></p>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default index