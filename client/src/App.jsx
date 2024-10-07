import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import CourseTabs from './components/shared/CourseTabs';
import CourseDetail from './components/CourseDetail';
import Dashboard from './components/Dashboard';
import SingleCourse from './components/SingleCourse';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CourseTabs />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course-single" element={<SingleCourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
