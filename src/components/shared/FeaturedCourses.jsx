import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "Blockchain Fundamentals",
      description: "Learn the basics of blockchain technology",
      price: "0.5 ETH",
      image: "https://via.placeholder.com/400x225"
    },
    {
      id: 2,
      title: "Smart Contract Development",
      description: "Master Solidity programming",
      price: "0.8 ETH",
      image: "https://via.placeholder.com/400x225"
    },
    {
      id: 3,
      title: "DeFi Protocols",
      description: "Explore decentralized finance",
      price: "1.0 ETH",
      image: "https://via.placeholder.com/400x225"
    }
  ];

  return (
    <div className="bg-gray-900 p-8 rounded-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
        <p className="text-gray-400">Discover top-rated blockchain courses from expert instructors</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-black border border-gray-800 rounded-lg overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-400 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-[#3FA37A] font-semibold">{course.price}</span>
                <Link 
                  to={`/course/${course.id}`}
                  className="border border-[#3FA37A] text-[#3FA37A] hover:bg-[#3FA37A] hover:text-white px-4 py-2 rounded"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCourses;
