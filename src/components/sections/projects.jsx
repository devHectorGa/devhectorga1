import React from 'react';
import './css/projects.scss';

const Projects = (...props) => (
  <section id="projects" className="projects">
    <h2>My Projects</h2>
    <div className="project">
      <img src="https://firebasestorage.googleapis.com/v0/b/devhectorga.appspot.com/o/projects%2Feventosylogistica.webp?alt=media&token=0e588d59-cba7-4a7d-9235-c1025309de80" alt="Eventos y Logistica Project devHector.Ga" className="projectImg" />
      <h3 className="projectTitle">Eventos y Logistica website</h3>
      <p className="projectText">A simple website for a local enterprise of events, designed with CSS, React and Firebase.</p>
      <span className="projectLinks">        
        <a href="https://eventosylogistica.net/" target="_blank" className="projectLinks-link" rel="noopener noreferrer">
          <i class="fas fa-globe-americas "></i> Visit site
        </a>
      </span>
    </div>        
    <div className="project">
      <img src="https://firebasestorage.googleapis.com/v0/b/devhectorga.appspot.com/o/projects%2Fnacionaldemontacargas.webp?alt=media&token=4e53398c-a521-4228-9e41-f190f0ea017a" alt="Nacional de Montacargas Project devHector.Ga" className="projectImg" />
      <h3 className="projectTitle">Nacional de Montacargas App</h3>
      <p className="projectText">A complete website with user role, a protected section and real-time. Quotations and invoices (In development) and more features for clients.</p>
      <span className="projectLinks">        
        <a href="https://www.nacionaldemontacargas.com.co/" target="_blank" className="projectLinks-link" rel="noopener noreferrer">
          <i class="fas fa-globe-americas "></i> Visit site
        </a>
      </span>
    </div>        
  </section>
);

export default Projects;