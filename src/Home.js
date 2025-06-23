import TopNavbar from './TopNavbar'
import reggieText from './reggietext.png'
import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'
import { useState, useEffect, useRef } from 'react'
import pythonLogo from './assets/techstacks/python-language.png';
import javascriptLogo from './assets/techstacks/javascript.png';
import cssLogo from './assets/techstacks/css.png';
import htmlLogo from './assets/techstacks/html.png';
import scalaLogo from './assets/techstacks/scala.png';
import reactLogo from './assets/techstacks/react.png';
import javaLogo from './assets/techstacks/java.png';
import flutterLogo from './assets/techstacks/flutter.png';
import sqlLogo from './assets/techstacks/sql.png';
import dartlogo from './assets/techstacks/dart-programming.png';
import sasslogo from './assets/techstacks/sass.png';
import nodejslogo from './assets/techstacks/nodejs.png';
import bootstraplogo from './assets/techstacks/bootstrap-framework.png';
import mongodblogo from './assets/techstacks/mongo-db.png';
import angularlogo from './assets/techstacks/angularjs.png';
import gitlogo from './assets/techstacks/git.png';
import dockerlogo from './assets/techstacks/docker.png';


function Home() {
  const [activeTab, setActiveTab] = useState('flagships');
  const [activeStackTab, setActiveStackTab] = useState('all');
  const flagshipsCount = 6;
  const incubatorCount = 100000;
  

  const techStacks = [
    { name: "HTML", image: htmlLogo, category: "frontend" },
    { name: "CSS", image: cssLogo, category: "frontend" },
    { name: "JavaScript", image: javascriptLogo, category: "frontend" },
    { name: "React", image: reactLogo, category: "frontend" },
    { name: "Angular", image: angularlogo, category: "frontend" },
    { name: "sass", image: sasslogo, category: "frontend" },
    { name: "Bootstrap", image: bootstraplogo, category: "frontend" },
    { name: "Java", image: javaLogo, category: "backend" },
    { name: "Scala", image: scalaLogo, category: "backend" },
    { name: "Python", image: pythonLogo, category: "backend" },
    { name: "nodejs", image: nodejslogo, category: "server" },
    { name: "postgressql", image: sqlLogo, category: "database" },
    { name: "MongoDB", image: mongodblogo, category: "database" },
    { name: "dart", image: dartlogo, category: "mobile" },
    { name: "Flutter", image: flutterLogo, category: "mobile" },
    { name: "docker", image: dockerlogo, category: "devops" },
    { name: "git", image: gitlogo, category: "devops" },
  ];

  const allStacksCount = techStacks.length;
  const frontendCount = techStacks.filter(stack => stack.category === 'frontend').length;
  const backendCount = techStacks.filter(stack => stack.category === 'backend').length;
  const databaseCount = techStacks.filter(stack => stack.category === 'database').length;
  const serverCount = techStacks.filter(stack => stack.category === 'server').length;
  const devopsCount = techStacks.filter(stack => stack.category === 'devops').length;
  const mobileCount = techStacks.filter(stack => stack.category === 'mobile').length;
  
  const flagshipsBadgeRef = useRef(null);
  const incubatorBadgeRef = useRef(null);
  
  // Refs for stack badges
  const allStacksBadgeRef = useRef(null);
  const frontendBadgeRef = useRef(null);
  const backendBadgeRef = useRef(null);
  const databaseBadgeRef = useRef(null);
  const serverBadgeRef = useRef(null);
  const devopsBadgeRef = useRef(null);
  const mobileBadgeRef = useRef(null);
  
  useEffect(() => {
    // Update data-digits attribute based on content length
    if (flagshipsBadgeRef.current) {
      const digits = flagshipsBadgeRef.current.textContent.length;
      flagshipsBadgeRef.current.setAttribute('data-digits', digits);
    }
    
    if (incubatorBadgeRef.current) {
      const digits = incubatorBadgeRef.current.textContent.length;
      incubatorBadgeRef.current.setAttribute('data-digits', digits);
    }
    
    // Update data-digits for stack badges
    [
      { ref: allStacksBadgeRef, count: allStacksCount },
      { ref: frontendBadgeRef, count: frontendCount },
      { ref: backendBadgeRef, count: backendCount },
      { ref: databaseBadgeRef, count: databaseCount },
      { ref: serverBadgeRef, count: serverCount },
      { ref: devopsBadgeRef, count: devopsCount },
      { ref: mobileBadgeRef, count: mobileCount }
    ].forEach(item => {
      if (item.ref.current) {
        const digits = item.ref.current.textContent.length;
        item.ref.current.setAttribute('data-digits', digits);
      }
    });
  }, [flagshipsCount, incubatorCount, allStacksCount, frontendCount, backendCount, databaseCount, serverCount, devopsCount, mobileCount]);

  const workCards = [
    {
      image: image1,
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur.",
      year: "2022"
    },
    {
      image: image2,
      title: "Ipsum",
      desc: "Pellentesque euismod nisi eu blandit laboris minim non consectetur elit ut magna...",
      year: "2023"
    },
    {
      image: image3,
      title: "Dolor sait",
      desc: "Adipiscing elit, blandit erat euismod Id ad excepteur irure occat consequat nulla irure cillum qui...",
      year: "2024"
    }
  ];

  // Filter the tech stacks based on active tab
  const filteredTechStacks = activeStackTab === 'all' ? 
    techStacks : 
    techStacks.filter(stack => stack.category === activeStackTab);

  return (
    <div className="home">
      <TopNavbar />
      <img src={reggieText} alt="Reggie Text" className="reggie-text-img" />
      <div className="three-box-row">
        <div className="three-box box1">
          <span className="box1-main">Lor👋🏾,<br />ipsum dolor consectetur</span>
          <span className="box1-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur, blandit erat.
          </span>
        </div>
        <div className="three-box box2">Box 2</div>
        <div className="three-box box3">
          <button className="box3-btn">What do i look like?</button>
        </div>
      </div>
      
      <div className="work-header">
        <div className="work-tabs">
          <div 
            className={`work-tab ${activeTab === 'flagships' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('flagships')}
          >
            Flagships <span className="tab-badge" ref={flagshipsBadgeRef}>{flagshipsCount}</span>
          </div>
          <div 
            className={`work-tab ${activeTab === 'incubator' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('incubator')}
          >
            Incubator <span className="tab-badge" ref={incubatorBadgeRef}>{incubatorCount}</span>
          </div>
          <div className={`work-selector ${activeTab === 'incubator' ? 'incubator' : ''}`}></div>
        </div>
      </div>
      
      {[...Array(3)].map((_, rowIndex) => (
        <div key={rowIndex} className="work-section">
          {workCards.map((card, cardIndex) => (
            <div key={`${rowIndex}-${cardIndex}`} className="work-card">
              <div className="work-card-img-container">
                <img src={card.image} alt={`Work ${cardIndex + 1}`} className="work-card-img" />
              </div>
              <div className="work-card-content">
                <div className="work-card-title">{card.title}</div>
                <div className="work-card-desc">
                  {card.desc}
                </div>
              </div>
              <span className="work-card-year">{card.year}</span>
            </div>
          ))}
        </div>
      ))}

      <div className="stack-section">
        <div className="stack-header">
          <div className="stack-tabs">
            <div 
              className={`stack-tab ${activeStackTab === 'all' ? 'active' : 'inactive'}`}
              onClick={() => setActiveStackTab('all')}
            >
              All <span className="tab-badge" ref={allStacksBadgeRef}>{allStacksCount}</span>
            </div>
            <div 
              className={`stack-tab ${activeStackTab === 'frontend' ? 'active' : 'inactive'}`}
              onClick={() => setActiveStackTab('frontend')}
            >
              Frontend <span className="tab-badge" ref={frontendBadgeRef}>{frontendCount}</span>
            </div>
            <div 
              className={`stack-tab ${activeStackTab === 'backend' ? 'active' : 'inactive'}`}
              onClick={() => setActiveStackTab('backend')}
            >
              Backend <span className="tab-badge" ref={backendBadgeRef}>{backendCount}</span>
            </div>
            <div 
              className={`stack-tab ${activeStackTab === 'database' ? 'active' : 'inactive'}`}
              onClick={() => setActiveStackTab('database')}
            >
              Database <span className="tab-badge" ref={databaseBadgeRef}>{databaseCount}</span>
            </div>
            <div 
              className={`stack-tab ${activeStackTab === 'server' ? 'active' : 'inactive'}`}
              onClick={() => setActiveStackTab('server')}
            >
              Server <span className="tab-badge" ref={serverBadgeRef}>{serverCount}</span>
            </div>
            <div 
              className={`stack-tab ${activeStackTab === 'devops' ? 'active' : 'inactive'}`}
              onClick={() => setActiveStackTab('devops')}
            >
              DevOps <span className="tab-badge" ref={devopsBadgeRef}>{devopsCount}</span>
            </div>
            <div 
              className={`stack-tab ${activeStackTab === 'mobile' ? 'active' : 'inactive'}`}
              onClick={() => setActiveStackTab('mobile')}
            >
              Mobile <span className="tab-badge" ref={mobileBadgeRef}>{mobileCount}</span>
            </div>
            <div className={`stack-selector ${getStackSelectorClass()}`}></div>
          </div>
        </div>

        <div className="stack-grid">
          {filteredTechStacks.map((stack, index) => (
            <div key={index} className="stack-item">
              <img src={stack.image} alt={stack.name} className="stack-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  
  function getStackSelectorClass() {
    switch(activeStackTab) {
      case 'all': return '';
      case 'frontend': return 'frontend';
      case 'backend': return 'backend';
      case 'database': return 'database';
      case 'server': return 'server';
      case 'devops': return 'devops';
      case 'mobile': return 'mobile';
      default: return '';
    }
  }
}

export default Home