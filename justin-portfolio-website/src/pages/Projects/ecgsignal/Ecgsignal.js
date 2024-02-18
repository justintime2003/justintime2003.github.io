import React from 'react';
import './Ecgsignal.css';
import Code from './code.png';
import Graph from './graph.png';
import Image from './image.png';
import Final from './final.png';

function Ecgsignal() {

    return (
        <div className="everything">
            <h1>ECG Signal Analysis</h1>

            <p>In the realm of computational mathematics and signal processing, my venture into ECG Signal Analysis stands out as a highlight of my academic and research pursuits. This project was not just an exploration of electrical signals generated by the human heart but a deep dive into how these signals can be deconstructed, analyzed, and interpreted through the lens of computational algorithms and matrix mathematics. The core objective was to harness the power of Python and the numpy library to implement an efficient method for analyzing ECG signals, specifically focusing on identifying individual heartbeats and extracting meaningful data from the complex waveforms that characterize cardiac activity.</p>

            <p>The development process began with a theoretical foundation, understanding the nature of ECG signals and the challenges they present. ECG signals, rich with information on the heart's condition, are also fraught with noise and artifacts that can obscure critical data. The task at hand was to create a robust analysis tool that could filter through the noise, identifying and analyzing heartbeats with precision. This required not just an understanding of signal processing techniques but also an innovative approach to algorithm development.</p>

            <p>One of the most striking results emerged from the comparison of two methods for calculating Fibonacci numbers: a recursive implementation and a matrix-based approach. This comparison, while seemingly tangential to ECG signal analysis, was instrumental in refining our algorithmic strategies. The matrix-based method, leveraging numpy's 'linalg.matrix_power' function, demonstrated a stunning efficiency advantage, being 300,000 times faster than its recursive counterpart. This efficiency was not just a numerical triumph but a practical revelation, underscoring the power of matrix operations in computational tasks.</p>

            <img src={Code} alt="Code" />

            <p>The heart of our project—identifying heartbeats within ECG data—yielded compelling visual and analytical results. Through cross-correlation techniques, we were able to isolate heartbeat waveforms from a sea of noise, a task that initially seemed daunting due to the complexity of the signal. The use of matplotlib to visualize the ECG data brought these results to life, showcasing the distinct patterns of heartbeats and providing a clear visual representation of our analytical success.</p>

            <img src={Graph} alt="Graph" />

            <p>The data revealed through our analysis painted a detailed picture of cardiac activity, with 68,282 elements mapped across 34,141 rows and two columns, delineating time and voltage. This granular view into the ECG signal not only highlighted the precision of our approach but also the potential applications of this analysis in medical diagnostics and monitoring.</p>

            <img src={Image} alt="Image" />

            <p>Reflecting on this project, the transition from abstract mathematical models to practical, life-affirming technology was profoundly satisfying. The ECG Signal Analysis project was not just a demonstration of technical proficiency but a testament to the potential of computational analysis to contribute meaningfully to healthcare and patient outcomes.</p>
            
            <img src={Final} alt="Final" />

        </div>
    );
}

export default Ecgsignal;