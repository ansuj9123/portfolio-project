import React from 'react';

import java from "../Javascript.png";
import react from "../react.png";
import post from "../postgres.png";
import Node from "../node.png";

const Project = () => {

  

  const name = "Ansu Jammeh";
  const role = "Full Stack Developer";
  const expertise = ["HTML", "CSS", "JavaScript", "React JSX", "PostgreSQL"];
  const githubLink = "https://github.com/ansuj9123";
  
  const resumeUrl =
    "https://github.com/ansuj9123/My-Resume/blob/main/ANSUJAMMEH.pdf";

    

  return (
    <section className="container row">
      <div className="col-sm-8">
        <div className="row">
          <div className="col">
            <div className="p-2 bg-light shadow p-3 mb-5 bg-body-tertiary">
              <h1 className="question md-5">WHO AM I?</h1>
              <h1>{name}</h1>
              <p>{role}</p>
              <div>
                <p>Here Is My Expertise:</p>
                <ul>
                  {expertise.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <p>
                Check out my projects on GitHub:{" "}
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  {githubLink}
                </a>
              </p>
              <p>
                <a href={resumeUrl}>Download my resume</a>
              </p>
            </div>
          </div>
        </div>

        <div className="container d-flex gap-3 shadow p-3 mb-5 bg-body-tertiary ">
          <div
            className="card border-0 shadow p-3 bg-body-tertiary rounded"
            style={{ width: "18rem" }}
          >
            <img src={java} className="card-img-top" alt="logo" />
            <div className="card-body"></div>
          </div>

          <div
            className="card border-0 shadow p-3 bg-body-tertiary rounded"
            style={{ width: "18rem" }}
          >
            <img src={react} className="card-img-top" alt="" />
            <div className="card-body"></div>
          </div>

          <div
            className="card border-0 shadow p-3 bg-body-tertiary rounded"
            style={{ width: "18rem" }}
          >
            <img src={post} className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>

          <div
            className="card border-0 shadow p-3 bg-body-tertiary rounded"
            style={{ width: "18rem" }}
          >
            <img src={Node} className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project