import React from 'react'
import "./overview.css"

function index() {
    return (
        <div class="overview-section p-5 ">
            <div class="container">
                <h2 class="section-title font-weight-bold mb-3">What I do</h2>
                <div class="section-intro mb-5">
                    I have over 5 years of experience building high-quality software solutions for a wide range of clients.
                    Below is a brief overview of my key technical skills and the technologies I specialize in.
                    {/* Want to learn more about my experience? Feel free to explore my .
                    <a class="text-link" href="resume.html">
                        online resume
                    </a>{" "}
                    and{" "}
                    <a class="text-link" href="portfolio.html">
                        project portfolio
                    </a>
                    . */}
                </div>
                <div class="row">
                    <div class="item col-6 col-lg-4">
                        <div class="item-inner">
                            <div class="item-icon"></div>
                            <h3 class="item-title">Vanilla JavaScript</h3>
                            <div class="item-desc">
                                Mastering JavaScript fundamentals allows me to build dynamic,
                                responsive web applications from scratch, without relying on frameworks.
                                My deep understanding of core concepts, like closures, event handling, and asynchronous programming,
                                ensures optimal performance and scalability in every project I develop.
                            </div>
                        </div>
                    </div>
                    <div class="item col-6 col-lg-4">
                        <div class="item-inner">
                            <div class="item-icon"></div>
                            <h3 class="item-title"> React &amp; Next.js </h3>
                            <div class="item-desc">
                                Specializing in React, I build fast, interactive user interfaces using
                                a component-based architecture that promotes reusability and maintainability. With Next.js, I create optimized, server-side rendered applications that ensure high performance, SEO optimization, and seamless user experiences. Whether it’s single-page applications or more complex web platforms, I deliver scalable and efficient solutions.


                            </div>
                        </div>
                    </div>

                    <div class="item col-6 col-lg-4">
                        <div class="item-inner">
                            <div class="item-icon"></div>
                            <h3 class="item-title">Node.js</h3>
                            <div class="item-desc">
                                Leveraging Node.js, I build robust server-side applications and RESTful APIs that efficiently handle data-intensive tasks. My experience with Node's non-blocking, event-driven architecture enables the development of scalable backend solutions that integrate seamlessly with the frontend,
                                ensuring high performance and reliability.
                            </div>
                        </div>
                    </div>

                    <div class="item col-6 col-lg-4">
                        <div class="item-inner">
                            <div class="item-icon"></div>
                            <h3 class="item-title">HTML &amp; CSS</h3>
                            <div class="item-desc">
                                I have extensive experience in creating semantic, accessible HTML structures and crafting pixel-perfect, responsive layouts using CSS. From custom styling with Flexbox and Grid to optimizing for mobile devices,
                                I ensure that every web page looks and functions flawlessly across all browsers and screen sizes.
                            </div>
                        </div>
                    </div>
                    <div class="item col-6 col-lg-4">
                        <div class="item-inner">
                            <div class="item-icon"></div>
                            <h3 class="item-title">Bootstrap & Tailwind CSS</h3>
                            <div class="item-desc">
                                I use frameworks like Bootstrap and Tailwind CSS to rapidly develop responsive,
                                mobile-first designs with clean and consistent code. Bootstrap helps me create robust layouts quickly using predefined components, while Tailwind allows for more flexibility and customization, enabling me to efficiently build modern,
                                utility-first designs that are easy to maintain and scale.
                            </div>
                        </div>
                    </div>
                    <div class="item col-6 col-lg-4">
                        <div class="item-inner">
                            <div class="item-icon"></div>
                            <h3 class="item-title">GraphQL</h3>
                            <div class="item-desc">
                            I utilize GraphQL to create efficient, flexible APIs that allow clients to request exactly the data they need, reducing over-fetching and under-fetching of data. By leveraging GraphQL's powerful querying capabilities, I streamline communication between frontend and backend, optimizing performance for complex, 
                            data-driven applications.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index