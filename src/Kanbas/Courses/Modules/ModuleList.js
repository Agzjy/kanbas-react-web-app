import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaPlus, FaEllipsisV, FaCheckCircle } from 'react-icons/fa';
import './index.css';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter(module => module.course === courseId);

  return (
    <>
    <div className="btn-group mb-2" role="group">
        <button className="btn custom-btn collapse-all">Collapse All</button>
        <button className="btn custom-btn view-progress">View Progress</button>
        <button className="btn custom-btn publish-all">Publish All <FaCheckCircle className="icon-check" /></button>
        <button className="btn custom-btn add-module"><FaPlus /> Module</button>
        <button className="btn custom-btn more-options"><FaEllipsisV /></button>
    </div>
    <hr />

    <div class="list-group">
    <a href="#" class="list-group-item list-group-item-secondary">Week 0 - INTRO<i class="fas fa-ellipsis-v float-end mx-2"></i>
      <i class="fas fa-check float-end text-success"></i></a>
    <div class="list-group-item">
      LEARNING OBJECTIVES
      <ul class="list-group mt-2">
          <li class="list-group-item">Introduction to the course <i class="fas fa-ellipsis-v float-end mx-2"></i>
            <i class="fas fa-check float-end text-success"></i></li>
          <li class="list-group-item">Learn what is Web Development<i class="fas fa-ellipsis-v float-end mx-2"></i>
            <i class="fas fa-check float-end text-success"></i></li>
          <li class="list-group-item">Creating a development environment <i class="fas fa-ellipsis-v float-end mx-2"></i>
            <i class="fas fa-check float-end text-success"></i></li>
          <li class="list-group-item">Creating a Web Application<i class="fas fa-ellipsis-v float-end mx-2"></i>
            <i class="fas fa-check float-end text-success"></i></li>
          <li class="list-group-item">Getting started with the 1st assignment <i class="fas fa-ellipsis-v float-end mx-2"></i>
            <i class="fas fa-check float-end text-success"></i></li>
      </ul>
    </div>
    <div class="list-group-item">
      READING
      <ul class="list-group mt-2">
          <li class="list-group-item">Full Stack Developer - Chapter 1 - Introduction<i class="fas fa-ellipsis-v float-end mx-2"></i>
            <i class="fas fa-check float-end text-success"></i></li>
          <li class="list-group-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML<i class="fas fa-ellipsis-v float-end mx-2"></i>
            <i class="fas fa-check float-end text-success"></i></li>
      </ul>
    </div>
    <div class="list-group-item">
      SLIDES
      <ul class="list-group mt-2">
        <li class="list-group-item">
            <a href="#" class="text-danger">Introduction to Web Development</a>
            <i class="fas fa-ellipsis-v float-end mx-2"></i>
            <i class="fas fa-check float-end text-success"></i>
        </li>
        <li class="list-group-item">
            <a href="#" class="text-danger">Creating an HTTP server with Node.js</a>
            <i class="fas fa-ellipsis-v float-end mx-2"></i>
            <i class="fas fa-check float-end text-success"></i>
        </li>
        <li class="list-group-item">
          <a href="#" class="text-danger">Creating an React Application</a>
          <i class="fas fa-ellipsis-v float-end mx-2"></i>
          <i class="fas fa-check float-end text-success"></i>
      </li>
    </ul>    
                  
    </div>
</div>
</>
  );
}

export default ModuleList;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   addModule,
//   deleteModule,
//   updateModule,
//   setModule,
//   setModules,
// } from "./modulesReducer";
// // import { findModulesForCourse } from "./client";
// import * as client from "./client";
// import { createModule, findModulesForCourse } from "./client";

// function ModuleList() {
//   const handleDeleteModule = (moduleId) => {
//     client.deleteModule(moduleId).then((status) => {
//       dispatch(deleteModule(moduleId));
//     });
//   };

//   const handleUpdateModule = async () => {
//     const status = await client.updateModule(module);
//     dispatch(updateModule(module));
//   };


//   const { courseId } = useParams();
//   useEffect(() => {
//     findModulesForCourse(courseId)
//       .then((modules) =>
//         dispatch(setModules(modules))
//     );
//   }, [courseId]);

//   const modules = useSelector((state) => state.modulesReducer.modules);
//   const module = useSelector((state) => state.modulesReducer.module);
//   const dispatch = useDispatch();
//   return (
//     <ul className="list-group">
//       <li className="list-group-item">
//         <button
//           onClick={() => dispatch(addModule({ ...module, course: courseId }))}
//         >
//           Add
//         </button>
//         <button onClick={() => dispatch(updateModule(module))}>Update</button>
//         <input
//           value={module.name}
//           onChange={(e) =>
//             dispatch(setModule({ ...module, name: e.target.value }))
//           }
//         />
//         <textarea
//           value={module.description}
//           onChange={(e) =>
//             dispatch(setModule({ ...module, description: e.target.value }))
//           }
//         />
//       </li>
//       {modules
//         .filter((module) => module.course === courseId)
//         .map((module, index) => (
//           <li key={index} className="list-group-item">
//             <button onClick={() => dispatch(setModule(module))}>Edit</button>
//             <button onClick={() => handleDeleteModule(module._id)}>
//               Delete
//             </button>
//             <h3>{module.name}</h3>
//             <p>{module.description}</p>
//           </li>
//         ))}
//     </ul>
//   );
// }
// export default ModuleList;