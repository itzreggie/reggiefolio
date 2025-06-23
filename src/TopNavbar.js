import { FaRegFilePdf } from "react-icons/fa6";
import { useState, useEffect } from "react";

import "./styles/topnavbar.css";

function TopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (sectionId === 'work') {
      const workHeader = document.querySelector('.work-header');
      if (workHeader) {
        const navHeight = 80;
        const elementPosition = workHeader.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (sectionId === 'stack') {
      const stackSection = document.querySelector('.stack-section');
      if (stackSection) {
        const navHeight = 80;
        const elementPosition = stackSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="top-navbar">
      <div className="nav-left">
        <span className="en-circle">EN</span>
      </div>
      <div className={`nav-center ${isScrolled ? 'scrolled' : ''}`}>
        <span 
          className={`nav-link ${hoveredLink && hoveredLink !== 'home' ? 'dimmed' : ''}`}
          onClick={() => scrollToSection('home')}
          onMouseEnter={() => setHoveredLink('home')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Home
        </span>
        <span 
          className={`nav-link ${hoveredLink && hoveredLink !== 'work' ? 'dimmed' : ''}`}
          onClick={() => scrollToSection('work')}
          onMouseEnter={() => setHoveredLink('work')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Work
        </span>
        <span 
          className={`nav-link ${hoveredLink && hoveredLink !== 'about' ? 'dimmed' : ''}`}
          onMouseEnter={() => setHoveredLink('about')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          About
        </span>
         <span 
          className={`nav-link ${hoveredLink && hoveredLink !== 'stack' ? 'dimmed' : ''}`}
          onClick={() => scrollToSection('stack')}
          onMouseEnter={() => setHoveredLink('stack')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Stack
        </span>
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