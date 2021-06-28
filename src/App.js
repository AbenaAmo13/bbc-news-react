
import './App.css';
import React, { Component } from 'react';

import {Card} from "react-bootstrap";
import AllArticles from './allarticles'
import logo from'./logo.PNG'
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";



const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});


function App() {
  return (
      <React.StrictMode>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
      </React.StrictMode>
  );
}

export default App;
