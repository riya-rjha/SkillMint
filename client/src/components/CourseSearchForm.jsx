import React from 'react';

const CourseSearchForm = () => {
  return (
    <div className="max-w-lg mx-auto bg-gray-800 rounded-3xl shadow-lg p-6 mt-10">
      <h2 className="text-green-500 text-lg font-medium text-center">Search for Courses</h2>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Select Course Category"
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="Select Difficulty Level"
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white placeholder-gray-400"
        />
        <button className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default CourseSearchForm;
