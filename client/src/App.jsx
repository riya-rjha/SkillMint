import React from "react";
import HeroSection from "./components/HeroSection";
import CourseSearchForm from "./components/CourseSearchForm";
import StatsSection from "./components/StatsSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <CourseSearchForm />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default App;
