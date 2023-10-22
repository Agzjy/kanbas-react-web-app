import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard() {
  const courses = db.courses;

  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2 style={{ paddingLeft: '20px' }}>Published Courses ({courses.length})</h2>
      <div className="row" style={{ paddingLeft: '20px' }}>
        {courses.map((course, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
          <div className="card">
              <div className="card-header bg-primary text-white custom-card-header">
              </div>
              <div className="card-body">
                  <Link to={`/Kanbas/Courses/${course._id}`} className="d-block mb-2">
                      {course._id} {course.name}
                  </Link>
                  <h5 className="card-title mb-2" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                      {course.number} {course.name}
                  </h5>
                  <p className="mb-1">Start: {course.startDate}</p>
                  <p>End: {course.endDate}</p>
              </div>
          </div>
          </div>
      
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
