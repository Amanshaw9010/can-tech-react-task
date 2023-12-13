import React from "react";

const CourseCard = ({ course }) => (
  <div className="max-w-sm mx-2 my-4  p-3 bg-white shadow-custom rounded-lg overflow-hidden border-[2px] hover:border-gray-400">
    <img
      className="w-full h-50 object-cover rounded-lg"
      src={course.imageUrl}
      alt={course.title}
    />
    <div className="p-4 text-black">
      <div className="font-bold text-xl mb-2">{course.title}</div>
      <p className="text-gray-700 text-base">{course.description}</p>
    </div>
  </div>
);

const CourseList = ({ courses }) => (
  <div className=" grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
    {courses.map((course) => (
      <CourseCard key={course.id} course={course} />
    ))}
  </div>
);

export default CourseList;
