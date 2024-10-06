import React from "react";
import "./main.css";
// import Facebook from "../../assets/icon/facebook-icon.png";
import Header from "../../components/Header"
import OverView from "../Overview";
import Blog from "../Blog";
import FeaturedProject from "../Feature";
import About from "../About"

function Main() {
  return (
    <div className="layout-wrapper">
      {/* header */}
      <Header />
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
