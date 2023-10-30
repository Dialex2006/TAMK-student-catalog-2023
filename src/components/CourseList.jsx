import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

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

  // for dialog window opening
  const [open, setOpen] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = React.useState(null);

  const handleOpen = (course) => {
    setSelectedCourse(course);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function CourseSection({ title, courses, isExpanded, toggleExpanded }) {
    return (
      <>
        <h2
          className="md:text-2xl text-[white] sm:text-3xl text-2xl font-bold py-2 ml-4"
          onClick={toggleExpanded}
          style={{ cursor: "pointer" }}
        >
          {title}
          <span style={{ whiteSpace: "pre" }}>
            {isExpanded ? "      ▴" : "      ▾"}{" "}
          </span>
        </h2>

        {isExpanded && (
          <p className="text-[#FFFFFF] font-bold pl-6 ml-10">
            {courses.map((course) => (
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
                <InfoIcon
                  onClick={() => handleOpen(course)}
                  style={{
                    marginLeft: "8px",
                    cursor: "pointer",
                    color: "#007BFF",
                  }}
                />
              </li>
            ))}
          </p>
        )}
      </>
    );
  }

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

          <CourseSection
            title="General"
            courses={courses.filter((course) => course.category === "General")}
            isExpanded={generalIsExpanded}
            toggleExpanded={() => setGeneralIsExpanded(!generalIsExpanded)}
          />

          <CourseSection
            title="Frontend"
            courses={courses.filter((course) => course.category === "Frontend")}
            isExpanded={frontendIsExpanded}
            toggleExpanded={() => setFrontendlIsExpanded(!frontendIsExpanded)}
          />

          <CourseSection
            title="Backend"
            courses={courses.filter((course) => course.category === "Backend")}
            isExpanded={backendIsExpanded}
            toggleExpanded={() => setBackendIsExpanded(!backendIsExpanded)}
          />

          <CourseSection
            title="Embedded Systems (IoT)"
            courses={courses.filter((course) => course.category === "IoT")}
            isExpanded={iotIsExpanded}
            toggleExpanded={() => setIotIsExpanded(!iotIsExpanded)}
          />

          <CourseSection
            title="Data Analysis"
            courses={courses.filter(
              (course) => course.category === "Data Analysis"
            )}
            isExpanded={dataAnalysisIsExpanded}
            toggleExpanded={() =>
              setDataAnalysisIsExpanded(!dataAnalysisIsExpanded)
            }
          />

          <CourseSection
            title="Networking and Cloud Technologies"
            courses={courses.filter(
              (course) => course.category === "Networking"
            )}
            isExpanded={networkingIsExpanded}
            toggleExpanded={() =>
              setNetworkingIsExpanded(!networkingIsExpanded)
            }
          />

          <CourseSection
            title="Device Oriented Programming"
            courses={courses.filter(
              (course) => course.category === "Device oriented programming"
            )}
            isExpanded={deviceIsExpanded}
            toggleExpanded={() => setDeviceIsExpanded(!deviceIsExpanded)}
          />

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{selectedCourse?.name}</DialogTitle>
            <DialogContent>
              <DialogContentText
                style={{ backgroundColor: "yourPreferredColor" }}
              >
                {selectedCourse?.description}
              </DialogContentText>
            </DialogContent>
          </Dialog>

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
