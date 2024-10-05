import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="bg-gradient-to-b from-green-500 to-green-700 w-full h-96 rounded-bl-full rounded-br-full relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-6xl font-bold text-white">Find Courses You Love!</h1>
        </div>
        <div className="absolute bottom-10 text-center w-full">
          <p className="text-lg text-gray-200">Discover and trade courses as NFTs!</p>
        </div>
      </div>
      <img className="w-96 h-80 rounded-2xl shadow-lg mt-6" src="https://via.placeholder.com/540x340" alt="Course Thumbnail" />
    </div>
  );
};

export default HeroSection;
