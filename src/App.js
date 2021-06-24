
import './App.css';
import React, { Component } from 'react';
import data from "./data/article-1.json";
const title = data.title;

const body = data.body

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h3> BBC News Article</h3>
      </header>
        {title}
    </div>
  );
}

export default App;
