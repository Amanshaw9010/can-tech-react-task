import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Slider from "react-slick";
import CourseButton from "./components/Button";
import SearchBar from "./components/SearchBar";
import CourseList from "./components/CoursesCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const coursesData = [
  {
    id: 1,
    title: "Frontend Course",
    type: "frontend",
    description: "Learn frontend development with HTML, CSS, and JavaScript.",
    imageUrl: "https://wallpapercave.com/wp/wp12896968.jpg",
  },
  {
    id: 2,
    title: "Backend Course",
    type: "backend",
    description:
      "Explore server-side development with Node.js, Express, and databases.",
    imageUrl:
      "https://images.ctfassets.net/aq13lwl6616q/2w6RsKsVuc0IwHImyqx1TZ/030dff02ec89e35c72cfff4f66f0065e/Become_a_Backend_Developer.jpg",
  },
  {
    id: 3,
    title: "Fullstack Course",
    type: "fullstack",
    description:
      "Become a fullstack developer by mastering both frontend and backend technologies.",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D12AQHiWNCRjPrJ4w/article-cover_image-shrink_600_2000/0/1687168438236?e=2147483647&v=beta&t=cLX8ycGZ9dkbkMz70yJUZdBINaMPh3pwiaqTRw2PCJw",
  },
  {
    id: 4,
    title: "ReactJS Course",
    type: "frontend",
    description: "Build modern user interfaces with the popular React library.",
    imageUrl:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--MFJ02gLa--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/91yhnh0era2zx9ial7me.png",
  },
  {
    id: 5,
    title: "Next.js Course",
    type: "frontend",
    description:
      "Learn server-side rendering and more with the Next.js framework.",
    imageUrl:
      "https://www.terasoltechnologies.com/hubfs/Terasol%20Blogs/Next%20js%20framework.jpg",
  },
  {
    id: 6,
    title: "Python for Data science",
    type: "python",
    description: "Learn frontend development with HTML, CSS, and JavaScript.",
    imageUrl:
      "https://www.aiche.org/sites/default/files/images/courses/lead_custom_image_ela271.jpg",
  },
  {
    id: 7,
    title: "Python with Django",
    type: "backend",
    description: "Learn frontend development with HTML, CSS, and JavaScript.",
    imageUrl:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/293157079/original/c751b15930d60dd739a4353c8f4cdb4e8bd29767/e-your-python-django-flask-web-application-and-backend-rest-api-developer.jpg",
  },
  {
    id: 8,
    title: "Mobie App Development",
    type: "mobile D",
    description: "Learn frontend development with HTML, CSS, and JavaScript.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaemd1JU49HT1GPmhFXwgFl9NsrHMbaPLYl9MeIXcCg4CLYEwsCq7LMOSZp-KX2LmT0ys&usqp=CAU",
  },
  // Add more courses as needed
];

const Courses = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = coursesData.filter(
    (course) =>
      (selectedType === "all" || course.type === selectedType) &&
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#F4F4F4] text-[#D0DFFF]">
      <div
        className="h-[60vh] bg-cover bg-top relative"
        style={{
          backgroundImage:
            'url("https://cdn.sanity.io/images/tlr8oxjg/production/6cd4c1d14114b079cb2cb35a1d6bd63169facd65-1456x816.png?w=3840&q=80&fit=clip&auto=format")',
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1
            id="typewriter-eff"
            className="text-4xl sm:text-8xl font-semibold text-white"
          >
            <Typewriter
              options={{
                strings: ["Welcome to our Courses"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-2xl w-full">
            Explore and enhance your skills with our diverse range of courses.
          </p>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <div className="mb-4">
          {/* Search bar */}
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="mb-4 px-4">
          <Slider {...sliderSettings}>
            {[
              "all",
              "frontend",
              "backend",
              "fullstack",
              "python",
              "mobile D",
            ].map((type) => (
              <div key={type}>
                <CourseButton
                  type={type}
                  setSelectedType={setSelectedType}
                  selectedType={selectedType}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div>
          {/* Display filtered courses */}
          <CourseList courses={filteredCourses} />
        </div>
      </div>
    </div>
  );
};

export default Courses;
