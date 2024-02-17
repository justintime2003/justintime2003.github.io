import React from 'react';
import './About.css';
import justinthe from './justinthe.jpg'

function About() {
    const name = 'Justin The'

  return (
    <div>
        <div className="bio-container">
            <div className="headshot-container">
                <img className="headshot" src={justinthe} alt="Headshot" />
            </div>

            <div className="text-container">
                <h1>{name}</h1>
                <p>Biomedical Engineering student</p>      
            </div>
        </div>

        <div className="p-container">
            <p>Passionate and driven biomedical engineering student dedicated to leveraging skills and knowledge in solving complex medical problems. Interested in medical device design, electrical circuit design, bioinstrumentation and surgery robotics. Collaborative team player that is meticulous in attention to detail. Committed to innovation, staying at the forefront of emerging trends, and making a positive impact on patient outcomes.</p>
        </div>
    </div>
  );
}

export default About;
