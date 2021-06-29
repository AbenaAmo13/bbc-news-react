import React, { Component } from 'react';
/* import the article 1 json file as data to be able to get the information from it */
import data from "./data/article-1.json";
/* Import card so you will be able to use the card component*/
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button,Box} from '@material-ui/core';
import {CardImg} from "react-bootstrap";
import DisplayArticles from "./displayArticles";
/*get the title key from the json file and put it in a const named title*/
const title = data.title;


/*get the body array from the artile1-json and store it in a const*/
const body = data.body

class RatingsForm extends Component{


    constructor(props) {
        super(props);
        this.state = {}
        this.state = { ratings: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(event) {
        this.setState({ ratings: event.target.value })
    }
    handleSubmit(event) {
        alert(this.state.ratings)
        console.log(this.state.ratings)
        //console.log(this.state.ratings)
        //event.preventDefault()
    }




    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                        name="simple-controlled"
                        value={this.state.ratings}
                        onChange={this.handleChange}

                    />
                </Box>

            </form>

        )
    }
}
export default RatingsForm;