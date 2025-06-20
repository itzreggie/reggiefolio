import { FaRegFilePdf } from "react-icons/fa6";

import "./styles/topnavbar.css";

function TopNavbar() {
  return (
    <nav className="top-navbar">
      <div className="nav-left">
        <span className="en-circle">EN</span>
      </div>
      <div className="nav-center">
        <span className="nav-link">Home</span>
        <span className="nav-link">Work</span>
        <span className="nav-link">About</span>
      </div>
      <div className="nav-right">
        <span className="pdf-download">
          <FaRegFilePdf size={24} />
          <span className="download-cv-text">Download CV</span>
        </span>
      </div>
    </nav>
  );
}

export default TopNavbar;