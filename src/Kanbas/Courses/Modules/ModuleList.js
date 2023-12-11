// import React from "react";
// import { useParams } from "react-router-dom";
// import db from "../../Database";
// import { FaPlus, FaEllipsisV, FaCheckCircle } from 'react-icons/fa';
// import './index.css';

// function ModuleList() {
//   const { courseId } = useParams();
//   const modules = db.modules.filter(module => module.course === courseId);


//   return (
//     <>
//     <div className="btn-group mb-2" role="group">
//         <button className="btn custom-btn collapse-all">Collapse All</button>
//         <button className="btn custom-btn view-progress">View Progress</button>
//         <button className="btn custom-btn publish-all">Publish All <FaCheckCircle className="icon-check" /></button>
//         <button className="btn custom-btn add-module"><FaPlus /> Module</button>
//         <button className="btn custom-btn more-options"><FaEllipsisV /></button>
//     </div>
//     <hr />

//     <div class="list-group">
//     <button class="list-group-item list-group-item-secondary">Week 0 - INTRO<i class="fas fa-ellipsis-v float-end mx-2"></i>
//       <i class="fas fa-check float-end text-success"></i></button>
//     <div class="list-group-item">
//       LEARNING OBJECTIVES
//       <ul class="list-group mt-2">
//           <li class="list-group-item">Introduction to the course <i class="fas fa-ellipsis-v float-end mx-2"></i>
//             <i class="fas fa-check float-end text-success"></i></li>
//           <li class="list-group-item">Learn what is Web Development<i class="fas fa-ellipsis-v float-end mx-2"></i>
//             <i class="fas fa-check float-end text-success"></i></li>
//           <li class="list-group-item">Creating a development environment <i class="fas fa-ellipsis-v float-end mx-2"></i>
//             <i class="fas fa-check float-end text-success"></i></li>
//           <li class="list-group-item">Creating a Web Application<i class="fas fa-ellipsis-v float-end mx-2"></i>
//             <i class="fas fa-check float-end text-success"></i></li>
//           <li class="list-group-item">Getting started with the 1st assignment <i class="fas fa-ellipsis-v float-end mx-2"></i>
//             <i class="fas fa-check float-end text-success"></i></li>
//       </ul>
//     </div>
//     <div class="list-group-item">
//       READING
//       <ul class="list-group mt-2">
//           <li class="list-group-item">Full Stack Developer - Chapter 1 - Introduction<i class="fas fa-ellipsis-v float-end mx-2"></i>
//             <i class="fas fa-check float-end text-success"></i></li>
//           <li class="list-group-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML<i class="fas fa-ellipsis-v float-end mx-2"></i>
//             <i class="fas fa-check float-end text-success"></i></li>
//       </ul>
//     </div>
//     <div class="list-group-item">
//       SLIDES
//       <ul class="list-group mt-2">
//         <li class="list-group-item">
//             <div class="text-danger">Introduction to Web Development</div>
//             <i class="fas fa-ellipsis-v float-end mx-2"></i>
//             <i class="fas fa-check float-end text-success"></i>
//         </li>
//         <li class="list-group-item">
//             <div class="text-danger">Creating an HTTP server with Node.js</div>
//             <i class="fas fa-ellipsis-v float-end mx-2"></i>
//             <i class="fas fa-check float-end text-success"></i>
//         </li>
//         <li class="list-group-item">
//           <div class="text-danger">Creating an React Application</div>
//           <i class="fas fa-ellipsis-v float-end mx-2"></i>
//           <i class="fas fa-check float-end text-success"></i>
//       </li>
//     </ul>    
                  
//     </div>
// </div>
// <div className="module-list">
//       {modules.map((module, index) => (
//         <div key={index} className="module-item">
//           {/* Render module details */}
//           {module.name}
//         </div>
//       ))}
//     </div>
// </>
//   );
// }

// export default ModuleList;

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import './index.css'; 
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  // Handlers for button click events
  const handleAdd = () => {
    dispatch(addModule({ ...module, course: courseId }));
  };

  const handleDelete = (moduleId) => {
    dispatch(deleteModule(moduleId));
  };

  const handleEdit = (module) => {
    dispatch(setModule(module));
  };

  const handleUpdate = () => {
    dispatch(updateModule(module));
  };

  return (
    <div className="module-list-container">
      <div className="module-input-container">
        <input
          className="module-input"
          value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          placeholder="Introduction to Rocket Propulsion"
        />
        <textarea
          className="module-textarea"
          value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          placeholder="Basic principles of rocket propulsion and rocket engines."
        />
        <div className="module-buttons-container">
          <button className="module-button update" onClick={handleUpdate}>Update</button>
          <button className="module-button add" onClick={handleAdd}>Add</button>
        </div>
      </div>
      {modules.filter((mod) => mod.course === courseId).map((mod, idx) => (
        <div key={idx} className="module-card">
          <h3 className="module-title">{mod.name}</h3>
          <p className="module-description">{mod.description}</p>
          <div className="module-code">{mod.code}</div>
          <div className="module-card-buttons">
            <button className="module-card-button delete" onClick={() => handleDelete(mod._id)}>Delete</button>
            <button className="module-card-button edit" onClick={() => handleEdit(mod)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ModuleList;

