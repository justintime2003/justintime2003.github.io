import React from 'react';
import './Resume.css';
import MasterResume from './Master_Resume.pdf'

function Resume() {

  return (
    <div>
        <iframe src={MasterResume} />
    </div>
  );
}

export default Resume;
