import React, { Component, useState } from 'react';
/* import the article 1 json file as data to be able to get the information from it */
import data from "./data/article-1.json";
/* Import card so you will be able to use the card component*/
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button,Box} from '@material-ui/core';
import {CardImg} from "react-bootstrap";
import DisplayArticles from "./displayArticles";
import RatingsForm from "./ratingsForm";
/*get the title key from the json file and put it in a const named title*/
const title = data.title;


/*get the body array from the artile1-json and store it in a const*/
const body = data.body

/*Get access to all the keys inside the model key*/
const bodyModel = body.map((bodyModelDetails, key)=>{
    return(

            bodyModelDetails.model
    )})





const useStyles = makeStyles({
    Cardroot: {
        maxWidth: parseInt(bodyModel[2].width),


    },
    media: {
       height: parseInt(bodyModel[2].height),
        width: parseInt(bodyModel[2].width),

    },
});
export default function MediaCard() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);


    return(
                        <Card  className={classes.Cardroot} >
                            <CardActionArea >
                                <CardMedia className={classes.media}

                                    /* Get the image from the json article file and render it, with the appropriate height and width. */
                                           image = {bodyModel[2].url}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {title}
                                    </Typography>
                                    <Typography>
                                        {/* Render the heading from the article.json file */}
                                        {bodyModel[0].text}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {/* Render the paragraphs from the article-json file*/}
                                        {bodyModel[1].text}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">

                                        {bodyModel[3].text}


                                        {bodyModel[4].text}

                                    </Typography>

                                    <ul>
                                        {/* Render the list items in the article-.json file*/}
                                        <li>
                                            {bodyModel[5].items[0]}
                                        </li>
                                        <li>
                                            {bodyModel[5].items[1]}
                                        </li>
                                    </ul>
                                </CardContent>

                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                {/*<Box component="fieldset" mb={3} borderColor="transparent">
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Box>*/}
                                <RatingsForm></RatingsForm>
                            </CardActions>

                        </Card>


            );
    }


