import { Link, useLocation } from "react-router-dom";
import './index.css';
function KanbasNavigation() {
  // const links = ["Account", "Dashboard", "Courses", "Calendar"];
  const links = [
    { name: "Account", icon: "fas fa-user-circle", route: "Account/Profile", specialColor: true },
    { name: "Dashboard", icon: "fa fa-tachometer-alt", colorClass: "text-danger", route: "Dashboard" },
    { name: "Courses", icon: "fa fa-book", colorClass: "text-danger", route: "Courses" },
    { name: "Calendar", icon: "far fa-calendar-alt text-danger", route: "Calendar" },
    { name: "Inbox", icon: "fas fa-envelope text-danger", route: "Inbox" },
    { name: "History", icon: "far fa-clock text-danger", route: "History" },
    { name: "Studio", icon: "fas fa-desktop text-danger", route: "Studio" },
    { name: "Commons", icon: "fas fa-sign-out-alt text-danger", route: "Commons" },
    { name: "Help", icon: "fas fa-question-circle text-danger", route: "Help" }
];

  const { pathname } = useLocation();
  return (
    <div className="kanbas-sidebar list-group" style={{ width: 150 }}>
        {links.map((link, index) => (
        <Link
            key={index}
            to={`/Kanbas/${link.route}`} 
            className={`list-group-item ${pathname.includes(link.name) ? "active" : "inactive"}`}>
            <i className={`${link.icon} ${link.colorClass}`}></i> <br /> {link.name}
        </Link>
    ))}
    </div>
);
}
export default KanbasNavigation;

