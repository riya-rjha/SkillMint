// CourseSlider.jsx
import React from 'react';
import Slider from 'react-slick';

const courses = [
  { title: "DSA in Java", price: "$500", description: "Master Data Structures and Algorithms.", imageUrl: "https://via.placeholder.com/340x340" },
  { title: "Bootcamp in React.js", price: "$700", description: "Learn the latest in React.js.", imageUrl: "https://via.placeholder.com/340x340" },
  { title: "Bootcamp in React Native", price: "$600", description: "Build mobile apps using React Native.", imageUrl: "https://via.placeholder.com/340x340" },
  { title: "DSA in C++", price: "$400", description: "Understand algorithms with C++.", imageUrl: "https://via.placeholder.com/340x340" },
  { title: "DSA in Python", price: "$450", description: "Learn algorithms with Python.", imageUrl: "https://via.placeholder.com/340x340" },
];

const CourseSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="course-slider bg-black p-5 rounded-lg -mt-12">
      <h2 className="text-5xl font-bold text-green-500 text-center mb-5">Our Courses</h2>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="course-card bg-gray-800 p-4 rounded-lg text-white">
            <img src={course.imageUrl} alt={course.title} className="w-full rounded-md mb-4" />
            <h3 className="text-lg text-green-400">{course.title}</h3>
            <p className="text-sm">{course.price}</p>
            <p className="text-xs text-gray-400">{course.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseSlider;
