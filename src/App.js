import logo from './logo-devmind.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><img src={logo} className="App-logo" alt="logo" /> </p>
      
        <p>
        Welcome! This is my first React app!
        </p>
        <a
          className="App-link"
          href="https://www.devmind.ro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to site
        </a>
      </header>
    </div>
  );
}

export default App;
