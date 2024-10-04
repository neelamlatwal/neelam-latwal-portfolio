import React from 'react';
import "./blog.css";


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
                            <div className="card-img-top" >

                                <img src={require('../../assets/images/blog-1.webp')}  alt="blog-1"/>
                            </div>
                        <div className='card-body'>
                            <h5 className="card-title">
                                <a href="blog-post.html">JavaScript Arrays & Methods: A Complete Guide
                                </a></h5>
                            <p className="card-text">
                                This guide explores the core concepts of JavaScript arrays and their built-in methods, offering practical
                                examples and best practices for data manipulation in web applications. </p>

                            <p className="read-more">
                                <a
                                    href="https://medium.com/@nitulatwal/javascript-arrays-methods-a-complete-guide-0131aaaf9072">Read more →</a></p>
                        </div>
                        </div>

                    </div>
                    <div className='col-md-4'>
                        <div className='card blog-post-card'>
                            <div className="card-img-top" >

                                <img src={require('../../assets/images/blog-2.webp')}  alt="blog-1"/>
                            </div>
                        <div className='card-body'>
                            <h5 className="card-title">
                                <a href="blog-post.html">Difference Between Var, Let, and Const in Javascript
                                </a></h5>
                            <p className="card-text">
                            This guide explains the key differences between var, let, and const in JavaScript, highlighting their unique behaviors, scopes, and use cases. By breaking down concepts like block scope, hoisting, and mutability, it provides a clear understanding of when and why to use each declaration </p>

                            <p className="read-more">
                                <a
                                    href="https://medium.com/p/a2a1b5cdab13">Read more →</a></p>
                        </div>
                        </div>

                    </div>
                    <div className='col-md-4'>
                        <div className='card blog-post-card'>
                            <div className="card-img-top" >

                                <img src={require('../../assets/images/blog-3.png')}  alt="blog-1"/>
                            </div>
                        <div className='card-body'>
                            <h5 className="card-title">
                                <a href="blog-post.html">Why React JS is Known as a Single Page Application Framework
                                </a></h5>
                            <p className="card-text">
                            This guide explains why React JS is often associated with building Single Page Applications (SPAs). It covers how React manages routing and dynamically updates the UI without requiring full-page reloads, creating fast, seamless user experiences. The guide also explores React's component-based architecture, which simplifies the development and maintenance of SPAs.

. </p>

                            <p className="read-more">
                                <a
                                    href="https://medium.com/p/1806e8182feb">Read more →</a></p>
                        </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default index