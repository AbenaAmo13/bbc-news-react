import React, { Component } from 'react';
/* import the article 2 json file as data to be able to get the information from it */

import article2data from "./data/article-2.json";
/* Import card so you will be able to use the card component*/
import {Button, Card, CardDeck, CardImg} from "react-bootstrap";
/*Get the title key from the json file and put it in a const named title*/
const title = article2data.title;

/*get the body array from the article2-json and store it in a const*/
const body = article2data.body

/*Get access to all the keys inside the model key*/
const bodyModel = body.map((bodyModelDetails, key)=>{
    return(
            bodyModelDetails.model
    )})



class Article2 extends Component{
    render(){
        return(
            <div>
                <Card>

                    {/* Get the image from the json article file and render it, with the appropriate height and width. */}
                    <CardImg src={bodyModel[1].url} height={bodyModel[1].height} width={bodyModel[1].width}/>
                    <Card.Body>
                        <Card.Title>
                            {title}
                        </Card.Title>
                    <Card.Header>
                        <i>
                            {/* Render the heading from the article-2.json file */}
                            {bodyModel[0].text}
                        </i>

                    </Card.Header>
                        <Card.Text>
                            <p>
                                {/* Render the paragraphs from the article-2.json file*/}
                                {bodyModel[2].text}
                            </p>
                            <p>
                                {bodyModel[3].text}
                            </p>
                            <div>
                                <CardImg src={bodyModel[4].url}  height={bodyModel[4].height} width={bodyModel[4].width}/>
                            </div>

                            <p>
                                {bodyModel[5].text}
                            </p>
                            <div>
                                <CardImg src={bodyModel[6].url}  height={bodyModel[6].height} width={bodyModel[6].width}/>
                            </div>
                            <p>
                                {bodyModel[7].text}
                            </p>
                        </Card.Text>
                       <div>
                       </div>
                    </Card.Body>
                    <Card.Footer>
                     <div>
                         <Button>Ratings</Button>
                     </div>

                    </Card.Footer>
                </Card>

            </div>
            );
    }
}

export default Article2;