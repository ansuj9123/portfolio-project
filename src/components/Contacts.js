import React from "react";
import { useState } from "react";

function Contacts() {

  const [formData, setFormData] = useState({
    name:'',
    Email:'',
    Subject: '',
    Message: ''

  });

 const handleChange = (e)=>{
  setFormData({...formData, [e.target.name]: e.target.value})
 };

 const handleSubmit = (e)=>{
  e.preventDefault();
  alert('Your message has been submitted.')
 

 setFormData({
  name:'',
  Email:'',
  Subject: '',
  Message:''
 });
};
  return (
    <section className="mb-2 m-3">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact me
      </h2>

      <p className="text-center w-responsive mx-auto mb-5">
        Please do not hesitate to contact me if you have any question.
      </p>

      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          <form onSubmit={handleSubmit}
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
                  <label for="name" className="" required>
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
                  <label for="email" className="" required>
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
                  <label for="subject" className="" required>
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
                  <label for="message">Your message</label>
                </div>
              </div>
            </div>
          </form>

          <div className="text-center text-md-left">
            <a
              className="btn btn-primary"
              onclick="document.getElementById('contact-form').submit();"
            >
              Send
            </a>
          </div>
          <div className="status"></div>
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
