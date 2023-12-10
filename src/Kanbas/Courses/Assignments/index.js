import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaBook, FaSearch } from 'react-icons/fa';
import './index.css';

function Assignments() {
  const { courseId } = useParams();
  const courseAssignments = db.assignments.filter(
    (assignment) => assignment.course === courseId);

  return (
    <div className="assignments-container">
      <div className="search-and-actions">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search for Assignment" className="search-input" />
          <div className="button-container">
        </div>
          <button className="btn group-btn">+ Group</button>
          <button className="btn assignment-btn">+ Assignment</button>
          <FaEllipsisV className="more-options-icon" />
        </div>
      </div>
      <hr/>

      <div className="assignments-list">
        {courseAssignments.map((assignment) => (
          <div key={assignment._id} className="assignment-item">
            <FaBook className="icon-book" />
            <div className="assignment-content">
              <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item">
              {assignment.title}
            </Link>
              <div className="assignment-details">
                {assignment.modules && Array.isArray(assignment.modules) ? assignment.modules.join(' | ') : 'No modules'}
                {' | '}
                Due {assignment.dueDate} | {assignment.points} pts
              </div>
            </div>
            <div className="assignment-actions">
              <FaCheckCircle className="check-icon" />
              <FaEllipsisV className="more-icon" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Assignments;


