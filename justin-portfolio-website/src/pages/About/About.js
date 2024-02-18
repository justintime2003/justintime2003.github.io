import React from 'react';
import './About.css';
import justinthe from './justinthe.jpg'
import linkedin from './linkedin.png'
import github from './github.png'
import instagram from './instagram.png'

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

        <div className="socials-container">
            <a className="socials-image" href="https://www.linkedin.com/in/justinthe/" target="_blank"><img src={linkedin} alt="LinkedIn"/></a>
            <a className="socials-image" href="https://github.com/justintime2003" target="_blank"><img className="socials-image" src={github} alt="Github"/></a>
            <a className="socials-image" href="https://www.instagram.com/imnotjustinthe/" target="_blank"><img className="socials-image" src={instagram} alt="Instagram"/></a>
        </div>

        <p className="thanks">Special thanks to <a href="https://www.linkedin.com/in/darrick-gunawan/" target="_blank">Darrick Gunawan</a> for making this website!</p> 
    </div>
  );
}

export default About;
