import React from 'react';

function Dashboard() {
  const enrolledCourses = [
    {
      title: "Blockchain Fundamentals",
      progress: 40,
      lastAccessed: "2 days ago"
    },
    {
      title: "Smart Contract Security",
      progress: 30,
      lastAccessed: "1 week ago"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Learning Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {[
          { title: "Courses Completed", value: "4" },
          { title: "Hours Learned", value: "26" },
          { title: "Certificates Earned", value: "3" }
        ].map((stat, index) => (
          <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <p className="text-gray-400 mb-2">{stat.title}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Enrolled Courses</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {enrolledCourses.map((course, index) => (
          <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-400">Last accessed {course.lastAccessed}</p>
              </div>
              <button className="border border-[#3FA37A] text-[#3FA37A] hover:bg-[#3FA37A] hover:text-white px-4 py-2 rounded">
                Continue
              </button>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-[#3FA37A] h-2 rounded-full" 
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <p className="text-right mt-2 text-sm text-gray-400">{course.progress}% complete</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;