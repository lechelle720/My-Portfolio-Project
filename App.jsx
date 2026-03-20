import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeIcon = isDarkMode ? '☀️' : '🌙';

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      {/* HEADER */}
      <header>
        <h1>Lechelle Panganiban</h1>
        <p>Full-Stack Developer | Creating Amazing Web Experiences</p>
      </header>

      {/* NAVIGATION */}
      <nav>
        <button
          className={activeSection === 'home' ? 'active' : ''}
          onClick={() => showSection('home')}
        >
          🏠 Home
        </button>
        <button
          className={activeSection === 'skills' ? 'active' : ''}
          onClick={() => showSection('skills')}
        >
          💻 Skills
        </button>
        <button
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={() => showSection('projects')}
        >
          📁 Projects
        </button>
        <button
          className={activeSection === 'reflection' ? 'active' : ''}
          onClick={() => showSection('reflection')}
        >
          💭 Reflection
        </button>
        <button id="theme-toggle" onClick={toggleDarkMode}>
          {themeIcon}
        </button>
      </nav>

      <main>
        {/* HOME SECTION */}
        {activeSection === 'home' && (
          <section id="home" className="active">
            <div className="container">
              <h2>About Me</h2>
              <div className="profile-section">
  <img 
    src="c:\Users\SHELLY ANN\Downloads\IMG_20251221_135948.jpg"  
    alt="Lechelle Panganiban - Web Developer"
    className="profile-img"
    loading="lazy"
  />
  <div className="profile-overlay">
    <h2>Lechelle Panganiban</h2>
    <p>Full-Stack Developer</p>
  </div>
</div>
              <p>
                Hi! I'm <b>Lechelle Panganiban</b>, a passionate web development student
                currently mastering modern web technologies. I love turning ideas into
                interactive and beautiful websites!
              </p>

              <h3>🎯 Interests & Goals</h3>
              <ul>
                <li><b>🚀 Biggest accomplishment:</b> Building my first fully responsive portfolio</li>
                <li><b>💙 Area of interest:</b> Full-Stack Web Development & UI/UX Design</li>
                <li><b>🎓 Goal:</b> Become a Full-Stack Developer at a top tech company</li>
              </ul>
            </div>
          </section>
        )}

        {/* SKILLS SECTION */}
        {activeSection === 'skills' && (
          <section id="skills" className="active">
            <div className="container">
              <h2>Skills</h2>
              <div className="skills-grid">
                <div className="skill-card">
                  <h3>🌐 Programming Languages</h3>
                  <ul>
                    <li>HTML</li>
                    <li>CSS (Flexbox, Grid, Animations)</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Python (Basics)</li>
                  </ul>
                </div>

                <div className="skill-card">
                  <h3>⚡ Tools & Frameworks</h3>
                  <ul>
                    <li><strong>React.js</strong> (This portfolio!)</li>
                    <li>Tailwind CSS</li>
                    <li>Git & GitHub</li>
                    <li>VS Code</li>
                    <li>Figma (UI Design)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* PROJECTS SECTION */}
        {activeSection === 'projects' && (
          <section id="projects" className="active">
            <div className="container">
              <h2>Projects</h2>
              <div className="project">
                <h3>📱 Calculator App</h3>
                <p>A fully functional calculator with beautiful animations and responsive design. Handles all basic mathematical operations.</p>
                <p><b>Role:</b> Full-Stack Developer</p>
                <p><b>Technologies:</b> HTML, CSS, Vanilla JavaScript</p>
                <div>
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo →
                  </a>
                  <a href="#" className="project-link github" target="_blank" rel="noopener noreferrer">
                    GitHub →
                  </a>
                </div>
              </div>

              <div className="project">
                <h3>🌐 React.js Portfolio (This Website!)</h3>
                <p>Modern SPA portfolio with dark mode, smooth animations, state management, and mobile-first design. Converted from HTML to React.js!</p>
                <p><b>Role:</b> Full-Stack Developer</p>
                <p><b>Technologies:</b> <strong>React.js</strong>, CSS3, JavaScript</p>
                <div>
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo →
                  </a>
                  <a href="#" className="project-link github" target="_blank" rel="noopener noreferrer">
                    Source Code →
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* REFLECTION SECTION */}
        {activeSection === 'reflection' && (
  <section id="reflection" className="active">
    <div className="container">
      <h2>Reflection</h2>

      <div className="project">
        <h3>a. Technologies Used</h3>
        <p>
          I used <b>HTML, CSS, and JavaScript</b> because they form the foundation of modern web development.
          CSS Grid and Flexbox enabled complex layouts, while JavaScript added interactivity.
        </p>
      </div>

      <div className="project">
        <h3>b. Easiest Parts</h3>
        <p>
          Designing the visual layout and writing content was most enjoyable.
          The card-based design naturally fit the portfolio structure.
        </p>
      </div>

      <div className="project">
        <h3>c. Most Challenging</h3>
        <p>
          Creating smooth responsive navigation and perfecting the dark mode toggle with localStorage persistence
          required the most debugging.
        </p>
      </div>

      <div className="project">
        <h3>d. Future Learning</h3>
        <p>
          React.js for dynamic SPAs, Node.js/Express for backend, MongoDB for databases,
          and Tailwind CSS for rapid styling.
        </p>
      </div>

      <div className="project">
        <h3>e. Dream Projects</h3>
        <p>
          E-commerce platforms, SaaS productivity tools, real-time chat applications,
          and interactive data dashboards.
        </p>
      </div>
    </div>
  </section>
)}
      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Lechelle Panganiban | <strong>Built with React.js</strong></p>
        <div className="social-links">
          <a href="https://github.com/lechellepanganiban" target="_blank" rel="noopener noreferrer">
            📂 GitHub
          </a>
          <a href="https://linkedin.com/in/lechelle-panganiban" target="_blank" rel="noopener noreferrer">
            💼 LinkedIn
          </a>
          <a href="mailto:lechelle@example.com">
            ✉️ Email
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            📄 Resume
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;