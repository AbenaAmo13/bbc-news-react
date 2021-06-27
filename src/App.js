
import './App.css';
import React, { Component } from 'react';

import {Card} from "react-bootstrap";
import Article1 from './article1'
import Article2 from './article2'
import Article3 from './article3'
import AllArticles from './allarticles'
import ControlledAllArticles from "./functionallarticles";
import logo from'./logo.PNG'




function App() {
  return (
    <div className="App">
            <header className="App-header">
                <h3 className="bbcheader"> BBC News Articles </h3>
                <img src={logo} className="bbc-logo"/>


            </header>



        <div className="second-leader" >
            <h3> Rate The Articles.</h3>

        </div>
                <div>
                    <AllArticles></AllArticles>
                </div>





    </div>
  );
}

export default App;
