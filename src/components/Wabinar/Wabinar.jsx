import React from "react";
import Typewriter from "typewriter-effect";
import WebinarCard from "./webinarCard";

const Wabinar = () => {
  const webinars = [
    {
      image:
        "https://media.istockphoto.com/photos/rear-view-of-asian-business-woman-say-hello-with-teamwork-colleague-picture-id1241178021?k=20&m=1241178021&s=612x612&w=0&h=JA_Vv-lVCNw1xcBfuE-Q19Z2FHex19rgJpjtE3kXmic=",
      timing: "4 Dec 2023 | 2:00 PM",
      host: "Ashish Pal",
      post: "Full Stack Developer",
      profile:
        "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
      description: "2 Hours Webinar on Full Stack web development",
    },
    {
      image:
        "https://media.istockphoto.com/photos/business-team-in-video-conference-picture-id1405648895?k=20&m=1405648895&s=612x612&w=0&h=dkLEmkLtWaL9yhPeG689154eM5FQCzdLluNkGi4_zVc=",
      timing: "6 Dec 2023 | 2:00 PM",
      host: "Sahil",
      post: "Full Stack Developer",
      profile:
        "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
      description: "Free Full Stack Web Development Webinars",
    },
    {
      image:
        "https://media.istockphoto.com/photos/business-team-in-video-conference-picture-id1405648895?k=20&m=1405648895&s=612x612&w=0&h=dkLEmkLtWaL9yhPeG689154eM5FQCzdLluNkGi4_zVc=",
      timing: "6 Dec 2023 | 2:00 PM",
      host: "Rohit",
      post: "Data Anaylist",
      profile:
        "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
      description: "Data Analytics Wabinar - Real World Case Studies",
    },
    {
      image:
        "https://media.istockphoto.com/photos/rear-view-of-asian-business-woman-say-hello-with-teamwork-colleague-picture-id1241178021?k=20&m=1241178021&s=612x612&w=0&h=JA_Vv-lVCNw1xcBfuE-Q19Z2FHex19rgJpjtE3kXmic=",
      timing: "6 Dec 2023 | 2:00 PM",
      host: "Shivam",
      post: "Android App Developer",
      profile:
        "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
      description: "1 Hour Wabinar on Android App Development",
    },
    // Add more webinars as needed
  ];

  return (
    <div className="bg-[#0D1117] text-[#D0DFFF]">
      <div
        className="h-[60vh] bg-center bg-no-repeat bg-cover relative"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/top-view-laptop-concept-with-black-desk-spot-light-background-3d-rendering_626958-392.jpg")',
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1
            id="typewriter-eff"
            className="text-4xl sm:text-6xl font-semibold text-white"
          >
            <Typewriter
              options={{
                strings: ["Welcome to our Webinars"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-2xl w-full mt-6">
            Elevate Your Learning Experience with Engaging Webinars.
          </p>
        </div>
      </div>

      <div className="mx-auto p-12">
        <h2 className="text-6xl font-semibold my-8">Webinars</h2>
        <div className="grid grid-col-1 md:grid-cols-2  place-items-center">
          {webinars.map((webinar, index) => (
            <WebinarCard key={index} {...webinar} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wabinar;
