import TopNavbar from './TopNavbar'
import reggieText from './reggietext.png'
import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'

function Home() {
  return (
    <div className="home">
      <TopNavbar />
      <img src={reggieText} alt="Reggie Text" className="reggie-text-img" />
      <div className="three-box-row">
        <div className="three-box box1">
          <span className="box1-main">Lor👋,<br />ipsum dolor consectetur</span>
          <span className="box1-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur, blandit erat.
          </span>
        </div>
        <div className="three-box box2">Box 2</div>
        <div className="three-box box3">
          <button className="box3-btn">What do i look like?</button>
        </div>
      </div>
      <div className="work-section">
        <div className="work-card">
          <div className="work-card-img-container">
            <img src={image1} alt="Work 1" className="work-card-img" />
          </div>
          <div className="work-card-content">
            <div className="work-card-title">Lorem ipsum</div>
            <div className="work-card-desc">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
          <span className="work-card-year">2022</span>
        </div>
        <div className="work-card">
          <div className="work-card-img-container">
            <img src={image2} alt="Work 2" className="work-card-img" />
          </div>
          <div className="work-card-content">
            <div className="work-card-title">Ipsum</div>
            <div className="work-card-desc">
              Pellentesque euismod nisi eu blandit laboris minim non consectetur elit ut magna...
            </div>
          </div>
          <span className="work-card-year">2023</span>
        </div>
        <div className="work-card">
          <div className="work-card-img-container">
            <img src={image3} alt="Work 3" className="work-card-img" />
          </div>
          <div className="work-card-content">
            <div className="work-card-title">Dolor sait</div>
            <div className="work-card-desc">
              Adipiscing elit, blandit erat euismod Id ad excepteur irure occat consequat nulla irure cillum qui...
            </div>
          </div>
          <span className="work-card-year">2024</span>
        </div>
      </div>
    </div>
  )
}

export default Home