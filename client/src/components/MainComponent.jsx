// MainComponent.jsx
import React from 'react';
import CourseSlider from './CourseSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainComponent = () => {
  return (
    <div className="main-container bg-black p-10">
      <CourseSlider />
    </div>
  );
};

export default MainComponent;
