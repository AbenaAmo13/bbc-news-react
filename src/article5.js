import React, { Component } from 'react';
/* import the article 5 json file as article5data to be able to get the information from it */
import article5data from "./data/article-5.json";
/* Import card so you will be able to use the card component*/
import {Card, CardDeck, CardImg} from "react-bootstrap";
/*get the title key from the json file and put it in a const named title*/
const title = article5data.title;

/*get the body array from the artile1-json and store it in a const*/
const body = article5data.body

/*Get access to all the keys inside the model key*/
const bodyModel = body.map((bodyModelDetails, key)=>{
    return(

            bodyModelDetails.model
    )})



class Article5 extends Component{
    render(){
        return(
            <div>
                <Card>
                    {/* Get the image from the json article-5 file and render it, with the appropriate height and width. */}
                    <CardImg src={bodyModel[1].url} height={bodyModel[1].height} width={bodyModel[1].width}/>
                    <Card.Body>
                        <Card.Title>
                            {title}
                        </Card.Title>
                    <Card.Header>
                        <i>
                            {/* Render the heading from the article-5.json file */}
                            {bodyModel[0].text}
                        </i>

                    </Card.Header>
                        <Card.Text>
                            {/* Render the image in the 2nd element in the body array from the article-5.json file */}
                            <CardImg src={bodyModel[2].url} height={bodyModel[2].height} width={bodyModel[2].width}/>
                            <p>
                                {/* Render the paragraph from the 3rd element in the body array from the article-5.json file*/}
                                {bodyModel[3].text}
                            </p>
                        </Card.Text>
                       <div>
                       </div>
                    </Card.Body>
                </Card>

            </div>
            );
    }
}

export default Article5;