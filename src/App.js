import React, { useRef } from 'react';
import Squares from './components/Squares';
import CardSwap, { Card } from './components/CardSwap';
import FuzzyText from './components/FuzzyText';
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
                <h1>Hi, I'm Maydelene Chavez</h1>
                <p>Web Developer | Designer | Learner</p>
              </header>
            </div>

            <div className="right-column" onClick={handleRightColumnClick}>
              <div style={{ height: '600px', position: 'relative' }}>
                <CardSwap
                  cardDistance={30}
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

      {/* Under Development Section */}
      <div className="under-development-section" ref={section2Ref}>
        <FuzzyText
          fontSize="clamp(2rem, 6vw, 4rem)"
          fontWeight={900}
          fontFamily="'Courier New', monospace"
          color="#333"
          enableHover={true}
          baseIntensity={0.1}
          hoverIntensity={0.2}
        >
          My portfolio is still a work in progress!
        </FuzzyText>
      </div>

      {/* Section 2 — Updated projects-section */}
      <div className="projects-section" style={{ display: 'none' }}>
        <h2 className="projects-title">More Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="card-tab">
              <span className="tab-icon">🎨</span>
              <span className="tab-title">Portfolio Website</span>
            </div>
            <div className="card-body">
              <img src="/path/to/image.png" alt="Landscape" className="card-image" />
              <h3>React, GSAP</h3>
              <p>A portfolio website with animated cards and interactive elements.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="card-tab">
              <span className="tab-icon">📊</span>
              <span className="tab-title">Data Dashboard</span>
            </div>
            <div className="card-body">
              <h3>React, Chart.js</h3>
              <p>Dynamic dashboard displaying live data visualizations and reports.</p>
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