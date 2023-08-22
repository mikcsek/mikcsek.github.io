import React from 'react'
import './Skills.scss';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import BOOTSTRAP from '../assets/bootstrap.png';
import JS from '../assets/js.png';
import TS from '../assets/ts.png';
import REACT from '../assets/react.png';
import ANGULAR from '../assets/angular.png';
import FIREBASE from '../assets/firebase.png';
import NODEJS from '../assets/nodejs.png';
import MONGO from '../assets/mongodb.png';
import JAVA from '../assets/java.png';

const Skills = () => {
  return (
    <section className='container-fluid'>
        <div>
            <h2>Skills</h2>
        </div>

        <div id='frontend' className='skills'>
          <div className='content'>
            <img src={HTML} alt="HTML" />
            <p>HTML</p>
          </div>
          <div className='content'>
            <img src={CSS} alt="css" />
            <p>CSS/SCSS</p>
          </div>
          <div className='content'>
            <img src={BOOTSTRAP} alt="bootstrap" />
            <p>Bootstrap</p>
          </div>
          <div className='content'>
            <img src={JS} alt="javascript" />
            <p>Javascript</p>
          </div>
          <div className='content'>
            <img src={TS} alt="typescript" />
            <p>Typescript</p>
          </div>
          <div className='content'>
            <img src={REACT} alt="react" />
            <p>React</p>
          </div>
          <div className='content'>
            <img src={ANGULAR} alt="angular" />
            <p>Angular</p>
          </div>
          

        </div>

        <div id="backend" className='skills'>
        <div className='content'>
            <img src={FIREBASE} alt="firebase" />
            <p>Firebase</p>
          </div>
          <div className='content'>
            <img src={NODEJS} alt="nodejs" />
            <p>NodeJs</p>
          </div>
          <div className='content'>
            <img src={MONGO} alt="mongodb" />
            <p>MongoDB</p>
          </div>
          <div className='content'>
            <img src={JAVA} alt="java" />
            <p>Java</p>
            <small>(in progress)</small>
          </div>
        </div>
    </section>
  )
}

export default Skills