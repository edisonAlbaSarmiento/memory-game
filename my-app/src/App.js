import React from 'react';
import logo from './logo.svg';
import './App.css';

function validation(value){
  console.log('ENTRO', value)
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>UNI.
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
      <button onClick={validation} value='SI'>SI</button>
      <button onClick={validation} value='NO'>No</button>
    </div>
  );
}

export default App;
