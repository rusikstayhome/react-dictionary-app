import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Dictionary
        </header>
        <main>
          <Dictionary defaultKeyword='hello' />
        </main>
        <footer className='App-footer'>
          <small>Coded by svrmr</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
