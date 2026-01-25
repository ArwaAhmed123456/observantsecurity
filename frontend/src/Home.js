import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero" style={{ backgroundImage: "url('/1.bg.png')" }}>
        <div className="overlay"></div>
        <div className="content">
          <h1>Observant Security</h1>
          <h2>
            <span className="highlight">Executive</span> Security Solutions
          </h2>
          <p>
            Providing end-to-end smart security solutions to businesses across
            various industries, nationwide.
          </p>
          <div className="buttons">
            <button className="btn primary" onClick={() => navigate("/Services")}>
              ALL SERVICES
            </button>
            <button className="btn secondary" onClick={() => navigate("/about")}>
              ABOUT US
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
