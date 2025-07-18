import React, { useRef } from 'react';
import Squares from './components/Squares';
import CardSwap, { Card } from './components/CardSwap';
import PixelTransition from './components/PixelTransition';
import AnimatedContent from './components/AnimatedContent'
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
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={true}
                duration={1}
                ease="elastic.out(1.03)"
                initialOpacity={0.2}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={0.3}
              >
              <a
                href="/assets/cv.pdf"
                className="cv-download"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
              </AnimatedContent>
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
                      <h3>Python, Dart</h3>
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
                      <h3>HTML, CSS, PHP, JavaScript, SQL</h3>
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

    <div className="tech-stack-section">
      <h2 className="tech-stack-title">Tech Stack</h2>

      <div className="tech-stack-grid">
        {/* Frontend */}
        <div className="tech-card">
          <h3>Frontend</h3>
          <div className="tech-stack-logos">
            <img src="/assets/html.svg" alt="HTML" title="HTML" />
            <img src="/assets/css.svg" alt="CSS" title="CSS" />
            <img src="/assets/bootstrap.svg" alt="Bootstrap" title="Bootstrap" />
            <img src="/assets/tailwind.svg" alt="Tailwind CSS" title="Tailwind CSS" />
            <img src="/assets/javascript.svg" alt="JavaScript" title="JavaScript" />
            <img src="/assets/react.svg" alt="React" title="React" />
          </div>
        </div>

        {/* Backend */}
        <div className="tech-card">
          <h3>Backend</h3>
          <div className="tech-stack-logos">
            <img src="/assets/php.svg" alt="PHP" title="PHP" />
            <img src="/assets/nodejs.svg" alt="Node.js" title="Node.js" />
            <img src="/assets/mysql.svg" alt="MySQL" title="MySQL" />
            <img src="/assets/firebase.svg" alt="Firebase" title="Firebase" />
          </div>
        </div>

        {/* Programming Languages */}
        <div className="tech-card">
          <h3>Programming Languages</h3>
          <div className="tech-stack-logos">
            <img src="/assets/python.svg" alt="Python" title="Python" />
            <img src="/assets/cpp.svg" alt="C++" title="C++" />
            <img src="/assets/java.svg" alt="Java" title="Java" />
          </div>
        </div>

        {/* Tools */}
        <div className="tech-card">
          <h3>Tools</h3>
          <div className="tech-stack-logos">
            <img src="/assets/flutter.svg" alt="Flutter" title="Flutter" />
            <img src="/assets/github.svg" alt="GitHub" title="GitHub" />
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
                    textAlign: "center"
                  }}
                >
                  <p style={{ 
                    fontWeight: 700, 
                    fontSize: "1rem", 
                    color: "#ffffff", 
                    maxWidth: "90%" 
                    }}>
                    Arduino-based smart trash bin that uses sensors to detect waste levels and optimize collection.
                  </p>
                  <p style={{ 
                    fontStyle: "italic", 
                    fontSize: "0.9rem", 
                    color: "#ccc" 
                    }}>
                    <strong>Technologies:</strong> Arduino, Ultrasonic Sensor, C++
                  </p>
                  <p style={{ 
                    fontStyle: "italic", 
                    fontSize: "0.9rem", 
                    color: "#ccc", 
                    }}>
                    <strong>Language:</strong> Python, Dart</p>
                </div>
              }
              gridSize={12}
              pixelColor='#ffffff'
              animationStepDuration={0.4}
              className="custom-pixel-card"
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#1F1A28",
                    textAlign: "center"
                  }}
                >
                  <p style={{ 
                    fontWeight: 700, 
                    fontSize: "1rem", 
                    color: "#ffffff", 
                    maxWidth: "90%" 
                    }}>
                    A smart surveillance system that uses AI for real-time monitoring and alerts.
                  </p>
                  <p style={{ 
                    fontStyle: "italic", 
                    fontSize: "0.9rem", 
                    color: "#ccc" 
                    }}>
                    <strong>Technologies:</strong> Python, Dart
                  </p>
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#1F1A28",
                    textAlign: "center"
                  }}
                >
                  <p style={{ 
                    fontWeight: 700, 
                    fontSize: "1rem", 
                    color: "#ffffff", 
                    maxWidth: "90%" 
                    }}>
                    A program that automatically calculates and generates a Gantt chart with detailed computations presented in a table.
                  </p>
                  <p style={{ 
                    fontStyle: "italic", 
                    fontSize: "0.9rem", 
                    color: "#ccc" 
                    }}>
                    <strong>Technologies:</strong> C++
                  </p>
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#1F1A28",
                    textAlign: "center"
                  }}
                >
                  <p style={{ 
                    fontWeight: 700, 
                    fontSize: "1rem", 
                    color: "#ffffff", 
                    maxWidth: "90%" 
                    }}>
                    Build a responsive photo gallery showcasing behind the scenes content.
                  </p>
                  <p style={{ 
                    fontStyle: "italic", 
                    fontSize: "0.9rem", 
                    color: "#ccc" 
                    }}>
                    <strong>Language:</strong> HTML, CSS, JavaScript
                  </p>
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#1F1A28",
                    textAlign: "center"
                  }}
                >
                  <p style={{ 
                    fontWeight: 700, 
                    fontSize: "1rem", 
                    color: "#ffffff", 
                    maxWidth: "90%" 
                    }}>
                    Develop a comprehensive ordering system with user authentication and data management.
                  </p>
                  <p style={{ 
                    fontStyle: "italic", 
                    fontSize: "0.9rem", 
                    color: "#ccc" 
                    }}>
                    <strong>Language:</strong> HTML, CSS, PHP, JavaScript, SQL
                  </p>
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