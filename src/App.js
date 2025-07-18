import React, { useRef } from 'react';
import Squares from './components/Squares';
import CardSwap, { Card } from './components/CardSwap';
import PixelTransition from './components/PixelTransition';
import './index.css';

function App() {
  const section2Ref = useRef(null);

  const handleRightColumnClick = () => {
    section2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className="main-content">
        <div className="squares-wrapper">
          <Squares />
        </div>
        <div className="content">
          <div className="two-column">
            <div className="left-column">
              <header>
                <h3>Hi, I'm </h3>
                <h1>Maydelene Chavez</h1>
                <p>Web Developer | Designer | Learner</p>
              </header>
            </div>

            <div className="right-column" onClick={handleRightColumnClick}>
              <div style={{ height: '550px', position: 'relative' }}>
                <CardSwap
                  cardDistance={20}
                  verticalDistance={120}
                  delay={4000}
                  pauseOnHover={false}
                >
                  <Card>
                    <div className="card-tab">
                      <span className="tab-icon">🔫</span>
                      <span className="tab-title">Smart Surveillance System</span>
                    </div>
                    <div className="card-body">
                      <h3>Python, OpenCV, TensorFlow, YOLO</h3>
                      <p>A smart surveillance system that uses AI for real-time monitoring and alerts.</p>
                    </div>
                  </Card>
                  <Card>
                    <div className="card-tab">
                      <span className="tab-icon">⚙️</span>
                      <span className="tab-title">Algorithm Implementation</span>
                    </div>
                    <div className="card-body">
                      <h3>C++</h3>
                      <p>A program automatically calculates and generates a Gantt chart with detailed computations presented in a table.</p>
                    </div>
                  </Card>
                  <Card>
                    <div className="card-tab">
                      <span className="tab-icon">🎞️</span>
                      <span className="tab-title">Online Photo Gallery</span>
                    </div>
                    <div className="card-body">
                      <h3>HTML, CSS, JavaScript</h3>
                      <p>Build a responsive photo gallery showcasing behind the scenes content.</p>
                    </div>
                  </Card>
                  <Card>
                    <div className="card-tab">
                      <span className="tab-icon">🎟️</span>
                      <span className="tab-title">Ordering System</span>
                    </div>
                    <div className="card-body">
                      <h3>HTML, CSS, PHP, JavaScript, SQL, Json</h3>
                      <p>Develop a comprehensive ordering system with user authentication and data management.</p>
                    </div>
                  </Card>
                  <Card>
                    <div className="card-tab">
                      <span className="tab-icon">🗑️</span>
                      <span className="tab-title">Smart Trash Bin</span>
                    </div>
                    <div className="card-body">
                      <h3>Arduino, C++</h3>
                      <p>Implement a smart trash bin that uses sensors for efficient waste management.</p>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Section 2 — Updated projects-section */}
      <div className="projects-section" ref={section2Ref}>
        <div className="projects-header">
          <div className="marquee-content">
            <span className='marquee-text'>✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects</span>
            <span className='marquee-text'>✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦</span>
          </div>
        </div>
        <div className="projects-grid">

          <div className="project-card" onClick={() => window.open('https://github.com/madebyhooman/smart-trashbin', '_blank')}>
            <div className="card-tab">
              <span className="tab-icon">🗑️</span>
              <span className="tab-title">Smart Trashbin</span>
            </div>
            <div className="card-body">
              <PixelTransition
                firstContent={
                  <img
                    src="/images/smart-bin.png"
                    alt="Smart Bin"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#1F1A28",
                      padding: "1rem",
                      textAlign: "center",
                    }}
                  >
                    <p style={{ fontWeight: 700, fontSize: "1rem", color: "#ffffff", marginBottom: "0.5rem" }}>
                      Arduino-based smart trash bin that uses sensors to detect waste levels and optimize collection.
                    </p>
                    <p style={{ fontStyle: "italic", fontSize: "0.9rem", color: "#ccc" }}>
                      Technologies: Arduino, Ultrasonic Sensor, C++
                    </p>
                  </div>
                }
              />
            </div>
          </div>

          <div className="project-card" onClick={() => window.open('https://github.com/madebyhooman/Matyag', '_blank')}>
            <div className="card-tab">
              <span className="tab-icon">�</span>
              <span className="tab-title">Smart Surveillance System</span>
            </div>
            <div className="card-body">
              <PixelTransition
                firstContent={
                  <img
                    src='/images/matyag.png' alt='Smart Bin'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#1F1A28"
                    }}
                  >
                    <p style={{ textAlign:"center", fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>Click to view repository!</p>
                  </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>
          </div>

          <div className="project-card" onClick={() => window.open('https://github.com/madebyhooman/MLFQ', '_blank')}>
            <div className="card-tab">
              <span className="tab-icon">⚙️</span>
              <span className="tab-title">Algorithm Implementation</span>
            </div>
            <div className="card-body">
              <PixelTransition
                firstContent={
                  <img
                    src='/images/mlfq.png' alt='Multi Level Feedback Queue'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#1F1A28"
                    }}
                  >
                    <p style={{ textAlign:"center", fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>Click to view repository!</p>
                  </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>
          </div>

          <div className="project-card" onClick={() => window.open('https://github.com/madebyhooman/proj-rizal', '_blank')}>
            <div className="card-tab">
              <span className="tab-icon">🎞️</span>
              <span className="tab-title">Online Photo Gallery</span>
            </div>
            <div className="card-body">
              <PixelTransition
                firstContent={
                  <img
                    src='/images/online-gallery.png' alt='Smart Bin'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#1F1A28"
                    }}
                  >
                    <p style={{ textAlign:"center", fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>Click to view repository!</p>
                  </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>
          </div>

          <div className="project-card" onClick={() => window.open('https://github.com/madebyhooman/ordering-system', '_blank')}>
            <div className="card-tab">
              <span className="tab-icon">🎟️</span>
              <span className="tab-title">Ordering System</span>
            </div>
            <div className="card-body">
              <PixelTransition
                firstContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#2A2A2A"
                    }}
                  >
                    <span style={{ fontSize: "4rem" }}>🎟️</span>
                  </div>
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#1F1A28"
                    }}
                  >
                    <p style={{ textAlign:"center", fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>Click to view repository!</p>
                  </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>
          </div>
        </div>


      </div>

      {/* Footer */}
      <footer className="site-footer">
        <p>&copy; 2025 Maydelene Chavez. Built with React.</p>
        <div className="footer-links">
          <a href="https://github.com/madebyhooman" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/maydelenechavez" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:maydelene.p.chavez@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;