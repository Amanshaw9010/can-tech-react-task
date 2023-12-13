import React from "react";
import "./Page.css";
import ImageSlider from "./ImageSlider";
import image1 from "./Assets/img1.jpg";
import image5 from "./Assets/img5.jpg";
import image4 from "./Assets/img4.jpg";
import image6 from "./Assets/img6.jpg";
import image2 from "./Assets/img2.jpg";

const Page = () => {
  return (
    <div className="container ">
      <ImageSlider />
      <div className="reason">
        <p>Here are more reasons</p>
        <h1>Why choose Can Technology courses?</h1>
      </div>
      <div className="contain1">
        <div className="imgcontain">
          <img
            src="https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI-1.jpg"
            alt=""
          />
        </div>
        <div className="textcontain">
          <h1>Get Personalized Guidance</h1>
          <p>
            Weekly mentorship sessions with Industry Experts along with
            Personalized attention in small groups of 5-15 learners. Gain
            hands-on exposure through industry-relevant projects
          </p>
          <div className="session">
            <h3>2,00,000+ Mentorship Sessions Completed</h3>
          </div>
          <div className="rate">
            <h3>4.7/5 Average Mentor Rating</h3>
          </div>
          <div className="btn-view">
            <button className="view">VIEW EXPERIENCE</button>
          </div>
        </div>
      </div>
      <div className="contain2">
        <div className="text-contain">
          <h1>GL Excelerate Dedicated Career Support</h1>
          <p>
            We offer mock interviews to prep for your dream job. Participate in
            hackathons and career fairs to stay ahead of others.
          </p>
          <div className="alumni">
            <h3>66% Alumni Career Transitions</h3>
          </div>
          <div className="hiring">
            <h3>3100+ Hiring Companies</h3>
          </div>
          <button className="learn">Learn More</button>
        </div>
        <div className="img-contain">
          <img src={image5} alt="" />
        </div>
      </div>
      <div className="contain3">
        <div className="imgnetwork">
          <img src={image4} alt="" />
        </div>
        <div className="textnetwork">
          <h1>Networking and Program Support</h1>
          <p>
            Grow your professional network with peer interactions, sessions with
            industry leaders, and get access to a dedicated program manager to
            solve your queries.
          </p>
          <div className="support">
            <h3>1:1 Program support</h3>
          </div>
          <div className="rating">
            <h3>4.3/5 Average Support Rating</h3>
          </div>
          <button className="know">Know More</button>
        </div>
      </div>
      <div className="learner">
        <p>Providing online education for</p>

        <h1>Learners across 170+ countries</h1>
      </div>
      <div className="contain4">
        <img src={image6} alt="" />
      </div>
      <div className="inspiring">
        <p>Inspiring everyone to learn with</p>
        <h1>Multiple stories of growth</h1>
        <p>
          Find out how our Learners transformed their careers after learning
          with us.
        </p>
      </div>
      <div className="contain5">
        <div className="img-div">
          <img
            src="https://ksac.kiit.ac.in/wp-content/uploads/2021/02/10-Ways-To-Cope-Up-With-Online-Classes-scaled.jpg"
            alt=""
          />
        </div>
        <div className="report">
          <button>DOWNLOAD CAREER REPORT</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
