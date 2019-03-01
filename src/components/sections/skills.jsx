import React from 'react';
import './css/skills.scss';

const Skills = (...props) => (
  <section id="skills" className="skills">
    <h2>My Skills</h2>
    <div className="skill">
      <h3><i className="fab fa-js"></i></h3>
      <p>Javascript <span>85</span></p>
      <progress value="85" max="100">85</progress>
    </div>
    <div className="skill">
      <h3><i className="fab fa-php"></i></h3>
      <p>PHP <span>55</span></p>
      <progress value="55" max="100">Hola</progress>
    </div>
    <div className="skill">
      <h3><i className="fab fa-react"></i></h3>
      <p>React <span>70</span></p>
      <progress value="70" max="100">Hola</progress>
    </div>
    <div className="skill">
      <h3><i className="fab fa-css3"></i></h3>
      <p>HTML5 <span>95</span></p>
      <progress value="95" max="100"></progress>
    </div>
  </section>
);

export default Skills;