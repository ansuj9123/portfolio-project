import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser"; // Corrected import statement for EmailJS
import { Link } from "react-router-dom";

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e4fhbzl",
        "template_o53avri",
        form.current,
        "9DJwyl-5kh4lhv2ri"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="mb-2 m-3">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact me
      </h2>

      <p className="text-center w-responsive mx-auto mb-5">
        Please do not hesitate to contact me if you have any questions.
      </p>

      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          <form
            ref={form}
            onSubmit={sendEmail}
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <label htmlFor="name" className="" required>
                    Your name
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <label htmlFor="email" className="" required>
                    Email
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                  />
                  <label htmlFor="subject" className="" required>
                    Subject
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                  ></textarea>
                  <label htmlFor="message">Your message</label>
                </div>
              </div>
            </div>
            <Link to="/Message">
              <div className="text-center text-md-left">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </Link>
            <div className="status"></div>
          </form>
        </div>

        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <p>Hamilton Road, Birmingham</p>
            </li>

            <li>
              <i className="fas fa-phone mt-4 fa-2x"></i>
              <p>07865904119</p>
            </li>

            <li>
              <i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>ansuj9@yahoo.com</p>
              <p>or</p>
              <p>ansuj9123@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
