import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import Card from "./component/Card";
import StoriesCard from "./component/StoriesCard";
import Recruiter from "./component/Recruiter";
import { Link } from "react-router-dom";

function Success() {
  const [selectedButton, setSelectedButton] = useState("careerTransition");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  useEffect(() => {}, [selectedButton]);

  return (
    <div className="w-full bg-white pb-4">
      {/* Inspiring stories */}
      <div className="flex justify-between flex-col md:flex-row bg-blue-700 mx-2 md:mx-20   rounded-2xl p-10">
        <div className="w-full md:w-[50%] text-start">
          <div className="flex">
            <h5 className="mx-2 bg-blue-800 text-white p-2">
              3100+ Hiring Companies
            </h5>
            <h5 className="mx-2 bg-blue-800 text-white p-2">
              50% Avg Salary Hike
            </h5>
          </div>
          <h1
            id="typewriter-eff"
            className="text-2xl sm:text-6xl font-semibold h-24 md:h-44 text-white"
          >
            <Typewriter
              options={{
                strings: ["Inspiring stories of success from our learners"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="my-4">
            <button className="w-full md:w-auto m-2 text-xl bg-white text-blue-700 p-4 rounded-md">
              EXPLORE CAREER TRANSITION
            </button>
            <button className="w-full md:w-auto m-2 p-4 rounded-md border-2 border-white text-white">
              VIEW TESTIMONIALS
            </button>
          </div>
          <p className="text-white">
            Trusted by 9.2 Million+ learners from over 170 countries
          </p>
        </div>
        <div className="col-lg-5 col-md-12 right-side w-full md:w-[40%]">
          <div className="img-box columns-3">
            <div className="img-part first h-[230px] rounded-xl overflow-hidden mb-3 w-full">
              <img
                className="h-[100%] w-full object-cover hover:scale-110 duration-300"
                src="https://thumbs.dreamstime.com/b/successful-businessman-worker-sitting-suit-arabic-serious-smiling-happy-positive-black-white-shirt-tie-beard-front-99993755.jpg"
                alt=""
              />
            </div>
            <div className="img-part second h-[180px] rounded-xl overflow-hidden mb-3 w-full">
              <img
                className="h-[100%] w-full object-cover hover:scale-110 duration-300"
                src="https://thumbs.dreamstime.com/b/successful-businessman-worker-sitting-suit-arabic-serious-smiling-happy-positive-black-white-shirt-tie-beard-front-99993755.jpg"
                alt=""
              />
            </div>
            <div className="img-part third h-[280px] rounded-xl overflow-hidden mb-3 w-full">
              <img
                className="h-[100%] w-full object-cover hover:scale-110 duration-300"
                src="https://thumbs.dreamstime.com/b/successful-businessman-worker-sitting-suit-arabic-serious-smiling-happy-positive-black-white-shirt-tie-beard-front-99993755.jpg"
                alt=""
              />
            </div>
            <div className="img-part fourth h-[180px] rounded-xl overflow-hidden mb-3 w-full">
              <img
                className="h-[100%] w-full object-cover hover:scale-110 duration-300"
                src="https://thumbs.dreamstime.com/b/successful-businessman-worker-sitting-suit-arabic-serious-smiling-happy-positive-black-white-shirt-tie-beard-front-99993755.jpg"
                alt=""
              />
            </div>
            <div className="img-part fiveth h-[180px] rounded-xl overflow-hidden mb-3 w-full">
              <img
                className="h-[100%] w-full object-cover hover:scale-110 duration-300"
                src="https://thumbs.dreamstime.com/b/successful-businessman-worker-sitting-suit-arabic-serious-smiling-happy-positive-black-white-shirt-tie-beard-front-99993755.jpg"
                alt=""
              />
            </div>
            <div className="img-part sixth h-[230px] rounded-xl overflow-hidden mb-3 w-full">
              <img
                className="h-[100%] w-full object-cover hover:scale-110 duration-300"
                src="https://thumbs.dreamstime.com/b/successful-businessman-worker-sitting-suit-arabic-serious-smiling-happy-positive-black-white-shirt-tie-beard-front-99993755.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* career Transitions */}

      <div className="flex flex-row justify-center my-8">
        <button
          onClick={() => handleButtonClick("careerTransition")}
          className={`${
            selectedButton === "careerTransition"
              ? "text-blue-500 border-b-4 border-blue-500"
              : ""
          } px-0 md:px-4  mr-2`}
        >
          <div className="flex px-2 text-black">
            <FaArrowTrendUp className="text-2xl mx-2" />
            <h1 className="text-lg px-0 md:px-auto md:text-2xl">
              Career Transitions
            </h1>
          </div>
        </button>
        <button
          onClick={() => handleButtonClick("successStories")}
          className={`${
            selectedButton === "successStories"
              ? "text-blue-500 border-b-4 border-blue-500"
              : ""
          } px-0 md:px-4 py-2  mr-2`}
        >
          <div className="flex px-2 text-black">
            <FaRegStar className="text-2xl mx-2" />
            <h1 className="text-lg px-0 md:px-auto md:text-2xl">
              Success Stories
            </h1>
          </div>
        </button>
        <button
          onClick={() => handleButtonClick("recruiterTestimonials")}
          className={`${
            selectedButton === "recruiterTestimonials"
              ? " text-blue-500 border-b-4 border-blue-500"
              : ""
          } px-0 md:px-4 `}
        >
          <div className="flex px-2 text-black">
            <BsFillHandbagFill className="text-2xl mx-2" />
            <h1 className="text-lg px-0 md:px-auto md:text-2xl">
              Recruiter Testimonials
            </h1>
          </div>
        </button>
      </div>

      <div>
        {selectedButton === "careerTransition" && (
          <div className="bg-white sm:mx-20 rounded-lg p-8">
            <div className=" grid grid-col-1 md:grid-cols-4">
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              {/* <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              />
              <Card
                img="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                name="Harsh Bhatnager"
                position="cloud computing"
                position2="Vice President"
                company="Barclays Capital"
                position3="Vice President-Engineering Manager"
                company2="Walls Forgo"
              /> */}
            </div>

            <button className="border-2 border-blue-500 text-blue-600 px-5 py-3 my-10 hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white rounded-lg text-2xl font-semibold">
              View More
            </button>
          </div>
        )}
        {selectedButton === "successStories" && (
          <div className="bg-black sm:mx-20 rounded-lg">
            <div className="p-10">
              <div className="flex items-center md:flex-row flex-col-reverse">
                <div>
                  <iframe
                    className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[600px] md:h-[350px] rounded-xl"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                </div>
                <div className="md:mx-14">
                  <p className="bg-yellow-500 font-semibold">
                    FEATURED STORIES
                  </p>
                  <h5 className="text-white text-start text-sm">
                    DATE SCIENCE
                  </h5>
                  <h2 className="text-white text-left">
                    Got 2 job offers even before completing the program
                  </h2>
                  <div className="flex items-start mt-10">
                    <img
                      className="w-16 h-16 rounded-full mr-5"
                      src="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                      alt="profile"
                    />
                    <div>
                      <h4 className="text-white text-left font-semibold">
                        Nukala Naga Pavan
                      </h4>
                      <h5 className="text-left text-gray-400">
                        Post Graduate Program in Data Science and Engineering
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10">
              <h1 className="text-4xl">Stories of learners like you</h1>
              <div className="grid grid-col-1 md:grid-cols-3 mt-10">
                <StoriesCard
                  profile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  name="Rajkumar C"
                  post="Post Graduate Program in Cloud Computing"
                  para="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Saepe labore quod repellendus facere et quibusdam sed neque
                maxime eaque obcaecati possimus quasi doloremque, harum
                tempore tempora cumque veniam blanditiis repellat laborum,
                culpa perferendis praesentium."
                  btn="Read More"
                />
                <StoriesCard
                  profile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  name="Rajkumar C"
                  post="Post Graduate Program in Cloud Computing"
                  para="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Saepe labore quod repellendus facere et quibusdam sed neque
                maxime eaque obcaecati possimus quasi doloremque, harum
                tempore tempora cumque veniam blanditiis repellat laborum,
                culpa perferendis praesentium."
                  btn="Read More"
                />
                <StoriesCard
                  profile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  name="Rajkumar C"
                  post="Post Graduate Program in Cloud Computing"
                  para="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Saepe labore quod repellendus facere et quibusdam sed neque
                maxime eaque obcaecati possimus quasi doloremque, harum
                tempore tempora cumque veniam blanditiis repellat laborum,
                culpa perferendis praesentium."
                  btn="Read More"
                />
                <StoriesCard
                  profile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  name="Rajkumar C"
                  post="Post Graduate Program in Cloud Computing"
                  para="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Saepe labore quod repellendus facere et quibusdam sed neque
                maxime eaque obcaecati possimus quasi doloremque, harum
                tempore tempora cumque veniam blanditiis repellat laborum,
                culpa perferendis praesentium."
                  btn="Read More"
                />
                <StoriesCard
                  profile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  name="Rajkumar C"
                  post="Post Graduate Program in Cloud Computing"
                  para="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Saepe labore quod repellendus facere et quibusdam sed neque
                maxime eaque obcaecati possimus quasi doloremque, harum
                tempore tempora cumque veniam blanditiis repellat laborum,
                culpa perferendis praesentium."
                  btn="Read More"
                />
                <StoriesCard
                  profile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  name="Rajkumar C"
                  post="Post Graduate Program in Cloud Computing"
                  para="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Saepe labore quod repellendus facere et quibusdam sed neque
                maxime eaque obcaecati possimus quasi doloremque, harum
                tempore tempora cumque veniam blanditiis repellat laborum,
                culpa perferendis praesentium."
                  btn="Read More"
                />
              </div>

              <button className="border-2 border-blue-500 text-blue-600 px-5 py-3 my-10 hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white rounded-lg text-2xl font-semibold">
                Load More Stories
              </button>
            </div>
          </div>
        )}
        {selectedButton === "recruiterTestimonials" && (
          <div className="bg-black sm:mx-20 rounded-lg">
            <div className="p-10">
              <div className="flex items-center md:flex-row flex-col-reverse">
                <div>
                  <div>
                    <h1 className="text-white text-start mb-5">
                      3100+ companies hire from us
                    </h1>
                    <img
                      className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[600px] md:h-[350px] rounded-xl"
                      src="https://d1vwxdpzbgdqj.cloudfront.net/alumni/recruiter_banner_slide_2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="md:mx-14">
                  <h2 className="text-white text-left mb-4">
                    Get placed at top companies with 50% avg salary hike
                  </h2>
                  <h4 className="text-gray-500 text-start mb-4">
                    Companies recruit for various domains and experience levels.
                  </h4>
                  <h5 className="text-white text-start">
                    Early Career · Mid-Senior level · Leadership Hiring
                  </h5>
                </div>
              </div>
            </div>
            <div className="bg-white p-10">
              <h1 className="text-4xl">Hear what our recruiters have to say</h1>
              <div className="grid grid-col-1 md:grid-cols-3 mt-10">
                <Recruiter
                  recCompany="https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/company-logo-assets/Wipro.jpg"
                  recPara="“It’s been a pleasure working with Great Learning. Our panels were really impressed by the students we interviewed. Unlike the freshers we hire from campuses, these candidates really"
                  recBtn="Read More"
                  recProfile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  recName="Harsh Bhatnager"
                  recPost="Senior HR Associate"
                />
                <Recruiter
                  recCompany="https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/company-logo-assets/Wipro.jpg"
                  recPara="“It’s been a pleasure working with Great Learning. Our panels were really impressed by the students we interviewed. Unlike the freshers we hire from campuses, these candidates really"
                  recBtn="Read More"
                  recProfile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  recName="Harsh Bhatnager"
                  recPost="Senior HR Associate"
                />
                <Recruiter
                  recCompany="https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/company-logo-assets/Wipro.jpg"
                  recPara="“It’s been a pleasure working with Great Learning. Our panels were really impressed by the students we interviewed. Unlike the freshers we hire from campuses, these candidates really"
                  recBtn="Read More"
                  recProfile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  recName="Harsh Bhatnager"
                  recPost="Senior HR Associate"
                />
                <Recruiter
                  recCompany="https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/company-logo-assets/Wipro.jpg"
                  recPara="“It’s been a pleasure working with Great Learning. Our panels were really impressed by the students we interviewed. Unlike the freshers we hire from campuses, these candidates really"
                  recBtn="Read More"
                  recProfile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  recName="Harsh Bhatnager"
                  recPost="Senior HR Associate"
                />
                <Recruiter
                  recCompany="https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/company-logo-assets/Wipro.jpg"
                  recPara="“It’s been a pleasure working with Great Learning. Our panels were really impressed by the students we interviewed. Unlike the freshers we hire from campuses, these candidates really"
                  recBtn="Read More"
                  recProfile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  recName="Harsh Bhatnager"
                  recPost="Senior HR Associate"
                />
                <Recruiter
                  recCompany="https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/company-logo-assets/Wipro.jpg"
                  recPara="“It’s been a pleasure working with Great Learning. Our panels were really impressed by the students we interviewed. Unlike the freshers we hire from campuses, these candidates really"
                  recBtn="Read More"
                  recProfile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  recName="Harsh Bhatnager"
                  recPost="Senior HR Associate"
                />
                <Recruiter
                  recCompany="https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/company-logo-assets/Wipro.jpg"
                  recPara="“It’s been a pleasure working with Great Learning. Our panels were really impressed by the students we interviewed. Unlike the freshers we hire from campuses, these candidates really"
                  recBtn="Read More"
                  recProfile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  recName="Harsh Bhatnager"
                  recPost="Senior HR Associate"
                />
                <Recruiter
                  recCompany="https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/company-logo-assets/Wipro.jpg"
                  recPara="“It’s been a pleasure working with Great Learning. Our panels were really impressed by the students we interviewed. Unlike the freshers we hire from campuses, these candidates really"
                  recBtn="Read More"
                  recProfile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  recName="Harsh Bhatnager"
                  recPost="Senior HR Associate"
                />
                <Recruiter
                  recCompany="https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/company-logo-assets/Wipro.jpg"
                  recPara="“It’s been a pleasure working with Great Learning. Our panels were really impressed by the students we interviewed. Unlike the freshers we hire from campuses, these candidates really"
                  recBtn="Read More"
                  recProfile="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg"
                  recName="Harsh Bhatnager"
                  recPost="Senior HR Associate"
                />
              </div>

              <button className="border-2 border-blue-500 text-blue-600 px-5 py-3 my-10 hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white rounded-lg text-2xl font-semibold">
                Load More Stories
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Success;
