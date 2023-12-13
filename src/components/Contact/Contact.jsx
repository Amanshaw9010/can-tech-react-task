import React from "react";
import "./css/contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import img1 from "./images/b5.jpg";
import { FcBusinessContact } from "react-icons/fc";
const containerStyle = {
  // backgroundImage: ,
  //   opacity: 0.5,
  background: `linear-gradient(to right,rgba(197, 157, 157, 0.616), rgba(52, 152, 219, 0.596),#2c3e5077), url(${img1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
function Contact() {
  return (
    <>
      <div>
        {/* <!-- Contact-description Section start --> */}
        <div className="description-wrapper" style={containerStyle}>
          <div className="description-section">
            <div className="description-heading">
              <center>
                <h1 className="text-8xl">Contact Us</h1>
              </center>
            </div>
            <div className="description-body">
              <p>
                Can Technologies is an online higher education platform
                providing rigorous industry-relevant programs designed and
                delivered in collaboration with world-className faculty and
                industry. Merging the latest technology, pedagogy, and services,
                upGrad is creating an immersive learning experience - anytime
                and anywhere.
              </p>
            </div>
          </div>

          <div className=" description-card-wrapper">
            <div className="animate__zoomIn description-card-container">
              <div className="animate__zoomIn description-card">
                <div className="description-card-title">
                  For Program related queries
                </div>
                <div className="description-card-number">
                  <div>1800 210 2020</div>
                </div>
                <hr className="description-card-hr" />
                <div className="description-card-email">
                  customercare@cantech.com
                </div>
                <div className="description-card-circle">
                  <span className="description-card-circle-span">
                    <FcBusinessContact className="cont" />
                  </span>
                </div>
              </div>

              <div className="animate__zoomIn description-card">
                <div className="description-card-title">
                  For Program related queries
                </div>
                <div className="description-card-number">
                  <div>1800 210 2020</div>
                </div>
                <hr className="description-card-hr" />
                <div className="description-card-email">
                  customercare@cantech.com
                </div>
                <div className="description-card-circle">
                  <span className="description-card-circle-span">
                    <FcBusinessContact className="cont" />
                  </span>
                </div>
              </div>

              <div className="animate__zoomIn description-card">
                <div className="description-card-title">
                  For Program related queries
                </div>
                <div className="description-card-number">
                  <div>1800 210 2020</div>
                </div>
                <hr className="description-card-hr" />
                <div className="description-card-email">
                  customercare@cantech.com
                </div>
                <div className="description-card-circle">
                  <span className="description-card-circle-span">
                    <FcBusinessContact className="cont" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Contact-description Section start --> */}

        {/* <!-- Visit Us Section Start --> */}

        <div className=" visitus-wrapper  ">
          <h1 className="visitus-heading">Visit Us</h1>
          <div className="visitus-card-section ">
            <div className="animate__zoomIn visitus-card ">
              <div className="visitus-card-image">
                <span className="visitus-card-image-span">
                  <img src="img/contact4.png" alt="" />
                </span>
              </div>
              <div className="visitus-card-body">
                <h3>Registered Office</h3>
                <p>
                  Ground Floor, Nishuvi 75 Dr. Annie Besant Road Worli, Mumbai –
                  400018
                </p>
              </div>
            </div>
            <div className="animate__zoomIn  visitus-card">
              <div className="visitus-card-image">
                <span className="visitus-card-image-span">
                  <img src="img/contact5.png" alt="" />
                </span>
              </div>
              <div className="visitus-card-body">
                <h3>Registered Office</h3>
                <p>
                  Ground Floor, Nishuvi 75 Dr. Annie Besant Road Worli, Mumbai –
                  400018
                </p>
              </div>
            </div>
            <div className="animate__zoomIn visitus-card">
              <div className="visitus-card-image">
                <span className="visitus-card-image-span">
                  <img src="img/contact5.png" alt="" />
                </span>
              </div>
              <div className="visitus-card-body">
                <h3>Registered Office</h3>
                <p>
                  Ground Floor, Nishuvi 75 Dr. Annie Besant Road Worli, Mumbai –
                  400018
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Visit Us Section Start --> */}
        {/* <!-- Contact Form section Start --> */}

        <>
          <div className="contact-form-wrapper  px-4 py-10">
            <div className="contact-form-container">
              <div className="animate__zoomIn form-data-left my-2">
                <div className="left-container">
                  <div className="location-block">
                    <iframe
                      loading="lazy"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.124143266895!2d77.37806721549518!3d28.626041191124667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5348341e1fb%3A0x48584e25b6f85b3c!2sCan%20Technologies%20-%20School%20ERP%20Software%2C%20Visitor%20Management%20Software%2C%20Game%20Development%2C%20Software%20Development%20Company%2C%20ERP%20Software%20Solution%20Provider%20Company!5e0!3m2!1sen!2sin!4v1602830370269!5m2!1sen!2sin"
                      width={600}
                      height={500}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex={0}
                      title="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className=" px-4 form-data-right">
                <div className="right-container">
                  <div className="input-section">
                    <div className="left-input-section">
                      <div className=" ">
                        <label htmlFor="name">Name</label>
                        <div style={{ marginTop: 5 }}>
                          <input
                            type="text"
                            name=""
                            id="name"
                            className="form-control"
                            placeholder="e.g. John Doe"
                            style={{ outline: "none" }}
                          />
                        </div>
                      </div>
                      <div className=" " style={{ marginTop: 15 }}>
                        <label htmlFor="">Mobile Number</label>
                        <div style={{ marginTop: 5 }}>
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder="Mobile No"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="right-input-section">
                      <div className=" ">
                        <label htmlFor="">Email</label>
                        <div style={{ marginTop: 5 }}>
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="e.g. example@gmail.com"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className=" " style={{ marginTop: 15 }}>
                        <label htmlFor="">Enquiry Type</label>
                        <div>
                          <select
                            name=""
                            id=""
                            style={{ marginTop: 5 }}
                            className="form-control"
                          >
                            <option value="" style={{ color: "#7c7c7c" }}>
                              Select Enquiry Type
                            </option>
                            <option value="">option 1</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" ">
                    <label
                      htmlFor=""
                      style={{ margin: 5, marginTop: 15, color: "#7c7c7c" }}
                    >
                      Your Message
                    </label>
                    <div style={{ marginTop: 5, margin: 5 }}>
                      <textarea
                        name=""
                        id=""
                        cols={50}
                        rows={4}
                        placeholder="Type your message here"
                        style={{ width: "100%", border: "0.5px solid #ced4da" }}
                        defaultValue={""}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <p style={{ marginTop: "4%" }}>
                    By submitting the form, you agree to our{" "}
                    <a href="tandc.html">Terms &amp; Conditions</a> and our{" "}
                    <a href="privacy_policy.html">Privacy Policy</a>.
                  </p>
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form Section End */}
          {/* contactus banner Section start */}
          <div className="contact-banner-wrapper">
            <span className="contact-banner-span">
              <img src="img/contactBanner.png" alt="" />
            </span>
            <div />
          </div>
        </>

        {/* <!-- contactus banner section end --> */}
      </div>
    </>
  );
}

export default Contact;
