import React, { useState, useEffect } from "react";
import CourseItem from "./CourseItem";
//import { Link, Element } from "react-scroll";
import { Link } from "react-router-dom";

const CourseList = () => {
  //https://r5ok77p8ki.execute-api.eu-north-1.amazonaws.com/courses
  const [courses, setCourses] = useState([]);
  const [checkedCourses, setCheckedCourses] = useState({});
  const [generalIsExpanded, setGeneralIsExpanded] = useState(false);
  const [frontendIsExpanded, setFrontendlIsExpanded] = useState(false);
  const [backendIsExpanded, setBackendIsExpanded] = useState(false);
  const [iotIsExpanded, setIotIsExpanded] = useState(false);
  const [dataAnalysisIsExpanded, setDataAnalysisIsExpanded] = useState(false);
  const [networkingIsExpanded, setNetworkingIsExpanded] = useState(false);
  const [deviceIsExpanded, setDeviceIsExpanded] = useState(false);

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

  return (
    <div className="company w-full bg-black py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl text-[white] sm:text-3xl text-2xl font-bold py-2">
            Select Courses{" "}
          </h1>
          {/* Displaying the list of courses with checkboxes */}
          <h2
            className="md:text-2xl text-[white] sm:text-3xl text-2xl font-bold py-2 ml-4"
            onClick={() => setGeneralIsExpanded(!generalIsExpanded)}
            style={{ cursor: "pointer" }}
          >
            General
            <span style={{ whiteSpace: "pre" }}>
              {generalIsExpanded ? "      ▴" : "      ▾"}{" "}
            </span>
          </h2>
          {generalIsExpanded && (
            <p className="text-[#FFFFFF] font-bold pl-6 ml-10">
              {courses
                .filter((course) => course.category === "General")
                .map((course) => {
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
          )}

          <h2
            className="md:text-2xl text-[white] sm:text-3xl text-2xl font-bold py-2 ml-4"
            onClick={() => setFrontendlIsExpanded(!frontendIsExpanded)}
            style={{ cursor: "pointer" }}
          >
            Frontend{" "}
            <span style={{ whiteSpace: "pre" }}>
              {frontendIsExpanded ? "      ▴" : "      ▾"}{" "}
            </span>
          </h2>

          {frontendIsExpanded && (
            <p className="text-[#FFFFFF] font-bold pl-6 ml-10">
              {courses
                .filter((course) => course.category === "Frontend")
                .map((course) => {
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
          )}

          <h2
            className="md:text-2xl text-[white] sm:text-3xl text-2xl font-bold py-2 ml-4"
            onClick={() => setBackendIsExpanded(!backendIsExpanded)}
            style={{ cursor: "pointer" }}
          >
            Backend{" "}
            <span style={{ whiteSpace: "pre" }}>
              {backendIsExpanded ? "      ▴" : "      ▾"}{" "}
            </span>
          </h2>

          {backendIsExpanded && (
            <p className="text-[#FFFFFF] font-bold pl-6 ml-10">
              {courses
                .filter((course) => course.category === "Backend")
                .map((course) => {
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
          )}

          <h2
            className="md:text-2xl text-[white] sm:text-3xl text-2xl font-bold py-2 ml-4"
            onClick={() => setIotIsExpanded(!iotIsExpanded)}
            style={{ cursor: "pointer" }}
          >
            Embedded Systems (IoT){" "}
            <span style={{ whiteSpace: "pre" }}>
              {iotIsExpanded ? "      ▴" : "      ▾"}{" "}
            </span>
          </h2>

          {iotIsExpanded && (
            <p className="text-[#FFFFFF] font-bold pl-6 ml-10">
              {courses
                .filter((course) => course.category === "IoT")
                .map((course) => {
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
          )}

          <h2
            className="md:text-2xl text-[white] sm:text-3xl text-2xl font-bold py-2 ml-4"
            onClick={() => setDataAnalysisIsExpanded(!dataAnalysisIsExpanded)}
            style={{ cursor: "pointer" }}
          >
            Data Analysis{" "}
            <span style={{ whiteSpace: "pre" }}>
              {dataAnalysisIsExpanded ? "      ▴" : "      ▾"}{" "}
            </span>
          </h2>

          {dataAnalysisIsExpanded && (
            <p className="text-[#FFFFFF] font-bold pl-6 ml-10">
              {courses
                .filter((course) => course.category === "Data Analysis")
                .map((course) => {
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
          )}

          <h2
            className="md:text-2xl text-[white] sm:text-3xl text-2xl font-bold py-2 ml-4"
            onClick={() => setNetworkingIsExpanded(!networkingIsExpanded)}
            style={{ cursor: "pointer" }}
          >
            Networking and Cloud Technologies{" "}
            <span style={{ whiteSpace: "pre" }}>
              {networkingIsExpanded ? "      ▴" : "      ▾"}{" "}
            </span>
          </h2>

          {networkingIsExpanded && (
            <p className="text-[#FFFFFF] font-bold pl-6 ml-10">
              {courses
                .filter((course) => course.category === "Networking")
                .map((course) => {
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
          )}

          <h2
            className="md:text-2xl text-[white] sm:text-3xl text-2xl font-bold py-2 ml-4"
            onClick={() => setDeviceIsExpanded(!deviceIsExpanded)}
            style={{ cursor: "pointer" }}
          >
            Device Oriented Programming{" "}
            <span style={{ whiteSpace: "pre" }}>
              {deviceIsExpanded ? "      ▴" : "      ▾"}{" "}
            </span>
          </h2>

          {deviceIsExpanded && (
            <p className="text-[#FFFFFF] font-bold pl-6 ml-10">
              {courses
                .filter(
                  (course) => course.category === "Device oriented programming"
                )
                .map((course) => {
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
          )}

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
