import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import { FaEyeSlash } from 'react-icons/fa';

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports(EAB Navigate)", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  
  return (
    <div className="list-group" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}> 
          {link}
          {(link === "Discussions" || link === "Announcements" || link === "Pages" || link === "Files" || link === "Rubrics" || link === "Outcomes" || link === "Collaborations" || link === "Syllabus") && <FaEyeSlash style={{ marginLeft: '5px' }} />}
      </Link>
      
      ))}
    </div>
  );
}

export default CourseNavigation;

// import { Link, useParams, useLocation } from "react-router-dom";
// import "./index.css";
// import { FaEyeSlash } from 'react-icons/fa';

// function CourseNavigation() {
//   const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports(EAB Navigate)", "Settings"];
//   const { courseId } = useParams();
//   const { pathname } = useLocation();
  
//   return (
//     <div className="list-group" style={{ width: 150 }}>
//       {links.map((link, index) => (
//         <Link
//           key={index}
//           to={`/Kanbas/Courses/${courseId}/${link}`}
//           className={`list-group-item ${pathname.includes(link) && "active"}`}> 
//           {link}
//           {(link === "Discussions" || link === "Announcements" || link === "Pages" || link === "Files" || link === "Rubrics" || link === "Outcomes" || link === "Collaborations" || link === "Syllabus") && <FaEyeSlash style={{ marginLeft: '5px', color: 'gray' }} />}
//       </Link>
      
//       ))}
//     </div>
//   );
// }

// export default CourseNavigation;


