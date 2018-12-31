import React from 'react'
import './skills.scss'

const Skills = (...props) => (
  <section id="skills" className="skills">
    <h2>My Skills</h2>
    <div className="skill">
      <h3>HTML5, CSS3, JS</h3>
      <progress value="85" max="100">Hola</progress>
    </div>
    <div className="skill">
      <h3>PHP</h3>
      <progress value="40" max="100">Hola</progress>
    </div>
    <div className="skill">
      <h3>React JS</h3>
      <progress value="15" max="100">Hola</progress>
    </div>
    <div className="skill">
      <h3>Firebase</h3>
      <progress value="50" max="100">Hola</progress>
    </div>
  </section>
)

export default Skills