import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Card from './components/Card/Card'
import TopBar from './components/TopBar/TopBar'
import About from './pages/About/About'
import Resume from './pages/Resume/Resume'
import Infantsepsis from './pages/Projects/infantsepsis/Infantsepsis'
import Infantsepsisimage from './pages/Projects/infantsepsis/Thumbnail.jpg'
import Bionicsbms from './pages/Projects/bionicsbms/Bionicsbms'
import Bionicsbmsimage from './pages/Projects/bionicsbms/Thumbnail.jpg'
import Ecgsignal from './pages/Projects/ecgsignal/Ecgsignal'
import Ecgsignalimage from './pages/Projects/ecgsignal/Thumbnail.jpg'
import Tcgbca from './pages/Projects/tcgabca/Tcgbca'
import Tcgbcaimage from './pages/Projects/tcgabca/Thumbnail.jpg'
import './App.css'
import justinthe from './justinthe.jpg'

function App() {
  const name = 'Justin The'

  return (
    <Router>
      <div className="container">
        <TopBar />
        <Routes>
          <Route path="/infant-sepsis-monitor" element={<Infantsepsis />}/>
          <Route path="/bionics-bms" element={<Bionicsbms />}/>
          <Route path="/ecg-signal-analysis" element={<Ecgsignal />}/>
          <Route path="/tcg-breast-cancer-analysis" element={<Tcgbca />}/>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={
            <>
            <div className="bio-container">
              <div className="headshot-container">
              <img className="headshot" src={justinthe} alt="Headshot" />
              </div>

              <div className="text-container">
                <h1>{name}</h1>
                <p>Biomedical Engineering student</p>
                
              </div>
            </div>
            
            <div className="cards-container">
            <Link className="links" to="/tcg-breast-cancer-analysis"><Card title='TCG Breast Cancer Analysis' imageUrl={Tcgbcaimage} imageAlt='TCG' body="A study that utilized genomic data to identify key genetic markers in breast cancer, offering insights into diagnosis, treatment, and the disease's molecular basis" /></Link>
              <Link className="links" to="/ecg-signal-analysis"><Card title='ECG Signal Analysis' imageUrl={Ecgsignalimage} imageAlt='ECG' body='ECG Analysis utilizing advanced computational techniques to parse complex data for heartbeat detection.' /></Link>
              <Link className="links" to="/bionics-bms"><Card title='Bionic Battery Management System' imageUrl={Bionicsbmsimage} imageAlt='Battery' body='Cutting-edge battery management system for a bionic arm, focusing on ensuring efficient and reliable power delivery.' /></Link>
              <Link className="links" to="/infant-sepsis-monitor"><Card title='Infant Sepsis Monitor' imageUrl={Infantsepsisimage} imageAlt='Monitor' body='Revolutionary monitoring for early detection of sepsis in newborns, ensuring prompt treatment and care.' /></Link>
              {/* <Card title='Test Title' imageUrl='https://thumbs.dreamstime.com/b/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg' imageAlt='Test Image' body='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />    */}
            </div>
            </>
          } exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
