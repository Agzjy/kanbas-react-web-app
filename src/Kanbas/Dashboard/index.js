import { React, useState } from "react";
import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard() {
  // { courses, course, setCourse, addNewCourse,
  //   deleteCourse, updateCourse }
  
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  const addNewCourse = () => {
    setCourses([...courses,
              { ...course,
                _id: new Date().getTime() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };



  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2 style={{ paddingLeft: '20px' }}>Published Courses ({courses.length})</h2>
      <hr />

      <div className="course-section">
        <div className="course-input-section">
          <input 
            value={course.name} 
            className="course-input"
            placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <button className="course-button add-button" onClick={addNewCourse}>Add</button>
          <button className="course-button update-button" onClick={updateCourse}>Update</button>
        </div>
      </div>

      <hr />
      
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
          <div className="card">
          <div className="course-image"></div>
          {/* <div className="card-header bg-primary text-white custom-card-header">
          </div> */}
          <div className="card-body">
            <Link to={`/Kanbas/Courses/${course._id}`} className="d-block mb-2 text-ellipsis">
              {course._id} {course.name}

              <button className="course-button edit-btn" onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                Edit</button>

              <button className="course-button delete-btn" onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete</button>


            </Link>
            <h5 className="card-title mb-2 text-ellipsis">
              {course.number} {course.name}
            </h5>
            <p className="mb-1">Start: {course.startDate}</p>
            <p>End: {course.endDate}</p>
          </div>
        </div>`
        </div>

        ))}
      </div>
               

    </div>
  );
}

export default Dashboard;





    





    



