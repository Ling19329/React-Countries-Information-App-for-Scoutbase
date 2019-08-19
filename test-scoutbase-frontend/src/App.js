import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="/countries/1"
          rel="noopener noreferrer"
        >
          Country
        </a>

        <a
          className="App-link"
          href="/countries"
          rel="noopener noreferrer"
        >
          Countries
        </a>
      </header>
    </div>
  );
}

export default App;
