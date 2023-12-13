import Marquee from "react-fast-marquee";
import { Trailblazers, Team, Partners, Growth } from "../utils/CardContent";
import { socialIcons } from "../utils/ContactApi";
import Typewriter from "typewriter-effect";

import "../assets/css/About.css";
function AboutUs() {
  return (
    <div className="Container-fluid overflow-hidden py-md-3">
      <div className="Hero-section">
        <div className="row py-5  justify-content-center align-items-center gy-3 overflow-hidden">
          <div className="col-md-8 col-lg-6  col-xxl-5">
            <div className="content ">
              <div className=" d-flex flex-column ps-2 gap-1">
                <span className="h3 fw-bold">We are</span>
                <h1 className="display-6 fw-medium">
                  <Typewriter
                    className="display-6 fw-medium"
                    options={{
                      strings: ["South Asia's largest", ""],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: "natural",
                    }}
                  />
                </h1>
                <p className="mb-2">
                  higher EdTech company. With the latest technology, pedagogy,
                  industry partners and world-class faculty, we create immersive
                  online learning experiences for our learners globally.
                </p>

                <div className="ytube mt-2">
                  <a href="#" className=" text-white  border-black fw-semibold">
                    Watch glimpses of impact we have created!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-xl-4 col-lg-6 d-flex z-0">
            <div className="container2 rounded shadow mx-2 mx-lg-0">
              <iframe
                className="responsive-iframe "
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="our-vision">
        <div className="container py-md-5 py-2 overflow-hidden">
          <div className="row justify-content-between align-items-center  gy-3">
            <div className="col-md-6 col-lg-5 order-0">
              <div className="content">
                <div className="d-flex align-items-center vision">
                  <img
                    src="images/vision-logo.png"
                    className="rounded img-fluid"
                  />
                  <h4 className="fw-bold ">Our vision</h4>
                </div>
                <p className="text-center text-md-start">
                  Powering <span className=" text-primary">career success</span>{" "}
                  for every member of the{" "}
                  <span className="text-primary me-1">global workforce</span>as
                  their trusted{" "}
                  <span className="text-primary">
                    lifelong learning partner
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-5  order-1">
              <img
                src="images/vision-1.webp"
                className="img-fluid rounded"
              ></img>
            </div>

            <div className="col-md-6 col-lg-5 order-3 order-md-2">
              <img
                src="images/vision-2.webp"
                className="img-fluid rounded"
              ></img>
            </div>
            <div className="col-md-6 col-lg-5 order-2 order-md-3">
              <div className="content">
                <div className="d-flex align-items-center vision">
                  <img src="images/vision-logo.png" className="rounded" />
                  <h4 className="fw-bold">Our vision</h4>
                </div>
                <p className="text-center text-md-start">
                  Powering <span className=" text-primary">career success</span>{" "}
                  for every member of the{" "}
                  <span className="text-primary">global workforce</span> as
                  their trusted{" "}
                  <span className="text-primary">
                    lifelong learning partner
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="revolution-section py-5">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3 className=" align-self-start p-2 align-self-md-center display-6 lh-base fw-bold ">
            Beginning of a revolution
          </h3>
          <p className="mx-lg-5  px-lg-5 mx-2 ">
            Back in 2015, our founders noticed that the rapidly evolving
            industry required professionals to continuously upskill themselves
            as learning for professionals comes to a halt after entering a
            working space. This was when upGrad was formed to impact the lives
            of working professionals by helping them upskill while they work.
            With an endeavour to facilitate quality education to the future
            workforce through our UG and PG programs, we continue to build
            online learning as interactive as a classroom setup.
          </p>
        </div>
      </div>

      <div className="">
        <h3 className="text-center text-black display-6 fw-semibold">
          A journey as dynamic as us
        </h3>
        <div className="row justify-content-center">
          <div className="col-12">
            <img src="images/dynamic-img.png" className="img-fluid"></img>
          </div>
        </div>
      </div>

      <div className="Trailblazers ">
        <h3 className="text-center py-3 display-6 fw-bold">
          Meet the trailblazers
        </h3>
        <div className="container-fluid container-md">
          <div className="row py-4 pt-0 mt-lg-2 position-relative overflow-hidden">
            {Trailblazers.map((data, index) => (
              <div
                key={index}
                className="col-sm-6 col-lg-4 d-flex   col-12 gy-4 trailblazer  team-box position-relative"
              >
                <div className="card py-4 team-card text-center border-0 shadow justify-content-center align-items-center">
                  <img
                    className=" rounded-circle mw-100 w-50"
                    src={data.img}
                    alt="Card image cap"
                  />
                  <div className="d-flex flex-column  mt-2">
                    <span className="card-title">{data.name}</span>
                    <p className="card-text text-muted mx-1">
                      {data.designation}
                    </p>
                    <p className="mx-md-4 mx-3">{data.title}</p>
                  </div>

                  <div className="team-social-icons position-absolute end-0 top-0 d-flex flex-column gap-2   opacity-0 p-3 ">
                    {socialIcons.map((social, index) => (
                      <div key={index} className="">
                        <social.icons size={20} className="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Teams my-3">
        <h3 className="text-center  text-white py-3 fw-bold display-6">
          Know the teams that form oneupGrad!
        </h3>
        <div className="bg-black">
          <div className="container-fluid container-lg">
            <div className="row py-4 pt-0 mt-lg-2 position-relative overflow-hidden">
              {Team.map((data, index) => (
                <div
                  key={index}
                  className="col-md-4 col-lg-3  d-flex  col-sm-6 col-12 gy-4 py-2  team-box position-relative"
                >
                  <div className="card team-card text-center shadow">
                    <img
                      className="card-img-top"
                      src={data.img}
                      alt="Card image cap"
                    />
                    <div className="card-body d-flex flex-column ">
                      <span className="card-title">{data.name}</span>
                      <p className="card-text text-muted">{data.designation}</p>
                    </div>

                    <div className="team-social-icons position-absolute end-0 d-flex flex-column gap-2   opacity-0 p-3 ">
                      {socialIcons.map((social, index) => (
                        <div key={index} className="">
                          <social.icons size={20} className="" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="partner-section my-2">
        <h3 className="py-4 text-center display-6 fw-bold">
          We are expanding...
        </h3>

        <div className=" container partner py-lg-5 py-2">
          <div className="row py-4 text-center">
            <Marquee className="" pauseOnHover={true}>
              {Partners.map((partner, index) => (
                <div
                  key={index}
                  className="py-4 mx-5 d-flex flex-column justify-content-center align-items-center gap-2"
                >
                  <img
                    src={partner.img}
                    className="card-image"
                    alt={partner.name}
                  />
                  <p className=" fw-semibold">
                    {partner.title} <br />
                    {partner.title2}
                  </p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
      <div className="growth-section growth-bg ">
        <div className="container-fluid container-md py-5">
          <h3 className=" text-center text-white fw-bold display-6 p-0   ">
            Growth - the constant we admire!
          </h3>
          <div className="row py-5 gy-3 ">
            {Growth.map((data, index) => (
              <div key={index} className="col-sm-6 col-lg-4 col-xl-3 p-1">
                <div className="box-content bg-black text-white rounded py-5  d-flex flex-column align-items-center justify-content-center">
                  <img src={data.img} className=""></img>
                  <div className="growth-content text-center d-flex flex-column gap-2">
                    <h4 className=" fw-bold lh-base">{data.title}</h4>
                    <p className="">{data.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
