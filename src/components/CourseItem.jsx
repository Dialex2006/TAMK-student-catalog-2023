import React from "react";
//import { Link, Element } from "react-scroll";
import { Link } from "react-router-dom";

const CourseItem = () => {
  return (
    <div className="company w-full bg-black py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-[#FFFFFF] font-bold ">Course List</p>
          <ul className="list-decimal pl-5 mt-4 text-white">
            <li className="relative before:content-['✔'] before:absolute before:left-[-1.5em] before:text-green-500">
              Course 1
            </li>
            <li className="relative before:content-['✔'] before:absolute before:left-[-1.5em] before:text-green-500">
              Course 2
            </li>
            <li className="relative before:content-['✔'] before:absolute before:left-[-1.5em] before:text-green-500">
              Course 3
            </li>
          </ul>

          <h1 className="md:text-4xl text-[white] sm:text-3xl text-2xl font-bold py-2">
            Access the largest university network{" "}
          </h1>
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

export default CourseItem;
