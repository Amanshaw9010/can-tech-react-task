import React, { useEffect } from "react";
import ChooseCard from "./components/ChooseCard";
import Overview from "./components/Overview";
import ServicesCard from "./components/ServicesCard";

import AOS from "aos";
import "aos/dist/aos.css";

const Counselling = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="w-full bg-white">
      <div className=" h-[60vh] flex justify-start py-2 px-0 sm:py-4 sm:px-8px md:py-16 md:px-28 bg-[url('https://media.istockphoto.com/id/1196701535/photo/stack-of-hands-unity-and-teamwork-concept.jpg?s=612x612&w=0&k=20&c=xVQkFCu5Dt6KYmLyEmyBOr3e2_k06qu5M4IQCpl_HLU=')] bg-cover bg-center bg-no-repeat">
        <div className="text-start text-white px-5 mt-16 md:mt-28  ">
          <h1 className="text-2xl h-14 md:h-28 sm:text-6xl font-bold">
            Career Counselling
          </h1>

          <h3 className=" text-2xl sm:text-4xl font-semibold ">
            <button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white p-2 rounded-xl">
              Enquire Now
            </button>
          </h3>
        </div>
      </div>

      <div className="px-8 md:px-20 py-6 border-b-2 border-gray-300">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center ">
            <Overview
              imageUrl="https://icons.veryicon.com/png/o/business/xicheng-comprehensive-business/conference-room-2.png"
              title="Who we Are?"
              description="Not sure what career might be best for you? Just answer a few questions about yourself and Career Profile will suggest career options that match your interests."
            />
            <Overview
              imageUrl="https://icons.veryicon.com/png/o/business/xicheng-comprehensive-business/conference-room-2.png"
              title="What we Do?"
              description="Not sure what career might be best for you? Just answer a few questions about yourself and Career Profile will suggest career options that match your interests."
            />
            <Overview
              imageUrl="https://icons.veryicon.com/png/o/business/xicheng-comprehensive-business/conference-room-2.png"
              title="Why Should you Choose Us?"
              description="Not sure what career might be best for you? Just answer a few questions about yourself and Career Profile will suggest career options that match your interests."
            />
          </div>
        </div>
      </div>

      <div className="px-8 md:px-20 bg-[#EFEBE8] py-20 border-b-2 border-gray-300">
        <h1 className="text-black">Our Services</h1>
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center "
          >
            <ServicesCard
              imageUrl="https://static9.depositphotos.com/1037987/1188/i/450/depositphotos_11886437-stock-photo-mixed-group-in-business-meeting.jpg"
              title="Complete Career Assessment"
              description="Not sure what career might be best for you? Just answer a few questions about yourself and Career Profile will suggest career options that match your interests."
            />
            <ServicesCard
              imageUrl="https://static9.depositphotos.com/1037987/1188/i/450/depositphotos_11886437-stock-photo-mixed-group-in-business-meeting.jpg"
              title="Complete Career Assessment"
              description="Not sure what career might be best for you? Just answer a few questions about yourself and Career Profile will suggest career options that match your interests."
            />
            <ServicesCard
              imageUrl="https://static9.depositphotos.com/1037987/1188/i/450/depositphotos_11886437-stock-photo-mixed-group-in-business-meeting.jpg"
              title="Complete Career Assessment"
              description="Not sure what career might be best for you? Just answer a few questions about yourself and Career Profile will suggest career options that match your interests."
            />
          </div>
        </div>
      </div>
      <div className="px-8 md:px-20 py-20 bg-[#F5F5F5] border-b-2 border-gray-300">
        <h1 className="text-black">Why Choose Us</h1>
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center "
          >
            <ChooseCard
              imageUrl="https://www.betterup.com/hs-fs/hubfs/Blog%20Images/One-on-one%20meetings/one-on-one-meeting-two-people-at-conference-table.jpg?width=800&name=one-on-one-meeting-two-people-at-conference-table.jpg"
              title="Holistic Approach"
              description="Not sure what career might be best for you? Just answer a few questions about yourself and Career Profile will suggest career options that match your interests."
            />
            <ChooseCard
              imageUrl="https://www.betterup.com/hs-fs/hubfs/Blog%20Images/One-on-one%20meetings/one-on-one-meeting-two-people-at-conference-table.jpg?width=800&name=one-on-one-meeting-two-people-at-conference-table.jpg"
              title="Personalised Experience"
              description="Not sure what career might be best for you? Just answer a few questions about yourself and Career Profile will suggest career options that match your interests."
            />
            <ChooseCard
              imageUrl="https://www.betterup.com/hs-fs/hubfs/Blog%20Images/One-on-one%20meetings/one-on-one-meeting-two-people-at-conference-table.jpg?width=800&name=one-on-one-meeting-two-people-at-conference-table.jpg"
              title="Flexible Options"
              description="Not sure what career might be best for you? Just answer a few questions about yourself and Career Profile will suggest career options that match your interests."
            />
            <ChooseCard
              imageUrl="https://www.betterup.com/hs-fs/hubfs/Blog%20Images/One-on-one%20meetings/one-on-one-meeting-two-people-at-conference-table.jpg?width=800&name=one-on-one-meeting-two-people-at-conference-table.jpg"
              title="complete program"
              description="Not sure what career might be best for you? Just answer a few questions about yourself and Career Profile will suggest career options that match your interests."
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-evenly items-center md:flex-row p-20 ">
        <div>
          <iframe
            data-aos="fade-right"
            className="rounded-xl hover:shadow-md"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.124143266895!2d77.37806721549518!3d28.626041191124667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5348341e1fb%3A0x48584e25b6f85b3c!2sCan%20Technologies%20-%20School%20ERP%20Software%2C%20Visitor%20Management%20Software%2C%20Game%20Development%2C%20Software%20Development%20Company%2C%20ERP%20Software%20Solution%20Provider%20Company!5e0!3m2!1sen!2sin!4v1602830370269!5m2!1sen!2sin"
            width={400}
            height={350}
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
            title="lazy"
          />
        </div>
        <div>
          <h1 className="text-black">Sign Up to our E-Newsletter</h1>
          <form action="" className="py-4">
            <div className="flex justify-between items-center py-2">
              <label className="text-2xl text-black" htmlFor="">
                Email:
              </label>
              <input
                className="px-4 py-3 rounded-lg text-2xl bg-[#EEEDED]"
                type="text"
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex justify-between items-center py-2">
              <label className="text-2xl text-black" htmlFor="">
                First Name:
              </label>
              <input
                className="px-4 py-3 rounded-lg text-2xl bg-[#EEEDED]"
                type="text"
                placeholder="Enter your First Name"
              />
            </div>
            <div className="flex justify-between items-center py-2">
              <label className="text-2xl text-black" htmlFor="">
                Last Name:
              </label>
              <input
                className="px-4 py-3 rounded-lg text-2xl bg-[#EEEDED]"
                type="text"
                placeholder="Enter your Last Name"
              />
            </div>
          </form>
          <button className="text-2xl font-semibold bg-gradient-to-br from-purple-600 to-blue-500 text-white px-4 py-2 rounded-xl">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counselling;
