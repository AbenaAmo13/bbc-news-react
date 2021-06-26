import React, { Component } from 'react';
import data from "./data/article-1.json";
import {Card, CardImg} from "react-bootstrap";
import image from './image.jpg'

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
                    <Card.Body>
                        <Card.Title>
                            {title}
                        </Card.Title>
                    <CardImg src={bodyModel[2].url}/>
                       <div>

                       </div>




                    </Card.Body>
                </Card>

            </div>
            );
    }
}

export default Article1;