import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Card from './components/Card/Card'
import TopBar from './components/TopBar/TopBar'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Resume from './pages/Resume/Resume'
import './App.css'
import justinthe from './justinthe.jpg'

function App() {
  const name = 'Justin The'

  return (
    <Router>
      <div className="container">
        <TopBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
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
              <Card title='Test Title' imageUrl='https://thumbs.dreamstime.com/b/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg' imageAlt='Test Image' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
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
