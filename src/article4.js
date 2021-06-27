import React, { Component } from 'react';
/* import the article 4 json file as data to be able to get the information from it */

import article4data from "./data/article-4.json";
/* Import card so you will be able to use the card component*/
import {Card, CardDeck, CardImg} from "react-bootstrap";
/*get the title key from the json file and put it in a const named title*/
const title = article4data.title;

/*get the body array from the article4-json and store it in a const*/
const body = article4data.body

/*Get access to all the keys inside the model key*/
const bodyModel = body.map((bodyModelDetails, key)=>{
    return(
            bodyModelDetails.model
    )})

class Article4 extends Component{
    render(){
        return(
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {title}
                        </Card.Title>
                    <Card.Header>
                        <i>
                            {/* Render the heading from the article-4.json file */}
                            {bodyModel[0].text}
                        </i>

                    </Card.Header>
                        <Card.Text>
                            <p>
                                {/* Render the paragraphs from the article.json file*/}
                                {bodyModel[1].text}
                            </p>

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


                            <p>
                                {bodyModel[3].text}
                            </p>
                            <ul>
                                <li>
                                    {bodyModel[4].items[0]}
                                </li>
                                <li>
                                    {bodyModel[4].items[1]}
                                </li>
                            </ul>
                            <p>
                                {bodyModel[5].text}
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

export default Article4;