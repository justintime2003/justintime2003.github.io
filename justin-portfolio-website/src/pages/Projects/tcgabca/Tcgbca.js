import React from 'react';
import './Tcgbca.css';
import Pipeline from './pipeline.png';
import Dataset from './dataset.png';
import Plot from './plot.png';
import Path from './path.png';

function Tcgbca() {

    return (
        <div className="everything">
            <h1>TCGA Breast Cancer Analysis</h1>

            <p>The TCG Breast Cancer Analysis project embarked on a groundbreaking journey to harness the power of genomic data, aiming to unravel the complexities of breast cancer at the molecular level. At the heart of this endeavor was the goal to identify genetic markers that could lead to better diagnostic strategies, treatments, and a deeper understanding of cancer's underlying mechanisms.</p>
            
            <img src={Pipeline} alt="pipeline" />

            <p>The development process commenced with the collection and analysis of a vast dataset from The Cancer Genome Atlas (TCGA), focusing on breast cancer specimens. This involved rigorous data preprocessing, normalization, and the application of sophisticated bioinformatics tools to analyze genetic mutations, expression levels, and other genomic features. Key to this phase was the utilization of various statistical and machine learning models to sift through the data, identifying patterns and correlations that could shed light on cancer's genetic drivers.</p>
            
            <img src={Dataset} alt="dataset" />

            <p>As the project progressed, we delved deeper into differential gene expression analysis, survival analysis, and the exploration of oncogenic pathways. By employing tools such as DESeq2 for differential expression analysis and survival analysis packages in R, we could pinpoint genes significantly associated with breast cancer prognosis and patient survival rates. The culmination of this project was not just a set of statistical results but a comprehensive suite of insights that illuminated the genetic landscape of breast cancer.</p>

            <img src={Plot} alt="plot" />

            <p>The final outcome was a detailed report that not only highlighted potential biomarkers for breast cancer but also offered new avenues for personalized medicine. By mapping the genetic alterations and their impacts on patient outcomes, the project laid the groundwork for future research that could lead to targeted therapies and improved diagnostic techniques.</p>
        
            <img src={Path} alt="path" />
        </div>
    );
}

export default Tcgbca;