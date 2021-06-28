import React, { Component } from 'react';
/* import the article 1 json file as data to be able to get the information from it */
import data from "./data/article-3.json";
/* Import card so you will be able to use the card component*/
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button} from '@material-ui/core';
import {CardImg} from "react-bootstrap";
import DisplayArticles from "./displayArticles";
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
       height: parseInt(bodyModel[1].height),
        width: parseInt(bodyModel[1].width),

    },
});
export default function MediaCard3() {
    const classes = useStyles();

        return(
                        <Card  className={classes.Cardroot} >
                            <CardActionArea >
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
                                        {/* Render the paragraphs from the article-json file*/}
                                        {bodyModel[2].text}                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {bodyModel[3].text}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {bodyModel[4].text}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {bodyModel[5].text}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {bodyModel[6].text}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {bodyModel[7].text}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {bodyModel[8].text}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>

                        </Card>


            );
    }


