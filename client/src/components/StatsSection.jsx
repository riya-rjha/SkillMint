import React from 'react';

const StatsSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around max-w-4xl mx-auto mt-10">
      <div className="bg-gray-800 rounded-3xl shadow-lg p-6 mb-6 md:mb-0">
        <h3 className="text-green-500 text-xl font-medium">72k+ Happy Learners</h3>
      </div>
      <div className="bg-gray-800 rounded-3xl shadow-lg p-6">
        <h3 className="text-green-500 text-xl font-medium">200+ New Courses Added Daily!</h3>
      </div>
    </div>
  );
};

export default StatsSection;
