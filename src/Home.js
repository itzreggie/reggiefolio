import TopNavbar from './TopNavbar'
import reggieText from './reggietext.png'
import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'
import { useState, useEffect, useRef } from 'react'

function Home() {
  const [activeTab, setActiveTab] = useState('finished');
  const finishedCount = 6;
  const pendingCount = 100000;
  
  const finishedBadgeRef = useRef(null);
  const pendingBadgeRef = useRef(null);
  
  useEffect(() => {
    // Update data-digits attribute based on content length
    if (finishedBadgeRef.current) {
      const digits = finishedBadgeRef.current.textContent.length;
      finishedBadgeRef.current.setAttribute('data-digits', digits);
    }
    
    if (pendingBadgeRef.current) {
      const digits = pendingBadgeRef.current.textContent.length;
      pendingBadgeRef.current.setAttribute('data-digits', digits);
    }
  }, [finishedCount, pendingCount]);

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
            className={`work-tab ${activeTab === 'finished' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('finished')}
          >
            Finished <span className="tab-badge" ref={finishedBadgeRef}>{finishedCount}</span>
          </div>
          <div 
            className={`work-tab ${activeTab === 'pending' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('pending')}
          >
            Pending <span className="tab-badge" ref={pendingBadgeRef}>{pendingCount}</span>
          </div>
          <div className={`work-selector ${activeTab === 'pending' ? 'pending' : ''}`}></div>
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
    </div>
  )
}

export default Home