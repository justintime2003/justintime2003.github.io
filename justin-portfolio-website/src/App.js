import Card from './components/Card/Card'
import TopBar from './components/TopBar/TopBar'
import './App.css'
import justinthe from './justinthe.jpg'

function App() {
  const name = 'Justin The'

  return (
    <div className="container">
      <TopBar />

      <div className="bio-container">
        <div className="headshot-container">
        <img className="headshot" src={justinthe} alt="Headshot" />
        </div>

        <div className="text-container">
          <h1>{name}</h1>
          <p>Nico nico niii anata no heart ni nico nico niiii egao todokeru yazawa nico nico nico ni te oboeteru love nico! We're no strangers to love, you know the rules and so do I.  A full committments what im thinking of, you wouldn't get this from any other guy. I just wanna tell you how im feeling, gotta make you, understand. Never gonna give you up, never gonna let you down, never gonna turn around and hurt you.</p>
        </div>
      </div>
      
      <div className="cards-container">
        <Card title='Test Title' imageUrl='https://thumbs.dreamstime.com/b/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg' imageAlt='Test Image' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
        <Card title='Test Title' imageUrl='https://thumbs.dreamstime.com/b/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg' imageAlt='Test Image' body='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        <Card title='Test Title' imageUrl='https://thumbs.dreamstime.com/b/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg' imageAlt='Test Image' body='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        <Card title='Test Title' imageUrl='https://thumbs.dreamstime.com/b/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg' imageAlt='Test Image' body='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        <Card title='Test Title' imageUrl='https://thumbs.dreamstime.com/b/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg' imageAlt='Test Image' body='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />     
      </div>
    </div>
  );
}

export default App;
