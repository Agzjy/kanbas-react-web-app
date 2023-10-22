import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard() {
  const courses = db.courses;

  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4" key={index}>
            <div className="card">
              <div className="card-header bg-primary text-white">
                {/* <h5 className="card-title">{course.name}</h5> */} 
              </div>
              <div className="card-body">
                <Link
                  to={`/Kanbas/Courses/${course._id}`}
                >
                  {course.name}
                </Link>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;


