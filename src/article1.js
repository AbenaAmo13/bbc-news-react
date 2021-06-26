import React, { Component } from 'react';
/* import the article 1 json file as data to be able to get the information from it */
import data from "./data/article-1.json";
/* Import card so you will be able to use the card component*/
import {Card, CardDeck, CardImg} from "react-bootstrap";
/*get the title key from the json file and put it in a const named title*/
const title = data.title;

/*get the body array from the artile1-json and store it in a const*/
const body = data.body

/*Get access to all the keys inside the model key*/
const bodyModel = body.map((bodyModelDetails, key)=>{
    return(

            bodyModelDetails.model
    )})



class Article1 extends Component{
    render(){
        return(
            <div>
                <Card>

                    {/* Get the image from the json article file and render it, with the appropriate height and width. */}
                    <CardImg src={bodyModel[2].url} height={bodyModel[2].height} width={bodyModel[2].width}/>
                    <Card.Body>
                        <Card.Title>
                            {title}
                        </Card.Title>
                    <Card.Header>
                        <i>
                            {/* Render the heading from the article.json file */}
                            {bodyModel[0].text}
                        </i>

                    </Card.Header>
                        <Card.Text>
                            <p>
                                {/* Render the paragraphs from the article.json file*/}
                                {bodyModel[1].text}
                            </p>
                            <p>
                                {bodyModel[3].text}
                            </p>
                            <p>
                                {bodyModel[4].text}
                            </p>
                            <p>
                                {/* Render the list items in the article.json file*/}
                                <li>
                                    {bodyModel[5].items[0]}
                                </li>
                                <li>
                                    {bodyModel[5].items[1]}
                                </li>


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

export default Article1;