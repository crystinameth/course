import React, { useEffect, useState } from "react";

function ShowCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/admin/courses", {
      headers: {
        Authorization: `Bearer ${yourAuthToken}`, 
      },
    })
    .then((response) => {
      setCourses(response.data.courses);
    })
    .catch((error) => {
      console.error("Error fetching courses:", error);
    });
  }, []);

  return (
    <div>
      <h1>Course List</h1>
      {courses.map((course) => (
        <Course key={course._id} title={course.title} />
      ))}
    </div>
  );
}

function Course(props) {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
}

export default ShowCourses;

