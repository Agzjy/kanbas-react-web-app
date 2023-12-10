import React from "react";
import ModuleList from "../Modules/ModuleList";
import { 
  FaFileImport,
  FaHome,
  FaStream,
  FaBullhorn,
  FaChartBar,
  FaBell,
} from 'react-icons/fa';
import './index.css';

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <h2>Home</h2>
          <ModuleList />
        </div>
        <div className="col-md-3 sidebar">

          <div className="list-group">
            <button className="list-group-item list-group-item-secondary">
              <FaFileImport /> Import Existing Content
            </button>
            <button className="list-group-item list-group-item-secondary">
              <FaHome /> Choose Home Page
            </button>
            <button className="list-group-item list-group-item-secondary">
              <FaStream /> View Course Stream
            </button>
            <button className="list-group-item list-group-item-secondary">
              <FaBullhorn /> New Announcement
            </button>
            <button className="list-group-item list-group-item-secondary">
              <FaBullhorn /> New Announcement 
            </button>
            <button className="list-group-item list-group-item-secondary">
              <FaChartBar /> New Analytics
            </button>
            <button className="list-group-item list-group-item-secondary">
              < FaBell /> View Course Notifications
            </button>
          </div>

          <strong className="section-title">To Do</strong>
          <hr />
          <ul className="list-unstyled todo-list">
            <div className="text-danger">
              <span className="circle-icon">1</span> Grade A1 - ENV+HTML
            </div>
          </ul>

          <strong className="section-title">Coming Up</strong>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Home;
