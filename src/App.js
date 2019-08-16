import React from 'react';
import logo from './logo.svg';
import './App.css';
import LightComponent from "./Component/LightContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <LightComponent/>
      </body>
    </div>
  );
}

export default App;
