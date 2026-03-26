import "./HeroSection.css";
import heroImg from "./college-banner.jpg";


export default function HeroSection() {
  return (
    <div className="hero-sec">
      
      {/* LEFT CONTENT */}
      <div className="content">

        <span className="tag">REDEFINING CAMPUS LIFE</span>

        <h1>
          Discover and <br />
          <span className="hero-txt">Join College Clubs</span>
        </h1>

        <p>
          Elevate your academic journey by connecting with elite
          organizations. Management, engagement, and discovery—
          all curated in one professional space.
        </p>

        <div className="btns">
          <button className="primary-btn">Explore Clubs</button>
          <button className="secondary-btn">Learn More</button>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="banner">
        <img src={heroImg} alt="main" className="main-img" />
      
      </div>

    </div>
  );
}