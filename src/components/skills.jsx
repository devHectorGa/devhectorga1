import React from 'react';
import './skills.scss';

const Skills = (...props) => (
  <section id="skills" className="skills">
    <h2>My Skills</h2>
    <div className="skill">
      <h3><i class="fab fa-js"></i></h3>
      <progress value="85" max="100">Hola</progress>
    </div>
    <div className="skill">
      <h3><i class="fab fa-php"></i></h3>
      <progress value="40" max="100">Hola</progress>
    </div>
    <div className="skill">
      <h3><i class="fab fa-react"></i></h3>
      <progress value="15" max="100">Hola</progress>
    </div>
    <div className="skill">
      <h3><i class="fab fa-css3"></i></h3>
      <progress value="50" max="100"></progress>
    </div>
  </section>
);

export default Skills;