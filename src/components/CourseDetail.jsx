import React from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();
  
  const courseInfo = {
    title: "Advanced Blockchain Development",
    instructor: "Alex Thompson",
    rating: 4.8,
    students: 1240,
    price: "0.8 ETH",
    description: "Master the art of blockchain development with our comprehensive course. Learn how to create, test, and deploy smart contracts, build decentralized applications, and understand the intricacies of blockchain technology.",
    modules: [
      {
        title: "Introduction to Smart Contracts",
        lessons: ["Understanding Smart Contract Basics", "Setting Up Your Development Environment"]
      },
      {
        title: "Solidity Deep Dive",
        lessons: ["Data Types and Variables", "Functions and Modifiers"]
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{courseInfo.title}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <img src="https://via.placeholder.com/40" alt="Instructor" className="rounded-full" />
            <div>
              <p className="text-[#3FA37A]">{courseInfo.instructor}</p>
              <div className="flex items-center">
                <span className="text-yellow-400">★★★★★</span>
                <span className="ml-2">{courseInfo.rating}</span>
                <span className="ml-4 text-gray-400">{courseInfo.students} students</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">About This Course</h2>
            <p className="text-gray-400">{courseInfo.description}</p>
          </div>

          <div className="space-y-4">
            {courseInfo.modules.map((module, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="text-gray-400">• {lesson}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 sticky top-4">
            <img src="https://via.placeholder.com/400x225" alt="Course preview" className="w-full rounded-lg mb-4" />
            <div className="text-3xl font-bold mb-6">{courseInfo.price}</div>
            <button className="w-full bg-[#3FA37A] hover:bg-[#2D8960] text-white py-3 rounded-lg mb-4">
              Enroll Now
            </button>
            <p className="text-sm text-gray-400 text-center">30-day money-back guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;