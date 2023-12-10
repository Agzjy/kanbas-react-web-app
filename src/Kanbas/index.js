// import {Link} from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
 return(
  <div>
   <Nav/>
   <div className="d-flex">
      <div>
         <KanbasNavigation />
      </div>
      <div>
        {/* <h1>Account</h1>
        <h1>Dashboard</h1>
        <h1>Courses</h1> */}
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          {/* <Route path="Courses/*" element={<h1>Courses</h1>} /> */}
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>

      </div>
    </div>

  </div>
 )
}
export default Kanbas

// import KanbasNavigation from "./KanbasNavigation";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Courses from "./Courses";
// import store from "./store";
// import { Provider } from "react-redux";
// import axios from "axios";
// import React, { useState, useEffect } from "react";


// // import "./index.css"; // optionally import CSS files as needed
// function Kanbas() {
//   const [courses, setCourses] = useState([]);
//   const URL = "http://localhost:4000/api/courses";
//   const updateCourse = async (course) => {
//   const response = await axios.put(
//     `${URL}/${course._id}`,
//     course
//   );
//   const addCourse = async () => {
//     const response = await axios.post(URL, course);
//     setCourses([
//       response.data,
//       ...courses,
//     ]);
//     course({ name: "" });
//   };

//   setCourses(
//     courses.map((c) => {
//       if (c._id === course._id) {
//         return course;
//       }
//       return c;
//     })
//   );
//   course({ name: "" });
// };

//   const deleteCourse = async (course) => {
//     const response = await axios.delete(
//       `${URL}/${course._id}`
//     );
//     setCourses(courses.filter(
//       (c) => c._id !== course._id));
//   };

//   const findAllCourses = async () => {
//     const response = await axios.get(URL);
//     setCourses(response.data);
//   };
//   useEffect(() => {
//     findAllCourses();
//   }, []);

//   return (
//     <Provider store={store}>
//     <div className="d-flex">
//       <KanbasNavigation />
//       <div>
//         {/* <h1>Account</h1>
//         <h1>Dashboard</h1>
//         <h1>Courses</h1> */}
//         <Routes>
//           <Route path="/" element={<Navigate to="Dashboard" />} />
//           <Route path="Account" element={<h1>Account</h1>} />
//           <Route path="Dashboard" element={<Dashboard />} />
//           <Route path="Courses/:courseId/*" element={<Courses />} />
//         </Routes>
//       </div>
//     </div>
//     </Provider>

//   );
// }
// export default Kanbas;