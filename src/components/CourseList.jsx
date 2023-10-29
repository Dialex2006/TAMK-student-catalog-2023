import React, { useState, useEffect } from "react";
import CourseItem from "./CourseItem";
//import { Link, Element } from "react-scroll";
import { Link } from "react-router-dom";

const CourseList = () => {
  //https://r5ok77p8ki.execute-api.eu-north-1.amazonaws.com/courses
  const [courses, setCourses] = useState([]);
  const [checkedCourses, setCheckedCourses] = useState({});

  useEffect(() => {
    // Fetch data from your URL
    fetch("https://r5ok77p8ki.execute-api.eu-north-1.amazonaws.com/courses")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCourses(data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  console.log(checkedCourses);

  return (
    <div className="company w-full bg-black py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl text-[white] sm:text-3xl text-2xl font-bold py-2">
            Course List{" "}
          </h1>
          {/* Displaying the list of courses with checkboxes */}
          <p className="text-[#FFFFFF] font-bold pl-6">
            {courses.map((course) => {
              return (
                <li key={course.id} className="flex items-center my-2">
                  <input
                    type="checkbox"
                    checked={!!checkedCourses[course.id]}
                    onChange={(e) => {
                      setCheckedCourses((prev) => ({
                        ...prev,
                        [course.id]: e.target.checked,
                      }));
                    }}
                    className="mr-3"
                  />
                  {course.name}
                </li>
              );
            })}
          </p>
          <Link to={"/login"}>
            <button className="bg-custom-green text-[black] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Filter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
