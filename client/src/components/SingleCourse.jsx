import React from "react";
import courses from "./shared/CourseDetails.json";
import { useParams } from "react-router-dom";

const SingleCourse = () => {
  const { id } = useParams();
  const courseInfo = courses.find((course) => course.id == id);
  console.log(courseInfo);

  return (
    <div>
      SingleCourse
      <p>
        courses
        {courseInfo.modules.map((module, index) => (
          <p>{module.title}</p>
        ))}
      </p>
    </div>
  );
};

export default SingleCourse;
