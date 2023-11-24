import React from "react";
import profile from "../profile.jpeg";

import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
 
} from "react-icons/fa";
import javas from "../Javascript.png";
import react from "../react.png";
import node from "../node.png";
import post from "../postgres.png";

const About = () => {
  
  return (
    <section className="container row">
      <div className="col-sm bg-light">
        <div className="">
          <img
            className="img rounded-circle d-block mx-auto w-50 my-5"
            src={profile}
            alt="myPicture"
          />
          <div className="">
           
            <span className="job-title">
              <a className="my-icons p-3" href="/Home">
                Front End Developer
              </a>
            </span>
          </div>
          <div className="justify-content-center">
            <ul className="list-unstyled">
              <li className="active">
                <a
                  className="my-icons d-flex align-items-center gap-2"
                  href="https://www.linkedin.com/in/ansu-jammeh/"
                >
                  <FaLinkedin /> <span>LinkedIn</span>
                </a>
              </li>
              <li className="my-3">
                <a
                  className="my-icons d-flex align-items-center gap-2"
                  href="http://www.twitter.com"
                >
                  <FaTwitter /> <span>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  className="my-icons d-flex align-items-center gap-2"
                  href="https://github.com/ansuj9123"
                >
                  <FaGithub /> <span>Github</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-sm-8">
        <div className="row">
          <div className="col">
            <div className="p-2">
              <br></br>
              <h1 className="question md-5">WHO AM I?</h1>
              <p>
                Hello, I'm Ansu Jammeh, a passionate and dedicated web developer
                with a love for crafting elegant and functional websites. With a
                strong foundation in React, JavaScript, Bootstrap, Node.js, and
                PostgreSQL, I thrive in the dynamic world of web development. My
                journey is defined by continuous learning, adaptability, and a
                commitment to excellence.
              </p>

              <h2>A Lifelong Learner</h2>
              <p>
                In the fast-evolving world of web development, I believe in the
                power of staying curious and embracing new challenges. I'm
                always open to learning new frameworks and technologies based on
                the unique needs of each project. My commitment to continuous
                growth allows me to adapt to the latest industry trends and
                provide you with cutting-edge solutions.
              </p>

              <ol>
                <li>
                  <strong>Integrity:</strong> I place a high value on honesty,
                  ethics, and transparency. You can trust that I will deliver on
                  my promises and maintain the highest standards of
                  professionalism in every project.
                </li>
                <li>
                  <strong>Diligence:</strong> I prioritize honesty, ethics, and
                  transparency. You can trust me to fulfill my promises and
                  uphold the highest standards of professionalism in every
                  project.
                </li>
                <li>
                  <strong>Adaptability:</strong> I embrace change and
                  continuously adapt to new challenges and opportunities. Your
                  project will benefit from my willingness to explore innovative
                  solutions.
                </li>
                <li>
                  <strong>Collaboration:</strong> I believe in the power of
                  teamwork and effective communication. Collaboration is at the
                  heart of my approach to project development, ensuring your
                  vision is brought to life in the best possible way.
                </li>
              </ol>

              <h3>Let's Create Together</h3>
              <p>
                Whether you're a fellow developer, a business owner, or an
                organization seeking to establish a strong online presence, I'm
                here to help you achieve your goals. Let's work together to turn
                your web development dreams into reality.
              </p>
              <p>
                Feel free to <a href="/Contacts">get in touch</a> to discuss how
                I can contribute to your next project. I'm excited to embark on
                this creative journey with you.
              </p>
            </div>
          </div>
        </div>
          <div>
            <h3 className="m-3">Here is my Expertise</h3>
          </div>
        <div className="container d-flex gap-3 shadow p-3 mb-5 bg-body-tertiary">
          <div
            className="card border-0 shadow p-3 bg-body-tertiary rounded"
            style={{ width: "18rem" }}
          >
            <img src={javas} className="card-img-top p-2" alt="logo" />
            <div className="card-body"></div>
          </div>

          <div
            className="card border-0 shadow p-3 bg-body-tertiary rounded"
            style={{ width: "18rem" }}
          >
            <img src={react} className="card-img-top p-2" alt="" />
            <div className="card-body"></div>
          </div>

          <div
            className="card border-0 shadow p-3 bg-body-tertiary rounded"
            style={{ width: "18rem" }}
          >
            <img src={node} className="card-img-top p-2" alt="..." />
            <div className="card-body"></div>
          </div>

          <div
            className="card border-0 shadow p-3 bg-body-tertiary rounded"
            style={{ width: "18rem" }}
          >
            <img src={post} className="card-img-top p-2" alt="..." />
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
