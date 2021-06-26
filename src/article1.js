import React, { Component } from 'react';
import data from "./data/article-1.json";
import {Card, CardDeck, CardImg} from "react-bootstrap";



const title = data.title;

const body = data.body

const bodyModel = body.map((bodyModelDetails, key)=>{
    return(

            bodyModelDetails.model
    )})



class Article1 extends Component{
    render(){
        return(
            <div>
                <Card>
                    <CardImg src={bodyModel[2].url} height={bodyModel[2].height} width={bodyModel[2].width}/>
                    <Card.Body>
                        <Card.Title>
                            {title}
                        </Card.Title>
                    <Card.Header>
                        <i>
                            {bodyModel[0].text}
                        </i>

                    </Card.Header>
                        <Card.Text>
                            <p>
                                {bodyModel[1].text}
                            </p>
                            <p>
                                {bodyModel[3].text}
                            </p>
                            <p>
                                {bodyModel[4].text}
                            </p>
                            <p>
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