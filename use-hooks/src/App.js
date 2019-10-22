import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputElement from './components/input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputElement />

      </header>
    </div>
  );
}

export default App;
