import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";



const Home = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
      
        <h1>Web development and websites </h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "Facebook Ads SMM",
            "Google Ads",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link to="/Contacts" className="btn btn-success my-5">CONTACT ME</Link>
      </div>
    </div>
  );
};

export default Home;
