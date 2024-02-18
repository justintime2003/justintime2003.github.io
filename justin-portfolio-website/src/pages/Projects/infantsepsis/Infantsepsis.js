import React from 'react';
import './Infantsepsis.css';
import Concept1 from './c1.png';
import Concept2 from './c2.png';
import LTS from './lt.png';
import PCB from './pcb.png';

function Infantsepsis() {

    return (
        <div className="everything">
            <h1>Infant Sepsis Monitor</h1>

            <p>Find the design files <a href="https://drive.google.com/drive/folders/1gzguYpmFf385ggQGZAVsx_Lr72Zt0PCn" target="_blank">here</a>.</p>

            <p>The Infant Sepsis Monitor project was a collaborative effort aimed at developing a medical device capable of detecting sepsis in infants under 3 months old, a critical innovation designed to enhance early diagnosis and potentially prevent sudden infant death syndrome (SIDS). Spearheaded by a dedicated team of six students, including a key contributor skilled in electrical engineering and design, the project was characterized by a meticulous development process that integrated advanced temperature sensing technologies with practical design considerations.</p>

            <p>In the initial stages, the team explored two conceptual designs for the temperature sensing unit. The first concept utilized a +9V battery-powered NTC Thermistor for ambient temperature measurement, integrated with a low-pass filter and a non-inverting op-amp to mitigate voltage offset.</p>

            <img src={Concept1} alt="Concept 1" />

            <p>The second, more sophisticated design employed a Wheatstone bridge for enhanced voltage output range and noise reduction, combined with an instrumentation amplifier for superior signal integrity. </p>

            <img src={Concept2} alt="Concept 2" />

            <p>After careful analysis and comparison, the second design was selected for its superior performance in minimizing input noise and maintaining optimal impedance characteristics.</p>

            <p>Throughout the development process, the team leveraged LTSpice for simulation and verification of the sensing circuit's performance against white noise, ensuring reliability before physical implementation.</p>

            <img src={LTS} alt="LTSpice" />

            <p>Further innovations included the design of a compact PCB layout with Altium Designer, incorporating a buck converter to efficiently step down input voltage for the instrumentation amplifier.</p>

            <img src={PCB} alt="PCB" />

            <p>The final result was a highly accurate and reliable Infant Sepsis Monitor, encapsulating the culmination of theoretical knowledge, practical engineering skills, and a profound commitment to addressing a critical healthcare challenge. This project not only stands as a testament to the team's technical prowess and innovative spirit but also underscores the potential impact of engineering solutions in improving pediatric healthcare outcomes.</p>
        </div>
    );
}

export default Infantsepsis;