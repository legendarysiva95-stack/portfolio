import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>A Sivaramakrishnan</h1>
        <p>MERN Stack / Node.js Developer | Scalable Backend & Real-Time Applications</p>
        <a href="#contact" className="btn">Contact Me</a>
      </header>

      {/* About Section */}
      <section className="about-section section">
        <h2>About Me</h2>
        <p>
          I am a passionate MERN Stack developer with expertise in building scalable backends and real-time applications. I love solving challenging problems, optimizing databases, and creating responsive web applications that provide smooth user experiences.
        </p>
        <p>
          My focus is on Node.js, MongoDB, and modern frontend frameworks like React & Next.js. I am also experienced in deploying apps on cloud platforms like Render, Vercel, and Railway.
        </p>
      </section>

      {/* Skills Section */}
        <section className="skills-section section">
  <h2>Skills & Expertise</h2>
  <div className="skills-grid">

    {/* Left Card: Backend & Server */}
    <div className="card backend-card">
      <h3>Backend & Server</h3>
      <ul>
        <li>Node.js, Express.js, REST APIs</li>
        <li>WebSockets (Real-Time Updates)</li>
        <li>JWT / OAuth Authentication</li>
        <li>Async Programming & Event-Driven Patterns</li>
      </ul>
    </div>

    {/* Right Card: Database, Frontend, Cloud */}
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
      <section className="contact-section section" id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="asiva6102000@gmail.com">asiva6102000@gmail.com</a></p>
        <p>Mobile: +91-9943490212</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/sivaramakrishnan-a-a973a3240" target="_blank"> linkedin.com/in/sivaramakrishnan-a-a973a3240</a></p>
      </section>
    </div>
  );
};

export default Portfolio;