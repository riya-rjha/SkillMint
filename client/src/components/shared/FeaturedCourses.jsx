import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "Data Structures & Algorithms Mastery in Java: From Basics to Advanced",
      description: "Become a master in data structures and algorithms using Java, starting from basics to advanced concepts.",
      price: "0.012 ETH",
      image: "https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252417.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
    },
    {
      id: 2,
      title: "Comprehensive Data Structures & Algorithms Course: C++ Edition",
      description: "Master data structures and algorithms using C++, with step-by-step lessons from basics to advanced concepts.",
      price: "0.01 ETH",
      image: "https://img.freepik.com/premium-photo/laptop-with-word-code-screen-is-open-word-code-is-screen_1077470-2841.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
    },
    {
      id: 3,
      title: "React.js Professional Bootcamp: Building Modern Web Applications",
      description: "Learn to build professional-grade web applications using React.js in this comprehensive bootcamp.",
      price: "0.016 ETH",
      image: "https://img.freepik.com/premium-photo/laptop-screen-displaying-blockchain-code-surrounded-by-coffee-cup-notepad-stylized-crypto_894218-35810.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
    }
  ];

  return (
    <div className="bg-gray-900 p-8 rounded-2xl">
      <div className="text-center mb-8">
      <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-7xl mt-10 font-bold mb-8 text-center"
          >
            Featured Courses
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-1xl font-bold mb-8 text-center"
          >
            <p className="text-gray-400 mb-20">Discover top-rated blockchain courses from expert instructors</p>
          </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-36 mb-20">
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
