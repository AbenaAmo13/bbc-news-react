import React, { Component } from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import classes from "*.module.css";
/* import the article 2 json file as data to be able to get the information from it */
const useStyles = makeStyles({
    Cardroot: {
        maxWidth:640,


    },
    media: {
        height: 420,


    },
});

class Article extends Component{

    constructor(title, heading, content) {
        super();
        this.state = {
            title: title,
            heading:heading,
            content : content,
        }
    }


   render(){

        return(
            <Card  className={classes.Cardroot} >
                <CardActionArea >
                    <CardMedia className={classes.media}

                        /* Get the image from the json article file and render it, with the appropriate height and width. */

                    />
                    <CardContent>
                        {content.map((content, index)=> {


                        })}

                    </CardContent>

                </CardActionArea>
                <CardActions>

                </CardActions>

            </Card>

        )

   }

}
export default Article;