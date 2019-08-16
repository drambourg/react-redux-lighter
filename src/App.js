import React from 'react';
import logo from './logo.svg';
import './App.css';
import LightComponent from "./Component/LightContainer";
import CounterComponent from "./Component/CounterContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="text-center"> My first Counter Redux w/ React</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
      <CounterComponent/>
      </body>
    </div>
  );
}

export default App;
