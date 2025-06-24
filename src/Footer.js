import { FaGithub, FaLinkedin, FaEnvelope, FaSnapchat } from "react-icons/fa";
import { useState } from "react";
import "./styles/footer.css";

function Footer() {
  const [showCopied, setShowCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText('itzreggie5678@gmail.com');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const handleGithubClick = () => {
    window.open('https://github.com/itzreggie', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/rejoiceekong', '_blank');
  };

  return (
    <footer className="footer">
      {showCopied && <div className="copied-notification">Email Copied to Clipboard!</div>}
      <div className="footer-icons">
        <div className="footer-icon-wrapper" onClick={handleGithubClick}>
          <FaGithub className="footer-icon" />
        </div>
        <div className="footer-icon-wrapper" onClick={handleLinkedinClick}>
          <FaLinkedin className="footer-icon" />
        </div>
        <div className="footer-icon-wrapper" onClick={handleEmailClick}>
          <FaEnvelope className="footer-icon" />
        </div>
        <div className="footer-icon-wrapper">
          <FaSnapchat className="footer-icon" />
        </div>
      </div>
      
      <hr className="footer-divider" />
      
      <div className="footer-copyright">
        ©{new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;