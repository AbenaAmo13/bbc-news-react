
import './App.css';
import React, { Component } from 'react';
import data from "./data/article-1.json";
import {Card} from "react-bootstrap";
import Article1 from './article1'
const title = data.title;



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h3> BBC News Article</h3>
      </header>

                <div>
                <Article1></Article1>
                </div>


    </div>
  );
}

export default App;
