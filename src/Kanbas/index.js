import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";


// import "./index.css"; // optionally import CSS files as needed
function Kanbas() {
  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        {/* <h1>Account</h1>
        <h1>Dashboard</h1>
        <h1>Courses</h1> */}
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
    </Provider>

  );
}
export default Kanbas;