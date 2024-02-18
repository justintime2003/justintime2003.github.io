import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Card from './components/Card/Card'
import TopBar from './components/TopBar/TopBar'
import About from './pages/About/About'
import Resume from './pages/Resume/Resume'
import Infantsepsis from './pages/Projects/infantsepsis/Infantsepsis'
import Infantsepsisimage from './pages/Projects/infantsepsis/Thumbnail.jpg'
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
              <Link className="links" to="/infant-sepsis-monitor"><Card title='Infant Sepsis Monitor' imageUrl={Infantsepsisimage} imageAlt='Test Image' body='Revolutionary monitoring for early detection of sepsis in newborns, ensuring prompt treatment and care.' /></Link>
              <Card title='Test Title' imageUrl='https://thumbs.dreamstime.com/b/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg' imageAlt='Test Image' body='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
              <Card title='Test Title' imageUrl='https://thumbs.dreamstime.com/b/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg' imageAlt='Test Image' body='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
              <Card title='Test Title' imageUrl='https://thumbs.dreamstime.com/b/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg' imageAlt='Test Image' body='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
              <Card title='Test Title' imageUrl='https://thumbs.dreamstime.com/b/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg' imageAlt='Test Image' body='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />   
            </div>
            </>
          } exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
