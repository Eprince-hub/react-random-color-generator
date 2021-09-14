import './App.css';
import LeftColorBox from './Components/LeftColorBox';
import RightColorBox from './Components/RightColorBox';

// import logo from './logo.svg';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

function App() {
  // state here
  return (
    <div className='App'>
      {/* Render all my Components here */}

      <h1>REACT RANDOM COLOR GENERATOR</h1>

      <div className='colorBoxes'>
        <LeftColorBox />
        <RightColorBox />
      </div>

      <button className='bottomButton'>Generate Random Color</button>
    </div>
  );
}

export default App;
