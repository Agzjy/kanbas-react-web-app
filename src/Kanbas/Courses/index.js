import React from 'react';
import { Navigate, Route, Routes, useParams, useLocation } from 'react-router-dom';
import './index.css';
import CourseNavigation from "./CourseNavigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import db from "../../Kanbas/Database";
import Modules from "./Modules";
import { FaGlasses } from 'react-icons/fa';
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";


function Courses() {
  const { courseId } = useParams();
  const location = useLocation();
  const course = db.courses.find((course) => course._id === courseId);
  
  const pathSegments = location.pathname.split('/');
  const pageName = pathSegments[4]; // Adjust if needed based on your URL structure

  return (
    <div className="course-container">
      <div className="course-header">
        <div className="title-container">
          <FontAwesomeIcon icon={faBars} className="icon-bars" />
          <h1 className="course-title">
            {course.number} {course.name} {pageName && <span className="page-name"> > {pageName}</span>}
          </h1>
        </div>
        <button className="student-view-btn"><FaGlasses /> Student View</button>
      </div>
      <hr className="full-width-hr" />

      <div className="course-layout">
        <CourseNavigation />
        <div className="course-content">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId"
                   element={<AssignmentEditor/>}/>

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;





// import React, { useState, useEffect } from "react";
// import {
//   useParams,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
// } from "react-router-dom";
// import JsonPre from "../../Labs/a3/JsonPre";
// import db from "../Database";
// import CourseNavigation from "./CourseNavigation";
// import Modules from "./Modules";
// import Home from "./Home";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/AssignmentEditor";
// import Grades from "./Grades";
// import * as client from "./client";

// function Courses() {
//   const { courseId } = useParams();
//   const { pathname } = useLocation();
//   const [empty, kanbas, courses, id, screen] = pathname.split("/");
//   const [course, setCourse] = useState({}); // = db.courses.find((course) => course._id === courseId);
//   const fetchCourse = async () => {
//     const course = await client.fetchCourse(courseId);
//     setCourse(course);
//   };

//   useEffect(() => {
//     fetchCourse();
//   }, []);

//   return (
//     <div>
//       <h1>
//         Courses {course.name} / {screen}
//       </h1>
//       <CourseNavigation />
//       <div>
//         <div
//           className="overflow-y-scroll position-fixed bottom-0 end-0"
//           style={{
//             left: "320px",
//             top: "50px",
//           }}
//         >
//           <Routes>
//             <Route path="/" element={<Navigate to="Home" />} />
//             <Route path="Home" element={<Home />} />
//             <Route path="Modules" element={<Modules />} />
//             <Route path="Assignments" element={<Assignments />} />
//             <Route
//               path="Assignments/:assignmentId"
//               element={<AssignmentEditor />}
//             />
//             <Route path="Grades" element={<Grades />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Courses;