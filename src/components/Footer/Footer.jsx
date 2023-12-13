import React from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black ">
      <div className="w-full px-10 md:px-20 py-16 flex justify-between flex-wrap">
        <div className="text-gray-300 flex flex-col items-start">
          <h2 className="my-6">Trending Programs</h2>
          <a
            className="text-gray-400 text-left my-2 no-underline hover:text-gray-100"
            href="#"
          >
            UT Austin: PG Program in Data Science and Business Analytics
          </a>
          <a
            className="text-gray-400 text-left my-2 no-underline hover:text-gray-100"
            href="#"
          >
            UT Austin: PG Program in Artificial Intelligence and Machine
            Learning
          </a>
          <a
            className="text-gray-400 text-left my-2 no-underline hover:text-gray-100"
            href="#"
          >
            Great Lakes: PG Program in Data Science and Engineering (Bootcamp)
          </a>
          <a
            className="text-gray-400 text-left my-2 no-underline hover:text-gray-100"
            href="#"
          >
            Great Lakes: PG Diploma in Management (Online)
          </a>
          <a
            className="text-gray-400 text-left my-2 no-underline hover:text-gray-100"
            href="#"
          >
            Great Lakes: PG Program in Cloud Computing
          </a>
        </div>
        <div className="text-gray-300 flex flex-col items-start">
          <h2 className="my-6">Browse Courses</h2>
          <a
            className="text-gray-400 my-2 no-underline hover:text-gray-100"
            href="#"
          >
            Data Science Courses
          </a>
          <a
            className="text-gray-400 my-2 no-underline hover:text-gray-100"
            href="#"
          >
            Artificial Intelligence Courses
          </a>
          <a
            className="text-gray-400 my-2 no-underline hover:text-gray-100"
            href="#"
          >
            Digital Marketing Courses
          </a>
          <a
            className="text-gray-400 my-2 no-underline hover:text-gray-100"
            href="#"
          >
            Software Engineering Courses
          </a>
          <a
            className="text-gray-400 my-2 no-underline hover:text-gray-100"
            href="#"
          >
            Cloud Computing Courses
          </a>
        </div>
        <div className="text-gray-300 flex flex-col">
          <div className="text-gray-300 flex flex-col items-start">
            <h2 className="my-6 ">Degrees</h2>
            <a
              className="text-gray-400 my-2 no-underline hover:text-gray-100"
              href="#"
            >
              MBA Courses
            </a>
            <a
              className="text-gray-400 my-2 no-underline hover:text-gray-100"
              href="#"
            >
              M. Tech Courses
            </a>
            <a
              className="text-gray-400 my-2 no-underline hover:text-gray-100"
              href="#"
            >
              Masters Courses
            </a>
          </div>
          <div className="text-gray-300 flex flex-col items-start">
            <h2 className="my-6">Quick Links</h2>
            <a
              className="text-gray-400 my-2 no-underline hover:text-gray-100"
              href="#"
            >
              About Us
            </a>
            <a
              className="text-gray-400 my-2 no-underline hover:text-gray-100"
              href="#"
            >
              Careers at Great Learning
            </a>
            <a
              className="text-gray-400 my-2 no-underline hover:text-gray-100"
              href="#"
            >
              Grievance Redressal
            </a>
            <a
              className="text-gray-400 my-2 no-underline hover:text-gray-100"
              href="#"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="text-gray-300 flex-col">
          <div>
            <h1 className="my-6">LOGO</h1>
          </div>
          <div className="text-gray-300">
            <h5 className="text-start my-3">India:</h5>
            <div className="flex justify-start cursor-pointer">
              <IoIosMail size={25} className="mx-2" />
              <p className="text-gray-400 hover:text-gray-100">
                info@cantech.in
              </p>
            </div>
            <div className="flex  justify-start cursor-pointer">
              <FaPhoneAlt size={25} className="mx-2" />
              <p className="text-gray-400 hover:text-gray-100">080 6947 4555</p>
            </div>
          </div>
          <div className="text-gray-300 mt-10">
            <h5 className="text-start my-3">US and Other countries :</h5>
            <div className="flex justify-start cursor-pointer">
              <IoIosMail size={25} className="mx-2" />
              <p className="text-gray-400 hover:text-gray-100">
                info@cantech.com
              </p>
            </div>
            <div className="flex justify-start cursor-pointer">
              <FaPhoneAlt size={25} className="mx-2" />
              <p className="text-gray-400 hover:text-gray-100 ">
                +1 512 647 2647
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
