import React, { Component } from 'react';
/* import the article 1 json file as data to be able to get the information from it */
import data from "./data/article-4.json";
/* Import card so you will be able to use the card component*/
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Box} from '@material-ui/core';
import {CardImg} from "react-bootstrap";
import DisplayArticles from "./displayArticles";
import Rating from "@material-ui/lab/Rating";
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
export default function MediaCard4() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);

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
                                        <ul>
                                            <li>
                                                {bodyModel[2].items[0]}
                                            </li>
                                            <li>
                                                {bodyModel[2].items[1]}
                                            </li>
                                            <li>
                                                {bodyModel[2].items[2]}
                                            </li>
                                            <li>
                                                {bodyModel[2].items[3]}
                                            </li>

                                        </ul>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {/* Render the paragraphs from the article-json file*/}
                                        {bodyModel[3].text}
                                        <ul>
                                            <li>
                                                {bodyModel[4].items[0]}
                                            </li>
                                            <li>
                                                {bodyModel[4].items[1]}
                                            </li>
                                        </ul>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {bodyModel[5].text}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Box>
                            </CardActions>

                        </Card>


            );
    }


