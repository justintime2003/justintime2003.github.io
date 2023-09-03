import Header from './components/Header'
import Card from './components/Card/Card'
import './App.css'

function App() {
  const name = 'Justin'

  return (
    <div className="container">
      <Header title='Hello' />
      <h1>Hello Test</h1>
      <h2>Hello {name}</h2>
      <div className="cards-container">
        <Card title='Test Title' imageUrl='https://thumbs.dreamstime.com/b/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg' imageAlt='Test Image' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
        <Card title='Test Title' imageUrl='https://thumbs.dreamstime.com/b/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg' imageAlt='Test Image' body='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
      </div>
    </div>
  );
}

export default App;
