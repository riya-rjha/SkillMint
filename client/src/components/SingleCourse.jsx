import React from "react";
import courses from "./shared/CourseDetails.json"; // Assuming the JSON is in this file
import vid from '../../../videos/java.mp4';

const SingleCourse = () => {
  // Simulate enrollment for the Java course (id: 1)
  const course = courses.find((course) => course.id === 1);

  return (
    <div className="bg-black text-white min-h-screen px-8 py-12">
      {/* Course Header Section */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
        <p className="text-lg text-gray-400 mb-2">
          Instructor: {course.instructor}
        </p>
        <p className="text-yellow-400 text-lg">
          ★ {course.rating} ({course.students} students)
        </p>
      </div>

      {/* Video Section */}
      <div className="flex justify-center mb-12">
        <video controls className="w-full lg:w-2/3 h-auto rounded-lg">
          <source src={vid} />
        </video>
      </div>

      {/* Course Description */}
      <div className="bg-gray-900 p-6 rounded-lg text-left mb-12">
        <h3 className="text-2xl font-semibold mb-4">About This Course</h3>
        <p className="text-lg text-gray-300">{course.description}</p>
      </div>

      {/* Course Modules */}
      <div className="bg-gray-900 p-6 rounded-lg text-left">
        <h3 className="text-2xl font-semibold mb-4">Course Modules</h3>
        {course.modules.map((module, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-semibold text-green-400 mb-2">
              {module.title}
            </h4>
            <ul className="list-disc list-inside ml-6 text-gray-300">
              {module.lessons.map((lesson, idx) => (
                <li key={idx} className="text-lg">
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCourse;
