import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCourses from './useCourses';

const CourseTabs = () => {
  const { courses, loading, error } = useCourses();
  const navigate = useNavigate();

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {courses.map((course, index) => (
        <div
        key={course.id}
        className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
        onClick={() => window.location.href = `/course/${course.id}`}
>
          <div className="relative pb-[56.25%] mb-4">
            <img
              src={course.imgUrl}
              alt={course.title}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-white">{course.title}</h2>
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-400">By {course.instructor}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-yellow-400">★★★★★</span>
              <span className="ml-1 text-white">{course.rating}</span>
              <span className="ml-2 text-sm text-gray-400">({course.reviews} reviews)</span>
            </div>
            <span className="text-lg font-bold text-white">{course.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseTabs;
