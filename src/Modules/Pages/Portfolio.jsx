import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Header / Hero */}
      <header className="hero-section">
        <h1>A Sivaramakrishnan</h1>
        <p>MERN Stack / Node.js Developer | Scalable Backend & Real-Time Applications</p>
        <a href="#contact" className="btn">Contact Me</a>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I specialize in building scalable, high-performance web applications
          using Node.js, MongoDB, and React. My experience includes designing
          REST APIs, real-time applications with WebSockets, and optimizing
          databases for large-scale deployments.
        </p>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {/* Left Card */}
          <div className="card backend-card">
            <div className="skill-category">
              <h3>Backend & Server</h3>
              <ul>
                <li>Node.js, Express.js, REST APIs</li>
                <li>WebSockets (Real-Time Updates)</li>
                <li>JWT / OAuth Authentication</li>
                <li>Async Programming & Event-Driven Patterns</li>
              </ul>
            </div>
          </div>

          {/* Right Card */}
          <div className="card right-card">
            <div className="skill-category">
              <h3>Database</h3>
              <ul>
                <li>MongoDB (Indexing, Aggregation, Cursor Pagination)</li>
                <li>Redis (Caching & Optimization)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React / Next.js (Frontend Integration)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Cloud & Deployment</h3>
              <ul>
                <li>Render, Vercel, Railway (Free-tier Deployment)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:asiva6102000@gmail.com">asiva6102000@gmail.com</a></p>
        <p>Mobile: <a href="tel:+919943490212">+91-9943490212</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/sivaramakrishnan-a-a973a3240" target="_blank" rel="noreferrer">linkedin.com/in/sivaramakrishnan-a-a973a3240</a></p>
      </section>
    </div>
  );
};

export default Portfolio;