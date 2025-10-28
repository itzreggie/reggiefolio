import TopNavbar from './TopNavbar'
import reggieText from './assets/reggietext.png'
import noimage from './assets/workimages/noimage.png'
import noimagegif from './assets/workgifs/noimage.gif'
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
import typescriptlogo from './assets/techstacks/typescript.png';
import csharplogo from './assets/techstacks/c-sharp.png';
import dockerlogo from './assets/techstacks/docker.png';
import { githubService } from './services/githubService';
import { flagshipService } from './services/flagshipService';
import { manualLanguageService } from './services/languageService';
import myImage from './assets/my-image.jpg';


function Home() {
  const [activeTab, setActiveTab] = useState('flagships');
  const [activeStackTab, setActiveStackTab] = useState('all');
  const [githubData, setGithubData] = useState({
    user: null,
    repos: [],
    loading: true,
    error: null
  });
  const [flagshipRepos, setFlagshipRepos] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [manualLanguages, setManualLanguages] = useState({});
  
  const flagshipsCount = flagshipRepos.length;
  const incubatorCount = githubData.repos.filter(repo => !flagshipRepos.includes(repo.name)).length;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setGithubData(prev => ({ ...prev, loading: true, error: null }));
        
        const [userData, reposData, flagshipNames, languageMap] = await Promise.all([
          githubService.getUserData(),
          githubService.getRepositories(),
          flagshipService.getFlagshipRepos(),
          manualLanguageService.getManualLanguages()
        ]);
        
        setGithubData({
          user: userData,
          repos: reposData,
          loading: false,
          error: null
        });
        
        setFlagshipRepos(flagshipNames);
        setManualLanguages(languageMap);
        
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setGithubData(prev => ({
          ...prev,
          loading: false,
          error: error.message
        }));
      }
    };

    fetchData();
  }, []);

  const techStacks = [
    { name: "HTML", image: htmlLogo, category: "frontend" },
    { name: "CSS", image: cssLogo, category: "frontend" },
    { name: "JavaScript", image: javascriptLogo, category: "frontend" },
    { name: "React JS", image: reactLogo, category: "frontend" },
    { name: "Angular", image: angularlogo, category: "frontend" },
    { name: "Sass", image: sasslogo, category: "frontend" },
    { name: "Bootstrap", image: bootstraplogo, category: "frontend" },
    { name: "Typescript", image: typescriptlogo, category: "frontend" },
    { name: "Java", image: javaLogo, category: "backend" },
    { name: "Scala", image: scalaLogo, category: "backend" },
    { name: "Python", image: pythonLogo, category: "backend" },
    { name: "C#", image: csharplogo, category: "backend" },
    { name: "Nodejs", image: nodejslogo, category: "server" },
    { name: "PostgreSQL", image: sqlLogo, category: "database" },
    { name: "MongoDB", image: mongodblogo, category: "database" },
    { name: "Dart", image: dartlogo, category: "mobile" },
    { name: "Flutter", image: flutterLogo, category: "mobile" },
    { name: "Docker", image: dockerlogo, category: "devops" },
    { name: "Git", image: gitlogo, category: "devops" },
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
  
  const allStacksBadgeRef = useRef(null);
  const frontendBadgeRef = useRef(null);
  const backendBadgeRef = useRef(null);
  const databaseBadgeRef = useRef(null);
  const serverBadgeRef = useRef(null);
  const devopsBadgeRef = useRef(null);
  const mobileBadgeRef = useRef(null);
  
  useEffect(() => {
    if (flagshipsBadgeRef.current) {
      const digits = flagshipsBadgeRef.current.textContent.length;
      flagshipsBadgeRef.current.setAttribute('data-digits', digits);
    }
    
    if (incubatorBadgeRef.current) {
      const digits = incubatorBadgeRef.current.textContent.length;
      incubatorBadgeRef.current.setAttribute('data-digits', digits);
    }
    
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

  const createFlagshipCards = () => {
    return githubData.repos
      .filter(repo => flagshipRepos.includes(repo.name))
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .map(repo => {
        const repoImageName = repo.name.toLowerCase(); //here i made sure that the image name is in lowercase
        let repoImage = noimage;
        let repoGif = noimagegif;
        
        try {
          repoImage = require(`./assets/workimages/${repoImageName}.png`);
        } catch (error) {
          repoImage = noimage;
        }
        
        try {
          repoGif = require(`./assets/workgifs/${repoImageName}.gif`);
        } catch (error) {
          repoGif = noimagegif;
        }
        
        const language = manualLanguages[repo.name] || repo.language;
        
        return {
          image: repoImage,
          gif: repoGif,
          title: repo.name === 'ForwardApp' 
            ? repo.name.replace(/([A-Z])/g, ' $1').replace(/^[\s_-]+|[\s_-]+$/g, '').replace(/\s+/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
            : repo.name.replace(/[_-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          desc: repo.description || "There are no descriptions for this repository.",
          year: new Date(repo.created_at).getFullYear().toString(),
          language: language,
          stars: repo.stargazers_count,
          url: repo.html_url
        };
      });
  };

  const createIncubatorCards = () => {
    return githubData.repos
      .filter(repo => !flagshipRepos.includes(repo.name))
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .map(repo => {
        const repoImageName = repo.name.toLowerCase();
        let repoImage = noimage;
        let repoGif = noimagegif;
        
        try {
          repoImage = require(`./assets/workimages/${repoImageName}.png`);
        } catch (error) {
          repoImage = noimage;
        }
        
        try {
          repoGif = require(`./assets/workgifs/${repoImageName}.gif`);
        } catch (error) {
          repoGif = noimagegif;
        }
        
        const language = manualLanguages[repo.name] || repo.language;
        
        return {
          image: repoImage,
          gif: repoGif,
          title: repo.name.replace(/[_-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          desc: repo.description || "There are no descriptions for this repository.",
          year: new Date(repo.created_at).getFullYear().toString(),
          language: language,
          stars: repo.stargazers_count,
          url: repo.html_url
        };
      });
  };

  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const filteredTechStacks = activeStackTab === 'all' ? 
    techStacks : 
    techStacks.filter(stack => stack.category === activeStackTab);

  const displayCards = activeTab === 'flagships' ? createFlagshipCards() : createIncubatorCards();
  const cardsPerRow = 3;
  const numberOfRows = Math.ceil(displayCards.length / cardsPerRow);

  const getLanguageIcon = (language) => {
    if (!language) return null;
    
    const langLower = language.toLowerCase();
    
    switch (langLower) {
      case 'javascript': return javascriptLogo;
      case 'python': return pythonLogo;
      case 'java': return javaLogo;
      case 'css': return cssLogo;
      case 'scss': return sasslogo;
      case 'html': return htmlLogo;
      case 'scala': return scalaLogo;
      case 'dart': return dartlogo;
      case 'typescript': return typescriptlogo;
      case 'c#': return csharplogo;
      default: return null;
    }
  };

  return (
    <div className="home">
      <TopNavbar />
      <img src={reggieText} alt="Reggie Text" className="reggie-text-img" />
      <div className="three-box-row">
        <div className="three-box box1">
          <span className="box1-main">Yo👋🏾,<br />I'm Ekong.</span>
          <span className="box1-sub">
            But you can call me <b>Reggie</b>. I'm a software developer that is happy when i push errors on GitHub and sometimes deploy them to production.
          </span>
        </div>
        <div className="three-box box2">
          <img src={myImage} alt="Profile" className="box2-img" />
        </div>
        { /* sittle idle from mixamo (https://www.mixamo.com/#/?page=1&query=sitting+idle) */}
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
      
      {Array.from({ length: numberOfRows }, (_, rowIndex) => (
        <div key={rowIndex} className="work-section">
          {displayCards
            .slice(rowIndex * cardsPerRow, (rowIndex + 1) * cardsPerRow)
            .map((card, cardIndex) => (
              <div key={`${rowIndex}-${cardIndex}`} className="work-card"
                onMouseEnter={() => setHoveredCard(`${rowIndex}-${cardIndex}`)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(card.url)}
              >
                <div className="work-card-img-container">
                  <img 
                    src={hoveredCard === `${rowIndex}-${cardIndex}` ? card.gif : card.image}
                    alt={`Work ${cardIndex + 1}`} 
                    className="work-card-img" 
                  />
                </div>
                <div className="work-card-content">
                  <div className="work-card-title">{card.title}</div>
                  <div className="work-card-desc">
                    {card.desc}
                  </div>
                </div>
                {card.language && getLanguageIcon(card.language) && (
                  <div className="work-card-language">
                    <img 
                      src={getLanguageIcon(card.language)} 
                      alt={card.language} 
                      className="work-card-language-img" 
                    />
                  </div>
                )}
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
              <div className="stack-tooltip">{stack.name}</div>
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