import React from 'react';
import './Bionicsbms.css';
import Main from './main.png';
import Split from './split.png';
import Sketch from './sketch.png';
import Final from './final.png';

function Bionicsbms() {

    return (
        <div className="everything">
            <h1>Bionic Arm Battery Management System</h1>

            <p>Find the documentation <a href="https://docs.google.com/document/d/1qkQ8FpnbNGpsW_yOjNUdN24u8txYNUQe5ZOuDcnmK6k/edit" target="_blank">here</a>.</p>

            <p>As part of the UBC Bionics team, I took on a crucial role in the development of a bionic arm, focusing on the battery management system and power delivery. This project was not just a technical challenge but a deeply rewarding journey into the intersection of engineering and healthcare. Our objective was clear: to create a bionic arm that could potentially change lives by offering enhanced mobility and functionality.</p>

            <p>My primary responsibility was ensuring the bionic arm had a reliable and efficient power source, which led me to implement the Maxim MAX17205 Fuel Gauge Board. This choice was driven by the need for precise battery monitoring and optimal power delivery, critical factors in the arm's performance and safety.</p>

            <img src={Main} alt="Main" />

            <p>The journey began with exhaustive documentation of the BMS, laying the groundwork for systematic development and testing. We explored innovative solutions to integrate rechargeable LiPo batteries, enhancing the arm's endurance and usability. My role expanded to include the design of power delivery systems, particularly focusing on a split rail system for the EMG components. This was essential for maintaining a high signal-to-noise ratio, crucial for the accurate interpretation of muscle movements.</p>

            <img src={Split} alt="Split" />

            <p>We adopted an iterative approach, drafting initial circuit sketches and transitioning to practical breadboard testing. This hands-on phase was instrumental in refining our power delivery strategies, ensuring that the EMG system received a stable ±5V supply. My experience with Altium for schematic sketching and circuit design was pivotal in this phase, allowing for precise and efficient design iterations.</p>

            <img src={Sketch} alt="Sketch" />

            <p>The project's final outcome was a testament to the power of interdisciplinary collaboration and technological innovation. Our team's ability to create a reliable battery management and power delivery system underscored the potential of bionics in transforming lives. This experience not only honed my technical skills but also deepened my appreciation for the impact of engineering on human health and wellbeing.</p>

            <img src={Final} alt="Final" />
        </div>
    );
}

export default Bionicsbms;