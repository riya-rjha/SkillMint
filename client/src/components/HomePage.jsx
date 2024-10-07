import React from "react";
import FeaturedCourses from "./shared/FeaturedCourses";
import { Link } from "react-router-dom";

function HomePage() {
  const features = [
    {
      title: "Decentralized Learning",
      description:
        "Direct connection between learners and course creators on the blockchain.",
    },
    {
      title: "Secure Transactions",
      description: "Blockchain-powered payments ensure trust and transparency.",
    },
    {
      title: "Fair Compensation",
      description:
        "Course creators earn directly from their content, no middlemen.",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Learn, Earn, and Grow on the{" "}
          <span className="text-[#3FA37A]">Blockchain</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          SkillMint connects learners directly with expert instructors through
          secure, decentralized courses. Unlock your potential while supporting
          creators.
        </p>
        <Link to='/course-single'>
          <button className="bg-[#3FA37A] hover:bg-[#2D8960] text-white px-8 py-4 rounded-full text-lg">
            Start Learning Now
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-4">{feature.title}</h2>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      <FeaturedCourses />
    </main>
  );
}

export default HomePage;
