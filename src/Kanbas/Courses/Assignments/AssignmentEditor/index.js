import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {  FaEllipsisV } from 'react-icons/fa';
import './index.css';


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="right-container">
          <button className="btn group-btn published">+ Published</button>
          <FaEllipsisV className="more-options-icon" />
      </div>
      <hr/>
      <h2>Assignment Name</h2>
      <input value={assignment.title}
             className="form-control mb-2" />
      <div className="assignment-actions-container">
        <div className="buttons-container">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-cancel">
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-save">
            Save
          </button>
  </div>
  </div>
      <hr/>
    </div>
  );
}


export default AssignmentEditor;