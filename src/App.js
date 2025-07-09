import React from 'react';
import Squares from './components/Squares';
import CardSwap, { Card } from './components/CardSwap';
import './index.css';

function App() {
  return (
    <div className="App">
      {/* Main content with Squares */}
      <div className="main-content">
        <Squares />
        <div className="content">
          <div className="two-column">
            <div className="left-column">
              <header>
                <h1>Hi, I'm Maydelene Chavez</h1>
                <p>Web Developer | Designer | Learner</p>
              </header>
            </div>

            <div className="right-column">
              <div style={{ height: '600px', position: 'relative' }}>
                <CardSwap
                  cardDistance={30}
                  verticalDistance={120}
                  delay={4000}
                  pauseOnHover={true}
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

      {/* Footer */}
      <footer className="site-footer">
        <p>&copy; 2025 Maydelene Chavez. Built with React.</p>
        <div className="footer-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:maydelene@example.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;