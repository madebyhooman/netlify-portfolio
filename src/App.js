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
                  <Card><h3>Algorithm Implementation</h3><p>Your content here</p></Card>
                  <Card><h3>Card 2</h3><p>Your content here</p></Card>
                  <Card><h3>Card 3</h3><p>Your content here</p></Card>
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