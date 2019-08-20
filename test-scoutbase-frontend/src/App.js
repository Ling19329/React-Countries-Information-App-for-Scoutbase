import React from 'react';
import './App.css';

import styled from "styled-components"
const CountryLink = styled.a`{
  text-decoration: none;
  color : DodgerBlue;
}`
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountryLink
          href="/countries"
        >
          Countries
        </CountryLink>
      </header>
    </div>
  );
}

export default App;
