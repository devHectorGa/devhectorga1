import React from 'react';
import './projects.scss';
import image1 from './img/project01.jpg';
import image2 from './img/project02.jpg';

const Projects = (...props) => (
  <section id="projects" className="projects">
    <h2>My Projects</h2>
    <div className="project">
      <img src={image1} alt="" className="projectImg" />
      <h3 className="projectTitle">Lorem Ipsum</h3>
      <p className="projectText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="project">
      <img src={image2} alt="" className="projectImg" />
      <h3 className="projectTitle">Lorem Ipsum</h3>
      <p className="projectText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="project">
      <img src={image1} alt="" className="projectImg" />
      <h3 className="projectTitle">Lorem Ipsum</h3>
      <p className="projectText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="project">
      <img src={image2} alt="" className="projectImg" />
      <h3 className="projectTitle">Lorem Ipsum</h3>
      <p className="projectText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="project">
      <img src={image1} alt="" className="projectImg" />
      <h3 className="projectTitle">Lorem Ipsum</h3>
      <p className="projectText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="project">
      <img src={image2} alt="" className="projectImg" />
      <h3 className="projectTitle">Lorem Ipsum</h3>
      <p className="projectText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="project">
      <img src={image1} alt="" className="projectImg" />
      <h3 className="projectTitle">Lorem Ipsum</h3>
      <p className="projectText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="project">
      <img src={image2} alt="" className="projectImg" />
      <h3 className="projectTitle">Lorem Ipsum</h3>
      <p className="projectText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </section>
);

export default Projects;