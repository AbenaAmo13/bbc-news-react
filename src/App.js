
import './App.css';
import React, { Component } from 'react';

import {Card} from "react-bootstrap";
import Article1 from './article1'
import Article2 from './article2'
import Article3 from './article3'
import AllArticles from './allarticles'




function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h3> BBC News Article</h3>
      </header>
                <div>
                    <AllArticles></AllArticles>
                </div>





    </div>
  );
}

export default App;
