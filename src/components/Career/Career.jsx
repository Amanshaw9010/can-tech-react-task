import React from "react";
import Typewriter from "typewriter-effect";
import { FaArrowDown } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./component/Corousel";

function Career() {
  return (
    <div className="w-full bg-white">
      <div className=" flex flex-col sm:flex-col md:flex-row justify-between py-2 px-0 sm:py-4 sm:px-8px md:py-16 md:px-28 bg-[url('https://media.istockphoto.com/id/612014886/photo/influencer-and-opinion-leader.jpg?s=2048x2048&w=is&k=20&c=J0X2Tz5AqTYlaYXrwxchfM_sgXbkBgbn4fjG2aVnLCA=')] bg-cover bg-center bg-no-repeat">
        <div className="text-start text-white px-5">
          <h1
            id="typewriter-eff"
            className="text-2xl sm:text-5xl font-semibold"
          >
            <Typewriter
              options={{
                strings: ["Achieve your career dreams with GL Excelerate"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <div className="my-6">
            <a
              className="border no-underline border-white rounded-lg p-2"
              href=""
            >
              Career Fair
            </a>
          </div>
          <div className="my-6">
            <a
              className="border no-underline border-white rounded-lg p-2"
              href=""
            >
              Job Boards
            </a>
          </div>
          <div className="my-6">
            <a
              className="border no-underline border-white rounded-lg p-2"
              href=""
            >
              Career Prep Sessions
            </a>
          </div>
          <div className="my-6">
            <a
              className="border no-underline border-white rounded-lg p-2"
              href=""
            >
              Networking Sessions
            </a>
          </div>
          <div className="my-6">
            <a
              className="border no-underline border-white rounded-lg p-2"
              href=""
            >
              Hakathons & Live Projects
            </a>
          </div>
          <h3 className="text-2xl sm:text-4xl font-semibold text-blue-400">
            Your Dream Job
          </h3>
        </div>
        <div className="flex justify-center m-10">
          <iframe
            className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[600px] md:h-[350px] "
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>

      <section className="flex justify-center">
        <div className="w-[90%] md:w-[80%] grid grid-cols-2 md:grid-cols-3 rounded-lg bg-white shadow-xl mt-0 md:mt-[-40px] py-4 md:py-8 ">
          <div>
            <h2 className="text-5xl font-semibold">3100+</h2>
            <h4 className="text-lg">Hiring Companies</h4>
          </div>
          <div>
            <h2 className="text-5xl font-semibold">66%</h2>
            <h4 className="text-lg">Alumni Career Transitions</h4>
          </div>
          <div>
            <h2 className="text-5xl font-semibold">50%</h2>
            <h4 className="text-lg">Avg Salary Hike</h4>
          </div>
        </div>
      </section>

      {/* Career Fairs  */}

      <section className="flex justify-center my-20">
        <div className="w-[80%] flex justify-between flex-col sm:flex-col md:flex-row">
          <div>
            <h1 className="text-5xl font-semibold text-center md:text-start mb-4">
              Career Fairs
            </h1>
            <p className="text-xl text-gray-700 text-start mb-10">
              Participate in exclusive recruitment drives with the best
              companies across industries. Get access to a wide range of jobs
              and choose the right opportunity for you.
            </p>
            <p className="text-xl text-gray-700 text-start mb-5">
              1. Career fairs and recruitment drives exclusive to Great Learners
            </p>
            <p className="text-xl text-gray-700 text-start mb-10">
              2. Organized at regular intervals
            </p>
            <h4 className="text-2xl text-gray-700 text-normal text-center md:text-start mb-2">
              Our top recruiters
            </h4>
            <img
              src="https://d1vwxdpzbgdqj.cloudfront.net/excelerate/excelerate-career-fairs-section.png"
              alt=""
            />
          </div>
          <div className="mt-10 md:mt-0">
            <div className="flex justify-between">
              <div className="py-8 shadow-lg bg-yellow-500 w-[30%] rounded-xl mb-10">
                <h2 className="text-4xl font-semibold">100+</h2>
                <h4>Career Fairs</h4>
              </div>
              <div className="py-8 shadow-lg bg-pink-500 w-[30%] rounded-xl mb-10">
                <h2 className="text-4xl font-semibold">5</h2>
                <h4>Cities</h4>
              </div>
              <div className="py-8 shadow-lg bg-blue-300 w-[30%] rounded-xl mb-10">
                <h2 className="text-4xl font-semibold">3100+</h2>
                <h4>Hiring Companies</h4>
              </div>
            </div>
            <img
              className="w-[800px] md:w-[1200px] rounded-lg"
              src="https://e0.pxfuel.com/wallpapers/942/296/desktop-wallpaper-financial-partners-greeting-each-other-at-an-office-meeting-stock-crushpixel-finance-meeting.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Job Boards */}

      <section className="bg-[#F5F7F8] py-20">
        <div className="flex justify-center">
          <div className="w-[80%] flex justify-between flex-col md:flex-row">
            <div>
              <h1 className="text-5xl text-black font-semibold text-center md:text-start mb-4">
                Job Boards
              </h1>
              <p className="text-xl text-gray-700 text-start mb-10">
                Our dedicated learner success team posts hand-picked
                opportunities from top organizations relevant to your profile
                and experience.
              </p>
              <p className="text-xl text-gray-700 text-start mb-5">
                1. 600+ job postings per month on an average
              </p>
              <p className="text-xl text-gray-700 text-start mb-10">
                2. Opportunities customised to your work experience
              </p>
              <p className="text-xl text-gray-700 text-start mb-10">
                3. Alumni connect for industry insights & interview tips
              </p>
              <button className="bg-blue-600 px-5 py-3 rounded-lg text-white font-semibold text-2xl">
                Download Career Report
              </button>
            </div>
            <div className="flex justify-center m-10">
              <iframe
                className="w-[300px] h-[200px] rounded-lg sm:w-[400px] sm:h-[250px] md:w-[600px] md:h-[350px] "
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[80%]">
            <h1 className="text-4xl font-semibold my-14 text-left">
              Successful Career Transitions To Inspire You
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex justify-center items-center flex-col shadow-custom bg-[#f2f2f2]  hover:border-2 hover:border-gray-300 p-6 cursor-pointer mx-4 my-4 rounded-lg">
                <img
                  className="w-20"
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt=""
                />
                <h4 className="font-semibold py-4">Jayant Mehra</h4>
                <h6 className="font-thin text-sm mb-4">
                  Application Developer Analyst
                </h6>
                <img
                  className="w-20"
                  src="https://www.liblogo.com/img-logo/ac728aabd-accenture-logo-accenture-logo-.png"
                  alt=""
                />
                <FaArrowDown className="text-blue-600 text-xl my-3" />
                <img
                  className="w-20"
                  src="https://w7.pngwing.com/pngs/817/902/png-transparent-google-logo-google-doodle-google-search-google-company-text-logo-thumbnail.png"
                  alt="google"
                />
              </div>
              <div className="flex justify-center items-center flex-col shadow-custom bg-[#f2f2f2]  hover:border-2 hover:border-gray-300 p-6 cursor-pointer mx-4 my-4 rounded-lg">
                <img
                  className="w-20"
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt=""
                />
                <h4 className="font-semibold py-4">Jayant Mehra</h4>
                <h6 className="font-thin text-sm mb-4">
                  Application Developer Analyst
                </h6>
                <img
                  className="w-20"
                  src="https://www.liblogo.com/img-logo/ac728aabd-accenture-logo-accenture-logo-.png"
                  alt=""
                />
                <FaArrowDown className="text-blue-600 text-xl my-3" />
                <img
                  className="w-20"
                  src="https://w7.pngwing.com/pngs/817/902/png-transparent-google-logo-google-doodle-google-search-google-company-text-logo-thumbnail.png"
                  alt="google"
                />
              </div>
              <div className="flex justify-center items-center flex-col shadow-custom bg-[#f2f2f2]  hover:border-2 hover:border-gray-300 p-6 cursor-pointer mx-4 my-4 rounded-lg">
                <img
                  className="w-20"
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt=""
                />
                <h4 className="font-semibold py-4">Jayant Mehra</h4>
                <h6 className="font-thin text-sm mb-4">
                  Application Developer Analyst
                </h6>
                <img
                  className="w-20"
                  src="https://www.liblogo.com/img-logo/ac728aabd-accenture-logo-accenture-logo-.png"
                  alt=""
                />
                <FaArrowDown className="text-blue-600 text-xl my-3" />
                <img
                  className="w-20"
                  src="https://w7.pngwing.com/pngs/817/902/png-transparent-google-logo-google-doodle-google-search-google-company-text-logo-thumbnail.png"
                  alt="google"
                />
              </div>
              <div className="flex justify-center items-center flex-col shadow-custom bg-[#f2f2f2]  hover:border-2 hover:border-gray-300 p-6 cursor-pointer mx-4 my-4 rounded-lg">
                <img
                  className="w-20"
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt=""
                />
                <h4 className="font-semibold py-4">Jayant Mehra</h4>
                <h6 className="font-thin text-sm mb-4">
                  Application Developer Analyst
                </h6>
                <img
                  className="w-20"
                  src="https://www.liblogo.com/img-logo/ac728aabd-accenture-logo-accenture-logo-.png"
                  alt=""
                />
                <FaArrowDown className="text-blue-600 text-xl my-3" />
                <img
                  className="w-20"
                  src="https://w7.pngwing.com/pngs/817/902/png-transparent-google-logo-google-doodle-google-search-google-company-text-logo-thumbnail.png"
                  alt="google"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prep */}

      <section className="flex justify-center bg-white mt-10 text-white">
        <div className="w-[80%] ">
          <div className="flex justify-between flex-col sm:flex-col md:flex-row">
            <div>
              <h1 className="text-5xl font-semibold text-center md:text-start mb-4 text-black">
                Career Prep
              </h1>
              <p className="text-xl text-gray-700 text-start mb-10">
                Learn from leading academicians in the field of data science and
                business analytics and several experienced industry
                practitioners from top organizations.
              </p>
            </div>
            <div className="py-8 shadow-lg bg-yellow-500 md:w-[30%] rounded-xl mb-10">
              <h2 className="text-4xl font-semibold">4.7/5</h2>
              <h4>Avg Mentorship Rating</h4>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className=" bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg text-white font-semibold text-2xl">
              Get Councelling Call
            </button>
          </div>

          <div className="my-16">
            <div className="flex justify-between items-center flex-col md:flex-row">
              <img
                className="rounded-xl mb-10 md:mr-10"
                src="https://www.score.org/sites/default/files/styles/responsive_16_9_500w/public/2022-12/AdobeStock_531907656%20%28C%29%20-%20business%20growth.jpeg?h=b7d0d280&itok=ap3R3JuY"
                alt=""
              />
              <div>
                <h2 className="text-2xl text-black font-semibold text-left">
                  1:1 Career mentoring
                </h2>
                <p className="font-semibold text-gray-700 text-left my-5 text-lg">
                  1. 1:1 LIVE online sessions with experienced industry
                  professionals.
                </p>
                <p className="font-semibold text-left my-5 text-gray-700  text-lg">
                  2. Expert mentors guide you on the career path that right for
                  you
                </p>
                <p className="font-semibold text-left my-5 text-gray-700 text-lg">
                  3. A mentor and mentee coming collectively to share expertise,
                  knowledge and solve problems.
                </p>
                <p className="font-semibold text-left my-5 text-gray-700 text-lg">
                  4. Mentors from various domains help you gain valuable
                  industry insights
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center flex-col md:flex-row">
              <img
                className="rounded-xl mb-10 md:mr-10"
                src="https://www.score.org/sites/default/files/styles/responsive_16_9_500w/public/2022-12/AdobeStock_531907656%20%28C%29%20-%20business%20growth.jpeg?h=b7d0d280&itok=ap3R3JuY"
                alt=""
              />
              <div>
                <h2 className="text-2xl text-black font-semibold text-left">
                  CV/LinkedIn Review
                </h2>
                <p className="font-semibold text-left my-5 text-gray-700 text-lg">
                  1. Feedback from experts to make your resume and LinkedIn
                  profiles stand out from the crowd
                </p>
                <p className="font-semibold text-left my-5 text-gray-700 text-lg">
                  2. Personalized and detailed suggestions to improve the
                  content and format of your CV
                </p>
                <p className="font-semibold text-left my-5 text-gray-700 text-lg">
                  3. Tips on customizing your resume for the job profile you are
                  applying to
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center flex-col md:flex-row">
              <img
                className="rounded-xl mb-10 md:mr-10"
                src="https://www.score.org/sites/default/files/styles/responsive_16_9_500w/public/2022-12/AdobeStock_531907656%20%28C%29%20-%20business%20growth.jpeg?h=b7d0d280&itok=ap3R3JuY"
                alt=""
              />
              <div>
                <h2 className="text-2xl text-black font-semibold text-left">
                  Interview Preparation Session
                </h2>
                <p className="font-semibold text-left my-5 text-gray-700 text-lg">
                  1. 1:1 mock interviews with industry experts to help you land
                  your dream job
                </p>
                <p className="font-semibold text-left my-5 text-gray-700 text-lg">
                  2. Guidance from our alumni currently in roles you aspire for
                </p>
                <p className="font-semibold text-left my-5 text-gray-700 text-lg">
                  3. Develop industry context with case studies and learn
                  answers to common technical and HR questions
                </p>
                <p className="font-semibold text-left my-5 text-gray-700 text-lg">
                  4. Mentors from various domains help you gain valuable
                  industry insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* networking sessions  */}

      <section className="flex justify-center py-14 bg-[#F5F7F8] text-black">
        <div className="w-[80%] flex justify-between flex-col sm:flex-col md:flex-row">
          <div className="w-full md:w-[50%] px-0 md:px-10">
            <h1 className="text-2xl text-black md:text-4xl font-semibold text-center md:text-start mb-8">
              Networking sessions - GL Confluence
            </h1>
            <p className="text-xl text-gray-700 text-start mb-5 ">
              1. Career fairs and recruitment drives exclusive to Great Learners
            </p>
            <p className="text-xl text-gray-700 text-start mb-10">
              2. Organized at regular intervals
            </p>
            <h4 className="text-2xl text-normal text-center md:text-start mb-2">
              Our top recruiters
            </h4>
            <img
              src="https://d1vwxdpzbgdqj.cloudfront.net/excelerate/excelerate-career-fairs-section.png"
              alt=""
            />
          </div>
          <div className="mt-10 md:mt-0 w-full md:w-[50%]">
            <img
              className="w-[800px] md:w-[1200px] rounded-lg"
              src="https://e0.pxfuel.com/wallpapers/942/296/desktop-wallpaper-financial-partners-greeting-each-other-at-an-office-meeting-stock-crushpixel-finance-meeting.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center mb-20 py-14 bg-[#F5F7F8] text-white">
        <div className="w-[80%] flex justify-between flex-col sm:flex-col md:flex-row">
          <div className="w-full md:w-[50%] px-0 md:px-10">
            <h1 className="text-2xl md:text-4xl text-black font-semibold text-center md:text-start mb-8">
              Hackathons & Live Projects
            </h1>
            <p className="text-xl text-gray-700 text-start mb-5 ">
              1. Participate in hackathons sponsored by top companies
            </p>
            <p className="text-xl text-gray-700 text-start mb-10">
              2. Build industry experience that will be relevant to your future
              job
            </p>
            <p className="text-xl text-gray-700 text-start mb-10">
              3.Take part in live projects organised by companies such as
              Mahindra Logistics, Wysa, Bajaj Allianz.
            </p>
            <p className="text-xl text-gray-700 text-start mb-10">
              4. Work on real-world problems that all add value to your resume
            </p>
          </div>
          <div className="mt-10 md:mt-0 w-full md:w-[50%]">
            <img
              className="w-[800px] md:w-[1200px] rounded-lg"
              src="https://e0.pxfuel.com/wallpapers/942/296/desktop-wallpaper-financial-partners-greeting-each-other-at-an-office-meeting-stock-crushpixel-finance-meeting.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Corousel Section */}

      <section className="flex justify-center items-center p-14">
        <div className="w-[80%] flex justify-between flex-col sm:flex-col md:flex-row">
          <Carousel />
        </div>
      </section>
    </div>
  );
}

export default Career;
