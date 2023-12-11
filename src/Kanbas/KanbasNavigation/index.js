import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsFillInboxFill } from "react-icons/bs"
import { AiOutlineClockCircle } from "react-icons/ai"
import { PiDesktopFill } from "react-icons/pi"
import { FaSignOutAlt } from "react-icons/fa"
import { BsQuestionCircle } from "react-icons/bs"
import "./index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <BsFillInboxFill className="wd-icon" />,
    History: <AiOutlineClockCircle className="wd-icon" />,
    Studio: <PiDesktopFill className="wd-icon" />,
    Commons: <FaSignOutAlt className="wd-icon" />,
    Help: <BsQuestionCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();
  const getIconStyle = (link) => {
    if (link === "Account" && pathname.includes("Account")) return "wd-icon wd-icon-account-clicked";
    if (link === "Account") return "wd-icon wd-icon-account";
    if (pathname.includes(link)) return "wd-icon wd-icon-clicked";
    return "wd-icon wd-icon-other";
  };

  const getTextStyle = (link) => {
    if (link === "Account" && pathname.includes("Account")) return "wd-text-account-clicked";
    if (link === "Account") return "wd-text-account";
    if (pathname.includes(link)) return "wd-text-clicked";
    return "wd-text-other";
  };

  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 120 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          <span className={getIconStyle(link)}>
            {linkToIconMap[link]}
          </span>
          <br/>
          <span className={getTextStyle(link)}>
            {link}
          </span>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
