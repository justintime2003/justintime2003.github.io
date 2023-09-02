import Header from './components/Header'

function App() {
  const name = 'Justin'

  return (
    <div className="container">
      <Header />
      <h1>Hello Test</h1>
      <h2>Hello {name}</h2>
    </div>
  );
}

export default App;
