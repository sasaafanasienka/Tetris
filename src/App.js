import React from 'react'
import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main'

function App() {

  if (!localStorage.getItem('record')) {
    localStorage.setItem('record', 0)
  }

  return (
    <div className="App">
      <Main/>     
    </div>
  );
}

export default App;
