import React from "react";
import { RESORT, HEADERIMG } from "../../assets";
import { SearchBar,Footer } from "../../components";
import "./home.styles.css";
function Home() {
  return (
    <div className="home-page">
      <div className="home-top-body">
        {/* <video className="bg-video" autoPlay loop muted>
          <source src={VIDEO} type="" />
        </video> */}
        <img className="bg-video" src={HEADERIMG} alt="" />
        <div className="home-main-container">
          <h1>LET YOUR</h1>
          <h1 className="imagination">IMAGINATION</h1>
          <h1>WANDER</h1>
        </div>
      </div>

      <SearchBar />

      <div className="overview-section">
        <div className="resort-container">
          <img className="resort-img" src={RESORT} alt="" />
          <div className="contents">
            <h1>It feels good to be lost in the right direction.</h1>
          </div>
        </div>

        <div className="featured">
          <div className="features-seciton">
              <h2>Get 100,000+ Recommendation and Reviews</h2>
              <div className="learn-btn">
                <p>Learn More.</p>
              </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
